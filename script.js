document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('visitorForm');
    const messageDiv = document.getElementById('thankYouMessage');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    // Mobile navigation toggle
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('open');
        });

        // Close mobile nav when clicking a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
            });
        });
    }

    // Form submission handling
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form from reloading the page
            
            // Get values from form
            const name = document.getElementById('name').value;
            const gender = document.getElementById('gender').value;
            const inGameName = document.getElementById('inGameName').value;
            const uid = document.getElementById('uid').value;
            
            // Display thank-you message
            if (messageDiv) {
                messageDiv.style.display = 'block';
                messageDiv.innerHTML = `🎉 Thanks for visiting the site, <strong>${gender} ${name}</strong>!<br>Your IGN is <strong>${inGameName}</strong> and BGMI UID is <strong>${uid}</strong>. Welcome to the LPX community!`;
                
                // Smooth scroll to thank you message
                messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    }

    // Scroll active link highlight
    const sections = document.querySelectorAll('section, .hero');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (current && link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});