// Toggle device info cards
function toggleInfo(id) {
    const element = document.getElementById(id);
    const header = element.previousElementSibling;
    
    element.classList.toggle("show");
    header.classList.toggle("active");
}

// Scroll animation for sections
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.1 });

sections.forEach(sec => observer.observe(sec));

// Carousel functionality
let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".carousel img");
    const indicators = document.querySelectorAll(".carousel-indicators span");
    
    slideIndex = (slideIndex + step + slides.length) % slides.length;
    
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === slideIndex);
    });
    
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle("active", i === slideIndex);
    });
}

function goToSlide(index) {
    slideIndex = index;
    const slides = document.querySelectorAll(".carousel img");
    const indicators = document.querySelectorAll(".carousel-indicators span");
    
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === slideIndex);
    });
    
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle("active", i === slideIndex);
    });
}

// Auto-advance carousel
setInterval(() => {
    moveSlide(1);
}, 5000);

// Back to top button functionality
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Close all other device cards when one is opened
document.querySelectorAll(".device-card h3").forEach(header => {
    header.addEventListener("click", function() {
        // If this card is being opened, close others
        if (!this.classList.contains("active")) {
            document.querySelectorAll(".device-card h3").forEach(otherHeader => {
                if (otherHeader !== this && otherHeader.classList.contains("active")) {
                    otherHeader.classList.remove("active");
                    otherHeader.nextElementSibling.classList.remove("show");
                }
            });
        }
    });
});