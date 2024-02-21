// Smooth Scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    });
});

// Dynamic Year for Footer
//document.querySelector('footer p').textContent = `© ${new Date().getFullYear()} Raghuvir Dav`;


// This function hides all sections except the one with the provided ID
function showSection(sectionId) {
    // Hide all sections except the one with the provided ID
    document.querySelectorAll('.section').forEach(function(section) {
        if(section.id !== sectionId) {
            section.style.display = 'none';
        }
    });


    // Get the element of the section you want to show
    const sectionToShow = document.getElementById(sectionId);

    // Set the display property accordingly
    if(sectionId === 'about') {
        sectionToShow.style.display = 'flex'; // Use 'flex' for the 'about' section
    } else {
        sectionToShow.style.display = 'block'; // Use 'block' for other sections
    }
}


// Call showSection for 'about' when the window loads
window.onload = function() {
    showSection('about');
};