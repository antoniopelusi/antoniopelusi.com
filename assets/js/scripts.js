// ===== UTILITIES =====
const Utils = {
    // DOM element selector with existence check
    select(selector) {
        return document.querySelector(selector);
    },

    selectAll(selector) {
        return document.querySelectorAll(selector);
    },

    // Throttle function for performance optimization
    throttle(func, delay) {
        let timeoutId;
        let lastExecTime = 0;

        return function (...args) {
            const currentTime = Date.now();
            const timeSinceLastExec = currentTime - lastExecTime;

            if (timeSinceLastExec > delay) {
                func.apply(this, args);
                lastExecTime = currentTime;
            } else {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    func.apply(this, args);
                    lastExecTime = Date.now();
                }, delay - timeSinceLastExec);
            }
        };
    },
};

// ===== THEME TOGGLE =====
class ThemeToggle {
    constructor() {
        this.toggleButton = Utils.select('[data-toggle="theme"]');
        this.currentTheme = localStorage.getItem("theme") || "dark";

        this.init();
    }

    init() {
        if (!this.toggleButton) return;

        this.toggleButton.addEventListener("click", (e) => {
            e.preventDefault();
            this.toggle();
        });
    }

    toggle() {
        this.currentTheme = this.currentTheme === "dark" ? "light" : "dark";
        this.apply(this.currentTheme);
        localStorage.setItem("theme", this.currentTheme);
    }

    apply(theme) {
        document.documentElement.setAttribute("data-theme", theme);
    }
}

// ===== TYPING ANIMATION =====
class TypingAnimation {
    constructor(phrases, options = {}) {
        this.phrases = phrases || [];
        this.options = {
            typingSpeed: 100,
            deletingSpeed: 50,
            pauseAfterTyping: 2000,
            pauseAfterDeleting: 500,
            initialDelay: 1000,
            ...options,
        };

        this.phraseIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;

        this.textElement = Utils.select("header p span:not([data-cursor])");
        this.cursorElement = Utils.select("header p span[data-cursor]");

        this.init();
    }

    init() {
        if (
            !this.textElement ||
            !this.cursorElement ||
            this.phrases.length === 0
        )
            return;

        this.cursorElement.style.display = "inline";
        setTimeout(() => this.type(), this.options.initialDelay);
    }

    type() {
        const currentPhrase = this.phrases[this.phraseIndex];

        if (this.isDeleting) {
            this.charIndex--;
            if (this.charIndex < 0) {
                this.nextPhrase();
                return;
            }
        } else {
            this.charIndex++;
            if (this.charIndex > currentPhrase.length) {
                setTimeout(() => {
                    this.isDeleting = true;
                    this.type();
                }, this.options.pauseAfterTyping);
                return;
            }
        }

        this.textElement.textContent = currentPhrase.substring(
            0,
            this.charIndex,
        );

        const delay = this.isDeleting
            ? this.options.deletingSpeed
            : this.options.typingSpeed;
        setTimeout(() => this.type(), delay);
    }

    nextPhrase() {
        this.charIndex = 0;
        this.isDeleting = false;
        this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
        setTimeout(() => this.type(), this.options.pauseAfterDeleting);
    }
}

// ===== NAVIGATION HIGHLIGHTER =====
class NavigationHighlighter {
    constructor() {
        this.sections = this.mapSections();
        this.threshold = window.innerHeight * 0.3;

        this.init();
    }

    init() {
        if (this.sections.length === 0) return;

        this.handleScroll = Utils.throttle(
            this.updateActiveSection.bind(this),
            100,
        );
        window.addEventListener("scroll", this.handleScroll, { passive: true });
        this.updateActiveSection();
    }

    mapSections() {
        const navLinks = Utils.selectAll("aside nav a");
        const sections = [];

        navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            let element = null;
            let isAbout = false;

            if (href === "#") {
                element = document.body;
                isAbout = true;
            } else if (href?.startsWith("#")) {
                element = document.getElementById(href.substring(1));
            }

            if (element) {
                sections.push({ link, element, isAbout });
            }
        });

        return sections;
    }

    updateActiveSection() {
        const scrollTop = window.pageYOffset;
        let activeSection = null;

        // Check if we're at the top (About section)
        if (scrollTop < this.threshold) {
            activeSection = this.sections.find((s) => s.isAbout);
        } else {
            // Find the current section based on scroll position
            for (let i = this.sections.length - 1; i >= 0; i--) {
                const section = this.sections[i];
                if (!section.isAbout) {
                    const rect = section.element.getBoundingClientRect();
                    if (rect.top <= this.threshold) {
                        activeSection = section;
                        break;
                    }
                }
            }
        }

        // Update active states
        this.sections.forEach((section) => {
            const isActive = section === activeSection;

            if (isActive) {
                section.link.setAttribute("data-active", "true");
            } else {
                section.link.removeAttribute("data-active");
            }
        });
    }
}

// ===== ABOUT LINK HANDLER =====
class AboutLinkHandler {
    constructor() {
        this.aboutLink = Utils.select('aside nav a[href="#"]');
        this.init();
    }

    init() {
        if (!this.aboutLink) return;

        this.aboutLink.addEventListener("click", this.handleClick.bind(this));
    }

    handleClick(e) {
        e.preventDefault();

        // Clean URL
        const cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState(null, null, cleanUrl);

        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

// ===== CONFIG LOADER =====
class ConfigLoader {
    static async load() {
        try {
            const response = await fetch("/assets/config.json");
            return response.ok ? await response.json() : null;
        } catch (error) {
            console.warn("Could not load config.json:", error.message);
            return null;
        }
    }
}

// ===== APP INITIALIZATION =====
class App {
    constructor() {
        this.components = [];
    }

    async init() {
        // Mark body as JS-enabled
        document.body.setAttribute("data-js", "");

        // Load configuration
        const config = await ConfigLoader.load();

        // Initialize components
        this.initializeComponents(config);
    }

    initializeComponents(config) {
        // Theme toggle
        this.components.push(new ThemeToggle());

        // About link handler
        this.components.push(new AboutLinkHandler());

        // Typing animation (if config available)
        if (config?.typing?.phrases && config?.typing?.options) {
            this.components.push(
                new TypingAnimation(
                    config.typing.phrases,
                    config.typing.options,
                ),
            );
        }

        // Navigation highlighter
        this.components.push(new NavigationHighlighter());
    }
}

// ===== BOOTSTRAP =====
document.addEventListener("DOMContentLoaded", () => {
    const app = new App();
    app.init();
});
