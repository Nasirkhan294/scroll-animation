// Select all elements with the class "box"
const boxes = document.querySelectorAll(".box");

function checkBoxes() {
	// Calculate the trigger point (80% of the screen height)
	const triggerBottom = window.innerHeight * 0.80;

	// Loop through each box
	boxes.forEach((box) => {
		// Get the distance from the top of the viewport to the top of the box
		const boxTop = box.getBoundingClientRect().top;

		// If the top of the box is above the trigger point, show it
		if (boxTop < triggerBottom) {
			box.classList.add("show");
		} else {
			// Otherwise, hide it
			box.classList.remove("show");
		}
	});
}

// Run checkBoxes function whenever the user scrolls
window.addEventListener("scroll", checkBoxes);

// Run checkBoxes once when the page loads to check initial box positions
checkBoxes();
