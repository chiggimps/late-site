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

    fadeIn(duration: number = 3.5): void {
        this.element.style.transition = `opacity ${duration}s`;
        this.element.style.opacity = '1';
    }

    fadeOut(duration: number = 3.5): void {
        this.element.style.transition = `opacity ${duration}s`;
        this.element.style.opacity = '0';
    }
}

function fadeFadingText(): void {
    const animationController = new AnimationController(document.getElementById('fading-text') as HTMLElement);
    animationController.fadeIn();

    // delete the button that was clicked
    const fadeButton = document.getElementById('toggle-animation-button') as HTMLButtonElement;
    fadeButton.remove();

    // setTimeout(() => {
    //     animationController.fadeOut();
    // }, 2000);
}

////////////////////////////////////

// This function switches the theme from web5 to web3
// What is this doing? .. it is changing the theme of the page, by changing the class of the body element, which is the top level element of the page
function updateTheme(): void {
    const body = document.body;
    const themeToggleButton = document.getElementById('theme-toggle') as HTMLButtonElement;

    if (body.classList.contains('body-web5')) {
        body.classList.remove('body-web5');
        body.classList.add('body-web3');
        themeToggleButton.textContent = 'Go Web5';
    } else {
        body.classList.remove('body-web3');
        body.classList.add('body-web5');
        themeToggleButton.textContent = 'Go Web3';
    }
}

////////////////////////////////////
// This function changes the background color of the page when the color picker is changed
function changeBackgroundColor(): void {
    document.addEventListener('DOMContentLoaded', () => {
        const body = document.body;
        const colorPicker = document.getElementById('colorPicker');

        colorPicker?.addEventListener('sl-change', (event: Event) => {
            const picker = event.target as HTMLInputElement; // Assuming value property exists
            if (picker) {
                body.style.backgroundColor = picker.value;
            }
        });
    });
}

// This needs to be run when loaded to add the event listener
changeBackgroundColor();

////////////////////////////////////

function updateProgress(): void {
    document.addEventListener('DOMContentLoaded', () => { 
        const progressBar = document.querySelector('sl-progress-bar') as HTMLProgressElement;

        let interval = 1000; // Start with a 1-second interval

        const updateInterval = () => {
            // Randomly change the interval duration
            interval = Math.floor(Math.random() * (3000 - 500)) + 500;
        };

        const updateProgressBar = () => {
            progressBar.value = Math.floor(Math.random() * 100);
            progressBar.textContent = `${progressBar.value}% Progress (will be Late)`;

            // Set color based on progress and add more dramatic colors
            if (progressBar.value < 20) {
                progressBar.style.setProperty('--indicator-color', 'darkred'); // Very low progress
            } else if (progressBar.value < 40) {
                progressBar.style.setProperty('--indicator-color', 'orangered'); // Low progress
            } else if (progressBar.value < 60) {
                progressBar.style.setProperty('--indicator-color', 'darkorange'); // Mid progress
            } else if (progressBar.value < 80) {
                progressBar.style.setProperty('--indicator-color', 'brown'); // High progress
            } else {
                progressBar.style.setProperty('--indicator-color', 'limegreen'); // Near completion
            }
            
            // Randomize interval
            updateInterval();
            setTimeout(updateProgressBar, interval);
        };

        // Initial call
        updateProgressBar();
    });    
}


updateProgress();

////////////////////////////////////
// Export these so can be used in html?
window.updateClock = updateClock;
window.startBlink = startBlink;
window.updateTheme = updateTheme;
window.fadeFadingText = fadeFadingText;
