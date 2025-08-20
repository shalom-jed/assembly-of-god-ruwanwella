// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Close mobile menu if open
        document.querySelector('nav ul').classList.remove('show');
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple form validation
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    
    if (name  && message) {
        // In a real implementation, you would send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    } else {
        alert('Please fill in all required fields.');
    }
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        header.style.background = 'rgba(255,255,255,0.95)';
    } else {
        header.style.boxShadow = 'none';
        header.style.background = 'white';
    }
    
    // Show/hide back to top button
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 500) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});

// Back to top functionality
document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Active link highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});