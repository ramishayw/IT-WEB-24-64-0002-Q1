document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal({ 
        reset: true,
        distance: '60px',
        duration: 2500,
        delay: 400 
    });
    
    ScrollReveal().reveal('.hero-title, .section-title', { delay: 500 });
    ScrollReveal().reveal('.lead, .footer-description, .trust-us-title', { delay: 1000 });
    ScrollReveal().reveal('.footer-form, .hero-form, .task-button, .workflow-apps', { delay: 1500 });

    ScrollReveal().reveal('.feature-blue', { delay: 1000 });
    ScrollReveal().reveal('.feature-yellow', { delay: 1500 });
    ScrollReveal().reveal('.feature-gray', { delay: 2000 });

    ScrollReveal().reveal('.hero-image, .workflow-image, .person-right', { delay: 500, origin: 'right' });
    ScrollReveal().reveal('.task-management-image, .person-left', { delay: 500, origin: 'left' });
});