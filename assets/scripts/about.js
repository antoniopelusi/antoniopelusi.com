document.addEventListener("DOMContentLoaded", () => {
	pdfjsLib.GlobalWorkerOptions.workerSrc = "/assets/scripts/pdf.worker.min.js";

	const url = "/assets/data/cv.pdf";
	const container = document.getElementById("cvContainer");

	pdfjsLib
		.getDocument(url)
		.promise.then((pdf) => {
			const numPages = pdf.numPages;

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
		});
});
