// Navigation mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fermer le menu en cliquant sur un lien
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Animation des barres de compétences
function animateSkills() {
    const skillProgresses = document.querySelectorAll('.skill-progress');
    
    skillProgresses.forEach(progress => {
        const level = progress.getAttribute('data-level');
        progress.style.width = level + '%';
    });
}

// Observer pour l'animation des compétences
const skillsSection = document.querySelector('.skills');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
        }
    });
}, { threshold: 0.5 });

if (skillsSection) {
    observer.observe(skillsSection);
}

// Navigation sticky
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Formulaire de contact
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Récupération des données du formulaire
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simulation d'envoi
        console.log('Données du formulaire:', data);
        
        // Message de succès
        alert('Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.');
        contactForm.reset();
    });
}

// Animation au scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.project-card, .skill-category, .stat');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialisation des animations
window.addEventListener('load', () => {
    // Préparation des éléments pour l'animation
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .stat');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    animateOnScroll();
});

window.addEventListener('scroll', animateOnScroll);

// Gestion des liens actifs dans la navigation
function setActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveNavLink);

// Animation du code dans le hero
function animateCode() {
    const codeElement = document.querySelector('.code-animation code');
    if (codeElement) {
        const originalCode = codeElement.textContent;
        codeElement.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalCode.length) {
                codeElement.textContent += originalCode.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
    // Démarrer l'animation quand la section est visible
    const heroSection = document.querySelector('.hero');
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typeWriter();
                heroObserver.unobserve(heroSection);
            }
        });
    });

    heroObserver.observe(heroSection);
    }
}

// Initialiser l'animation du code
animateCode();

// Console log de bienvenue
console.log(`
%cBienvenue sur mon portfolio ! 👋
%cDéveloppeur Web Full Stack passionné
%cN'hésitez pas à me contacter pour discuter de votre projet.
`, 
'color: #2563eb; font-size: 16px; font-weight: bold;',
'color: #64748b; font-size: 14px;',
'color: #94a3b8; font-size: 12px;'
);