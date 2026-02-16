// Navbar scroll effect
window.addEventListener('scroll', function () {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth scroll and menu close
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Only smooth scroll for internal anchor links
        if (href.startsWith('#')) {
            e.preventDefault();

            // Close menu if open
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        } else {
            // For external links (like faq.html), close the menu but allow normal navigation
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});
