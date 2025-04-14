document.addEventListener("DOMContentLoaded", () => {
	function changeBackground() {
		let bsodElement = document.querySelector('bsod');
		let originalOpacity = bsodElement.style.opacity || 1;
    
		bsodElement.style.opacity = 1;

		setTimeout(() => {
			bsodElement.style.opacity = 0.7;
        
			setTimeout(() => {
				bsodElement.style.opacity = originalOpacity;
			}, 200);
		}, 1000);

		let randomTime = Math.floor(Math.random() * 5000) + 1000;
		setTimeout(changeBackground, randomTime);
	}

	changeBackground();
	
	function setFromLink() {
		sessionStorage.setItem("fromLink", "true");
	}
});