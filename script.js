// ======================
// UORA WEBSITE SCRIPT
// ======================

// Show page smoothly when loaded
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Cart Counter
let cartCount = 0;

const cartButtons = document.querySelectorAll(".cart-btn");
const cartCounter = document.getElementById("cartCount");

cartButtons.forEach((button) => {

    button.addEventListener("click", () => {

        cartCount++;

        cartCounter.textContent = cartCount;

        const originalText = button.textContent;

        button.textContent = "Added ✓";
        button.disabled = true;

        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, 1500);

    });

});

// Notify Me Button

const notifyBtn = document.getElementById("notifyBtn");

if (notifyBtn) {

    notifyBtn.addEventListener("click", () => {

        alert(
            "🍮 Thank you for your interest in UORA!\n\nPremium halwas are coming soon.\nStay connected through Instagram and WhatsApp."
        );

    });

}

// Console Message

console.log(
    "UORA Loaded Successfully | Expect More. Experience More."
);