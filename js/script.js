//Donating Configuration

const donationUrl = 
    "https://www.zeffy.com/en-US/donation-form/community-leadership-program-for-teens";

    const donateButtons = document.querySelectorAll(".donate-button");

    donateButtons.forEach(button => {
        button.href = donationUrl;
        button.target = "_blank";
    });

    