// ===== THEME TOGGLE =====
class ThemeToggle {
    constructor() {
        this.toggleLink = document.querySelector('[data-toggle="theme"]');
        this.currentTheme = localStorage.getItem("theme") || "dark";

        if (this.toggleLink) {
            this.toggleLink.addEventListener("click", (e) => {
                e.preventDefault();
                this.toggleTheme();
            });
        }
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === "dark" ? "light" : "dark";
        this.applyTheme(this.currentTheme);
        localStorage.setItem("theme", this.currentTheme);
    }

    applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
    }
}

// ===== TYPING ANIMATION =====
class TypingAnimation {
    constructor(phrases, options) {
        this.phrases = phrases;
        this.options = options;
        this.phraseIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.textElement = document.querySelector(
            "header p span:not([data-cursor])",
        );
        this.cursorElement = document.querySelector(
            "header p span[data-cursor]",
        );

        if (this.textElement && this.cursorElement) {
            this.cursorElement.style.display = "inline";
            setTimeout(() => this.type(), this.options.initialDelay);
        }
    }

    type() {
        const phrase = this.phrases[this.phraseIndex];

        if (this.isDeleting) {
            this.charIndex--;
            if (this.charIndex < 0) {
                this.nextPhrase();
                return;
            }
        } else {
            this.charIndex++;
            if (this.charIndex > phrase.length) {
                setTimeout(() => {
                    this.isDeleting = true;
                    this.type();
                }, this.options.pauseAfterTyping);
                return;
            }
        }

        this.textElement.textContent = phrase.substring(0, this.charIndex);

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
        if (this.sections.length > 0) {
            this.handleScroll = this.throttle(
                this.updateActiveSection.bind(this),
                100,
            );
            window.addEventListener("scroll", this.handleScroll, {
                passive: true,
            });
            this.updateActiveSection();
        }
    }

    mapSections() {
        const navLinks = document.querySelectorAll("aside nav a");
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
        const windowHeight = window.innerHeight;
        const threshold = windowHeight * 0.3;

        let activeSection = null;

        if (scrollTop < threshold) {
            activeSection = this.sections.find((s) => s.isAbout);
        } else {
            for (let i = this.sections.length - 1; i >= 0; i--) {
                const section = this.sections[i];
                if (!section.isAbout) {
                    const rect = section.element.getBoundingClientRect();
                    if (rect.top <= threshold) {
                        activeSection = section;
                        break;
                    }
                }
            }
        }

        this.sections.forEach((section) => {
            if (section === activeSection) {
                section.link.setAttribute("data-active", "true");
            } else {
                section.link.removeAttribute("data-active");
            }
        });
    }

    throttle(func, delay) {
        let timeoutId;
        let lastExecTime = 0;

        return function (...args) {
            const currentTime = Date.now();

            if (currentTime - lastExecTime > delay) {
                func.apply(this, args);
                lastExecTime = currentTime;
            } else {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(
                    () => {
                        func.apply(this, args);
                        lastExecTime = Date.now();
                    },
                    delay - (currentTime - lastExecTime),
                );
            }
        };
    }
}

// ===== MAIN INITIALIZATION =====
async function loadConfig() {
    try {
        const response = await fetch("/assets/config.json");
        return response.ok ? await response.json() : null;
    } catch {
        return null;
    }
}

async function init() {
    document.body.setAttribute("data-js", "");

    const config = await loadConfig();

    new ThemeToggle();

    if (config?.typing?.phrases && config?.typing?.options) {
        new TypingAnimation(config.typing.phrases, config.typing.options);
    }

    new NavigationHighlighter();
}

document.addEventListener("DOMContentLoaded", init);
