document.addEventListener("DOMContentLoaded", () => {
	if (sessionStorage.getItem("fromLink") === "true") {
		document
			.querySelectorAll(
				"main left div p, main left div a, main left div h2, left img, #indexseparator",
			)
			.forEach((el) => {
				el.style.visibility = "visible";
				el.style.opacity = "1";
			});

		sessionStorage.removeItem("fromLink");
	} else {
		const typingElements = document.querySelectorAll(
			"main left div p, main left div a, main left div h2",
		);
		const images = document.querySelectorAll("left img");
		const indexseparator = document.getElementById("indexseparator");

		setTimeout(() => {
			typingElements.forEach((el, index) => {
				const text = el.textContent.trim();
				el.textContent = "";
				el.setAttribute("data-text", text);
				el.classList.add("typing");
				el.style.visibility = "visible";
				el.style.opacity = "1";

				setTimeout(() => {
					typeText(el, text);
				}, index * 500);
			});

			function typeText(element, text, index = 0) {
				if (index < text.length) {
					element.textContent += text[index];
					setTimeout(() => typeText(element, text, index + 1), 70);
				} else {
					element.classList.remove("typing");
				}
			}

			images.forEach((img, index) => {
				const delay = index === 0 ? 1850 : index * 450;

				setTimeout(() => {
					img.style.visibility = "visible";
					img.classList.add("visible");
				}, delay);
			});

			setTimeout(() => {
				indexseparator.style.opacity = 1;
			}, 2700);
		}, 300);
	}
});
