// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Home icon - scroll to top
const homeIcon = document.getElementById('homeIcon');
homeIcon.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/hide home icon based on scroll position
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        homeIcon.style.display = 'flex';
    } else {
        homeIcon.style.display = 'none';
    }
});

// Initially hide home icon
homeIcon.style.display = 'none';

// Recommendation form submission
const recommendationForm = document.getElementById('recommendationForm');
const popupOverlay = document.getElementById('popupOverlay');
const closePopupBtn = document.getElementById('closePopup');
const recommendationsList = document.getElementById('recommendationsList');

recommendationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nameInput = document.getElementById('nameInput');
    const messageInput = document.getElementById('messageInput');
    
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();
    
    // Validate that message is not empty
    if (!message) {
        alert('Please enter a recommendation message.');
        return;
    }
    
    // Create new recommendation card
    const newRecommendation = document.createElement('div');
    newRecommendation.className = 'recommendation-card';
    
    // Add name to the recommendation if provided
    let recommendationText = `"${message}"`;
    if (name) {
        recommendationText += `<br><br><strong>- ${name}</strong>`;
    }
    
    newRecommendation.innerHTML = recommendationText;
    
    // Add animation
    newRecommendation.style.opacity = '0';
    newRecommendation.style.transform = 'translateY(20px)';
    
    // Append to recommendations list
    recommendationsList.appendChild(newRecommendation);
    
    // Animate in
    setTimeout(() => {
        newRecommendation.style.transition = 'all 0.5s ease';
        newRecommendation.style.opacity = '1';
        newRecommendation.style.transform = 'translateY(0)';
    }, 10);
    
    // Show popup
    popupOverlay.classList.add('show');
    
    // Clear form
    nameInput.value = '';
    messageInput.value = '';
    
    // Scroll to new recommendation
    setTimeout(() => {
        newRecommendation.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }, 300);
});

// Close popup
closePopupBtn.addEventListener('click', function() {
    popupOverlay.classList.remove('show');
});

// Close popup when clicking on overlay
popupOverlay.addEventListener('click', function(e) {
    if (e.target === popupOverlay) {
        popupOverlay.classList.remove('show');
    }
});

// Add active state to navigation based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - 150)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.fontWeight = 'normal';
        if (link.getAttribute('href') === '#' + currentSection) {
            link.style.fontWeight = 'bold';
        }
    });
});

// Add entrance animations for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});

// Console message
console.log('Portfolio website loaded successfully!');
console.log('Created for ABC Consultants');

// Form validation enhancement
const messageInput = document.getElementById('messageInput');
messageInput.addEventListener('input', function() {
    if (this.value.length > 500) {
        this.style.borderColor = '#f56565';
    } else {
        this.style.borderColor = '#cbd5e0';
    }
});

// Keyboard accessibility for home icon
homeIcon.setAttribute('tabindex', '0');
homeIcon.setAttribute('role', 'button');
homeIcon.setAttribute('aria-label', 'Scroll to top');

homeIcon.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});