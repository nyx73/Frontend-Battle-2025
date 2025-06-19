// Hide loader after page loads
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.loader').style.opacity = '0';
        setTimeout(function() {
            document.querySelector('.loader').style.display = 'none';
        }, 500);
        
        // Animate elements with fade-in class
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 1500);
});

// Show notification function
function showNotification() {
    const notification = document.getElementById('notification');
    notification.classList.remove('hidden');
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
}

// Parallax effect
window.addEventListener('scroll', function() {
    const parallax = document.querySelectorAll('.parallax');
    const scrollPosition = window.pageYOffset;
    
    parallax.forEach(function(element) {
        if (window.innerWidth > 768) { // Only apply on desktop
            element.style.backgroundPositionY = (scrollPosition * 0.5) + 'px';
        }
    });
});

// Add to cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        showNotification();
        
        // Animation effect
        this.classList.add('animate-ping');
        setTimeout(() => {
            this.classList.remove('animate-ping');
        }, 500);
    });
});

// Mobile menu toggle (would need additional HTML structure)
// This is a placeholder for actual mobile menu functionality
document.querySelector('.nav-icon.fa-bars').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('hidden');
});

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');

// Set initial theme
if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
    document.body.classList.add('dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Toggle theme on button click
themeToggle.addEventListener('click', function() {
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});
