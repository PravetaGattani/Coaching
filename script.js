// Wait until the DOM is completely loaded
document.addEventListener("DOMContentLoaded", function() {

// --- Smooth Scroll for Navigation Links ---
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
const targetId = this.getAttribute('href').substring(1); // Get target section ID
const targetElement = document.getElementById(targetId);

window.scrollTo({
top: targetElement.offsetTop - 60, // Adjust for sticky navbar
behavior: "smooth" // Smooth scroll effect
});
});
});

// --- Form Validation ---
const form = document.getElementById('registrationForm');
form.addEventListener('submit', function(e) {
e.preventDefault(); // Prevent form submission to validate

const name = document.getElementById('name').value;
const phone = document.getElementById('phone').value;
const email = document.getElementById('email').value;

// Check if all fields are filled
if (!name || !phone || !email) {
alert("Please fill out all the fields.");
return;
}

// Validate Email Format
if (!validateEmail(email)) {
alert("Please enter a valid email address.");
return;
}

// Success Message and Reset Form
alert("Registration Successful! We'll contact you soon.");
form.reset(); // Reset the form after submission
});

// --- Email Validation Function ---
function validateEmail(email) {
const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Regex for email validation
return re.test(String(email).toLowerCase());
}

// --- Fade-In Animation for Sections on Scroll ---
const fadeInSections = document.querySelectorAll('.fade-in');

// Function to check if section is in view
function checkVisibility() {
fadeInSections.forEach(section => {
const sectionTop = section.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

if (sectionTop <= windowHeight - 100) { // Trigger fade-in when section is near viewport
section.classList.add('visible');
}
});
}

// Check visibility on scroll
window.addEventListener('scroll', checkVisibility);

// Initial visibility check for sections on page load
checkVisibility();

});
