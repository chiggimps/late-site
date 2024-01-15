console.log("LATE Meme Coin site loaded!");

function toggleBounce(): void {
    console.log("You late foo, you clicked me!");
}

function startBlink(): void {
    const blinkText = document.getElementById("blinking-text") as HTMLElement;
    setInterval(() => {
        blinkText.style.visibility = (blinkText.style.visibility === "hidden" ? "" : "hidden");
    }, 500);
}

// export these so can be used in html?
window.toggleBounce = toggleBounce;
window.startBlink = startBlink;




