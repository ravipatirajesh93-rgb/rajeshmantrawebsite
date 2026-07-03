// =============================
// Rajesh Travels JavaScript
// =============================

// Welcome Message
window.onload = function () {
    alert("🌍 Welcome to Rajesh Travels!\nYour dream vacation starts here.");
};

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

    });

});

// Booking Form Validation
function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let country = document.getElementById("country").value;

    if (name == "") {
        alert("Please enter your name.");
        return false;
    }

    if (email == "") {
        alert("Please enter your email.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return false;
    }

    if (phone == "") {
        alert("Please enter your mobile number.");
        return false;
    }

    if (phone.length != 10) {
        alert("Mobile number should contain 10 digits.");
        return false;
    }

    if (country == "") {
        alert("Please select a destination.");
        return false;
    }

    alert("✅ Thank You!\nYour booking request has been submitted successfully.");

    return true;

}

// Card Hover Animation
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";
        card.style.transition = "0.4s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// Scroll Animation
window.addEventListener("scroll", function () {

    let sections = document.querySelectorAll("section");

    sections.forEach(section => {

        let position = section.getBoundingClientRect().top;

        let screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
            section.style.transition = "1s";

        }

    });

});