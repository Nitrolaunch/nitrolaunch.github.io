document.addEventListener("DOMContentLoaded", () => {
	let includes = document.querySelectorAll("[data-include]");
	for (let elem of includes) {
		let file = elem.dataset.include;
		fetch(file).then((resp) => {
			resp.text().then((text) => {
				elem.innerHTML = text;
			})
		})
	}
});
