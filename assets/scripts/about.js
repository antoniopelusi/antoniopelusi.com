document.addEventListener("DOMContentLoaded", () => {
	pdfjsLib.GlobalWorkerOptions.workerSrc = "/assets/scripts/pdf.worker.min.js";

	const url = "/assets/data/cv.pdf";
	const container = document.getElementById("cvContainer");
	const loader = document.getElementById("loader");
	const loaderText = document.getElementById("loader-text");

	pdfjsLib
		.getDocument(url)
		.promise.then((pdf) => {
			const numPages = pdf.numPages;
			let renderedPages = 0;

			for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
				pdf
					.getPage(pageNumber)
					.then((page) => {
						const viewport = page.getViewport({ scale: 3 });
						const canvas = document.createElement("canvas");
						const context = canvas.getContext("2d", { alpha: true });

						canvas.id = `pdf-canvas-${pageNumber}`;
						canvas.classList.add("pdf-canvas");
						container.appendChild(canvas);

						canvas.width = viewport.width;
						canvas.height = viewport.height;
						canvas.style.width = "100%";

						const renderContext = {
							canvasContext: context,
							viewport: viewport,
							background: "transparent",
						};

						page.render(renderContext).promise.then(() => {
							canvas.classList.add("fade-in");
							renderedPages++;

							if (renderedPages === numPages) {
								loader.style.display = "none";
								loaderText.style.display = "none";
							}
						});
					})
					.catch((error) => {
						console.error(
							`Errore durante il caricamento della pagina ${pageNumber}:`,
							error,
						);
					});
			}
		})
		.catch((error) => {
			console.error("Errore durante il caricamento del PDF:", error);
			loader.textContent = "Errore nel caricamento del PDF.";
		});
	
	function setFromLink() {
   	sessionStorage.setItem("fromLink", "true");
	}
});
