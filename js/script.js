//Donating Configuration

const donationUrl = 
    "https://www.zeffy.com/en-US/donation-form/community-leadership-program-for-teens";

    const donateButtons = document.querySelectorAll(".donate-button");

    donateButtons.forEach(button => {
        button.href = donationUrl;
        button.target = "_blank";
        button.rel = "noopener noreferrer";

        button.addEventListener("click", async () => {
            try {
                const response = await fetch("/.netlify/functions/counter", {
                    method: "POST",
                });

                if (!response.ok) {
                    throw new Error("Counter update failed");
                }

                const data = await response.json();

                donationCount.textContent = data.count;
            } catch (error) {
                console.error("Unable to update donation count:", error);
            }
        });
    });

    // Hero Carousel

const heroSlides = document.querySelectorAll(".hero-slide");
const hero = document.querySelector(".hero");

let currentSlide = 0;
let carouselInterval = null;

function showNextSlide() {
    heroSlides[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % heroSlides.length;

    heroSlides[currentSlide].classList.add("active");
}

function startCarousel() {
    // Prevent multiple timers from running at the same time
    stopCarousel();

    carouselInterval = setInterval(showNextSlide, 5000);
}

function stopCarousel() {
    if (carouselInterval !== null) {
        clearInterval(carouselInterval);
        carouselInterval = null;
    }
}

if (
    hero &&
    heroSlides.length > 1 &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
    startCarousel();

    hero.addEventListener("mouseenter", stopCarousel);
    hero.addEventListener("mouseleave", startCarousel);
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

async function loadDonationCount() {
    try {
        const response = await fetch("/.netlify/functions/counter");
        const data = await response.json();

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
            donationCount.textContent = data.count;
        } else {
            animateCounter(data.count);
        }
    } catch (error) {
        console.error("Error loading donation count:", error);
    }
}

loadDonationCount();

