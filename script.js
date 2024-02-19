// Smooth Scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    });
});

// Dynamic Year for Footer
document.querySelector('footer p').textContent = `© ${new Date().getFullYear()} Raghuvir Dav`;


// This function hides all sections and then shows the one with the provided ID
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Initially hide all sections except 'about'
window.onload = function() {
    showSection('about'); // Show 'about' section by default
};
