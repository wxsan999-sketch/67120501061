// ===== 1. Click a step to mark it as done =====
const stepsList = document.querySelector(".steps-list");
const stepCount = document.getElementById("stepCount");

function updateStepCount() {
	const total = stepsList.children.length;
	const done = stepsList.querySelectorAll("li.done").length;
	stepCount.textContent = "(" + done + " / " + total + " done)";
}

// one listener on the <ol> (event delegation)
stepsList.addEventListener("click", function (event) {
	const step = event.target.closest("li");
	if (step) {
		step.classList.toggle("done");
		updateStepCount();
	}
});

updateStepCount();

// ===== 2. Click a photo to view it larger =====
const zoomImages = document.querySelectorAll(".side-img, .gallery-img, .hero-img");

function openLightbox(src, alt) {
	const overlay = document.createElement("div");
	overlay.className = "lightbox";

	const img = document.createElement("img");
	img.src = src;
	img.alt = alt;

	const caption = document.createElement("p");
	caption.textContent = alt + " (click anywhere to close)";

	overlay.appendChild(img);
	overlay.appendChild(caption);
	document.body.appendChild(overlay);

	overlay.addEventListener("click", function () {
		overlay.remove();
	});
}

for (let i = 0; i < zoomImages.length; i++) {
	zoomImages[i].addEventListener("click", function () {
		openLightbox(this.src, this.alt);
	});
}

// close the lightbox with the Escape key
document.addEventListener("keydown", function (event) {
	if (event.key === "Escape") {
		const overlay = document.querySelector(".lightbox");
		if (overlay) overlay.remove();
	}
});
