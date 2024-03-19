window.addEventListener("scroll", function () {
	const arrowDown = document.getElementById("arrowDown");
	let arrowDownDisplay = arrowDown.style.display;
	if (window.pageYOffset <= 1) {
		arrowDown.style.display = "block";
	}else{
		arrowDown.style.display = "none";
    }
});
