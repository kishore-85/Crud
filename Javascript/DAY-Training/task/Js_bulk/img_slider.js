let index = 0;

function showSlide(n) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slides img').length;
    if (n >= totalSlides) {
        index = 0;
    } else if (n < 0) {
        index = totalSlides - 1;
    } else {
        index = n;
    }
    slides.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

// Initialize the slider
showSlide(index);

// Optional: Automatically move to the next slide every 3 seconds
setInterval(nextSlide, 3000);
