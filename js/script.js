//Donating Configuration

const donationUrl = 
    "https://www.zeffy.com/en-US/donation-form/community-leadership-program-for-teens";

    const donateButtons = document.querySelectorAll(".donate-button");

    donateButtons.forEach(button => {
        button.href = donationUrl;
        button.target = "_blank";
    });

    //Hero Carousel

const heroSlides = document.querySelectorAll(".hero-slide");

let currentSlide = 0;

if (heroSlides.length > 1) {

setInterval(() => {
    heroSlides[currentSlide].classList.remove("active");

    currentSlide = (currentSlide +1) % heroSlides.length;

    heroSlides[currentSlide].classList.add("active");
}, 5000);

}

// Donation Counter

const donationCount = document.querySelector("#donation-count");

function animateCounter(target) {
    let current = 0;

    const interval = setInterval(() => {
        current++;

        donationCount.textContent = current;

        if (current >= target) {
            clearInterval(interval);
        }
    }, 20);
}

animateCounter(247);