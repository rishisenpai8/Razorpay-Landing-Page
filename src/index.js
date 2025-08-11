//Gsap Scroll animation stack Logic
document.querySelectorAll('.card').forEach(card => {
    gsap.to(card, {
        scale: 0.7,
        opacity: 0,
        scrollTrigger: {
            trigger: card,
            start: "top 7%",
            end: "bottom 14%",
            scrub: true,
        }
    })
})

//company logos aniamtion
const logos = document.getElementsByClassName('logo');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const y = entry.boundingClientRect.y;
        const windowHeight = window.innerHeight;

        const topBoundary = windowHeight * 0.2;   // 20% from top
        const bottomBoundary = windowHeight * 0.8; // 20% from bottom

        // if (y > topBoundary && y < bottomBoundary) {
        //     entry.target.classList.remove('grayscale');
        // } else {
        //     entry.target.classList.add('grayscale');
        // }
    });
}, {
    threshold: 0,
});

[...logos].forEach(logo => {
    observer.observe(logo);
});

// Not a developer section next card Logic
const cardContainer = document.querySelector('.cardContainer')
const boxes = document.querySelectorAll('.cardContainer > div')
const boxWidth = boxes[0].offsetWidth + 20;
const totalBoxes = boxes.length;

const leftArrow = document.getElementById('leftArrow')
const rightArrow = document.getElementById('rightArrow')

let currentIndex = 0;

const updateButtons = () => {
    leftArrow.style.display = currentIndex == 0 ? 'none' : 'block'
    rightArrow.style.display = currentIndex >= totalBoxes - 3 ? 'none' : 'block'
}

const slide = (direction) => {
    if (direction === 'right' && currentIndex < totalBoxes - 3) {
        currentIndex++
    } else if (direction == 'left' && currentIndex > 0) {
        currentIndex--
    }

    cardContainer.style.transform = `translateX(-${boxWidth * currentIndex}px)`;
    updateButtons();
}

rightArrow.addEventListener('click', () => {
    slide('right')
    console.log('clicked');
})

leftArrow.addEventListener('click', () => slide('left'))

updateButtons();


// Founder review Logic

