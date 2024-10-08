// Navbar scrolling effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Testimonial slider
const testimonialSlider = document.querySelector('.testimonial-slider');
const testimonials = document.querySelectorAll('.testimonial');

let currentTestimonial = 0;

testimonialSlider.addEventListener('click', (e) => {
    if (e.target.classList.contains('testimonial')) {
        currentTestimonial = Array.prototype.indexOf.call(testimonials, e.target);
        testimonialSlider.style.transform = `translateX(${currentTestimonial * -100}%)`;
    }
});

// Contact form validation
const contactForm = document.querySelector('.contact form');
const nameInput = document.querySelector('.contact input[name="name"]');
const emailInput = document.querySelector('.contact input[name="email"]');
const messageInput = document.querySelector('.contact textarea[name="message"]');

// Modal functionality
const contactBtn = document.getElementById('contact-btn');
const modal = document.getElementById('contact-modal');
const closeModal = document.getElementById('close-modal');

contactBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
        alert('Please fill out all fields');
    } else {
        // Send form data to server
        console.log('Form submitted successfully!');
    }
});
