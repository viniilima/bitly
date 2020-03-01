let zoioEl = document.querySelector("#zoio");
let buttonEl = document.querySelector("#button");
let audio = new Audio('susto.mp3');

buttonEl.addEventListener("click", function() {
    zoioEl.classList.remove("hide");
    buttonEl.classList.add("hide");

    audio.pause();
    audio.currentTime = 0;
    audio.play();
    audio.volume = 10;
});
