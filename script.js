document.addEventListener("DOMContentLoaded", function () {
    // Dark/Light Mode Toggle
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", toggleTheme);
    }

    // Image Slider
    let currentSlide = 0;
    const images = document.querySelectorAll(".product-image");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    function updateSlide() {
        images.forEach((img, index) => {
            img.style.display = index === currentSlide ? "block" : "none";
        });
    }

    function moveSlide(direction) {
        currentSlide = (currentSlide + direction + images.length) % images.length;
        updateSlide();
    }

    if (images.length > 0) {
        updateSlide();
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener("click", () => moveSlide(-1));
            nextBtn.addEventListener("click", () => moveSlide(1));
        }
    }

    // Shopping Cart
    let cart = [];
    const cartItems = document.getElementById("cart-items");
    const addToCartBtn = document.getElementById("add-to-cart");

    function displayCart() {
        if (cartItems) {
            cartItems.innerHTML = "";
            cart.forEach(item => {
                const div = document.createElement("div");
                div.textContent = `${item.name} - ${item.price} BDT`;
                cartItems.appendChild(div);
            });
        }
    }

    if (addToCartBtn) {
        addToCartBtn.addEventListener("click", function () {
            cart.push({ name: "Pepper Spray", price: 800 });
            displayCart();
        });
    }

    // Apply Coupon
    const applyCouponBtn = document.getElementById("apply-coupon");

    if (applyCouponBtn) {
        applyCouponBtn.addEventListener("click", function () {
            const couponCode = document.getElementById("coupon")?.value;
            if (couponCode === "LUMEON10") {
                alert("Coupon applied! 10% off.");
            } else {
                alert("Invalid coupon code.");
            }
        });
    }

    // Checkout
    const checkoutBtn = document.getElementById("checkout");

    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", function () {
            alert("Proceeding to checkout.");
        });
    }

    // Load Theme on Page Load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        if (themeToggle) {
            themeToggle.textContent = "🌞";
        }
    }
});

// Dark/Light Mode Toggle Function
function toggleTheme() {
    const body = document.body;
    const isDarkMode = body.classList.toggle("dark-mode");

    // Save theme preference
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    // Update button icon
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.textContent = isDarkMode ? "🌞" : "🌙";
    }
}
