// ===== 1. Ingredient checklist =====
const main1 = document.getElementById("main1");
const ingredients = main1.querySelectorAll("li");
const ingredientCount = document.getElementById("ingredientCount");

function updateIngredientCount() {
	const checked = main1.querySelectorAll("li.checked").length;
	ingredientCount.textContent = "(" + checked + " / " + ingredients.length + " ready)";
}

// one listener on the section (event delegation)
main1.addEventListener("click", function (event) {
	const item = event.target.closest("li");
	if (item) {
		item.classList.toggle("checked");
		updateIngredientCount();
	}
});

updateIngredientCount();
