////////////////////////////////////

// console.log("LATE Meme Coin site loaded!");

////////////////////////////////////

let lateness = 0;
const emojiClocks = ['🕛', '🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🇱​🇦​🇹🇪'];

function updateClock(): void {
    lateness = (lateness + 1) % emojiClocks.length;
    const clockDisplay = document.getElementById('clock-display') as HTMLElement;
    clockDisplay.textContent = emojiClocks[lateness];
}

const toggleBounceButton = document.getElementById('toggle-bounce-button');
if (toggleBounceButton) {
    toggleBounceButton.addEventListener('click', updateClock);
}

////////////////////////////////////

function startBlink(): void {
    const blinkText = document.getElementById("blinking-text") as HTMLElement;
    setInterval(() => {
        blinkText.style.visibility = (blinkText.style.visibility === "hidden" ? "" : "hidden");
    }, 500);
}

////////////////////////////////////

class AnimationController {

    constructor(private element: HTMLElement) { }

    fadeIn(duration: number = 2.5): void {
        this.element.style.transition = `opacity ${duration}s`;
        this.element.style.opacity = '1';
    }

    fadeOut(duration: number = 2.5): void {
        this.element.style.transition = `opacity ${duration}s`;
        this.element.style.opacity = '0';
    }
}

function fadeFadingText(): void {
    const animationController = new AnimationController(document.getElementById('fading-text') as HTMLElement);
    animationController.fadeIn();
}

////////////////////////////////////

// This function switches the theme from web5 to web3
function updateTheme(): void {
    const body = document.body;
    const themeToggleButton = document.getElementById('theme-toggle') as HTMLButtonElement;

    if (body.classList.contains('body-web5')) {
        body.classList.remove('body-web5');
        body.classList.add('body-web3');
        themeToggleButton.textContent = 'Web5';
    } else {
        body.classList.remove('body-web3');
        body.classList.add('body-web5');
        themeToggleButton.textContent = 'Web3';
    }
}

////////////////////////////////////
// Export these so can be used in html?
window.updateClock = updateClock;
window.startBlink = startBlink;
window.updateTheme = updateTheme;
window.fadeFadingText = fadeFadingText;
