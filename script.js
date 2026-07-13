// ===============================
// Pet Healthcare & Adoption System
// script.js
// ===============================

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Login Button
const loginBtn = document.querySelector('.btn');

if (loginBtn) {
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert("Login page will be available soon!");
    });
}

// Adopt Buttons
const adoptButtons = document.querySelectorAll('.pet-card button');

adoptButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert("Thank you for your interest! Your adoption request has been submitted.");
    });
});

// Contact Form
const form = document.querySelector('form');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;

        if (name === "" || email === "") {
            alert("Please fill in all required fields.");
            return;
        }

        alert("Thank you, " + name + "! Your message has been sent successfully.");

        form.reset();
    });
}

// Header background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');

    if (window.scrollY > 50) {
        header.style.background = "#2d6a4f";
        header.style.transition = "0.4s";
    } else {
        header.style.background = "#ffffff";
    }
});

// Welcome Message
window.onload = function() {
    console.log("Welcome to Pet Healthcare & Adoption System");
};