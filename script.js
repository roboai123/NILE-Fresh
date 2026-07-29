// ===============================
// NILE Fresh JavaScript
// ===============================

// Runs when the page has loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("🌿 Welcome to NILE Fresh!");

    // Welcome popup
    setTimeout(() => {
        alert("Welcome to NILE Fresh 🌿\nFresh Fruits & Vegetables Delivered to Your Doorstep!");
    }, 500);
});

// Shop Now button
function shopNow() {
    alert("🛒 Shopping feature coming soon!");
}

// Add to Cart
function addToCart(productName) {
    alert(productName + " added to your cart 🛒");
}

// Search feature
function searchProducts() {
    const searchBox = document.getElementById("searchBox");

    if (!searchBox) return;

    const keyword = searchBox.value.trim();

    if (keyword === "") {
        alert("Please enter a product name.");
    } else {
        alert("Searching for: " + keyword);
    }
}
