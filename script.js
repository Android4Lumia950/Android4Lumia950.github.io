document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links (optional)
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Allow default navigation behavior to occur
            const targetId = this.getAttribute('href');
            window.location.href = targetId; // Directly navigate to the page
        });
    });
});
