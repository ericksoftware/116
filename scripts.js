        // Mobile menu functionality
        const menuToggle = document.querySelector('.menu-toggle');
        const closeBtn = document.querySelector('.close-btn');
        const nav = document.querySelector('nav');
        
        menuToggle.addEventListener('click', () => {
            nav.classList.add('active');
        });
        
        closeBtn.addEventListener('click', () => {
            nav.classList.remove('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });