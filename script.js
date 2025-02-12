const burgerBtn = document.querySelector(".burger-btn");
const menu = document.getElementById("menu");

// Add click event listener to burger button
burgerBtn.addEventListener("click", () => {
    // Toggle menu visibility
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});

// Close menu when clicking outside
document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !burgerBtn.contains(event.target)) {
        menu.style.display = "none";
    }
});