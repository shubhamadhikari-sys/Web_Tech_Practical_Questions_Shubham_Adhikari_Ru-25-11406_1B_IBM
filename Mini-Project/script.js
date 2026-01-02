// Change header background color on scroll
window.onscroll = function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#222';
    } else {
        header.style.background = '#333';
    }
};

// Console log message
console.log("Welcome to my portfolio!");