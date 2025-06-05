const chapters = document.querySelectorAll(".chapter");
let currentChapter = 0;

function showChapter(index) {
  chapters.forEach((chapter, i) => {
    chapter.classList.remove("active", "animate-in");
    if (i === index) {
      chapter.classList.add("active");
      void chapter.offsetWidth;
      chapter.classList.add("animate-in");
    }
  });

  const revealSound = document.getElementById("revealSound");
  if (revealSound) {
    revealSound.currentTime = 0;
    revealSound.play();
  }
}

function sailToChapter(nextIndex) {
  const boat = document.getElementById("boat");
  const audio = document.getElementById("op-audio");

  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }

  if (boat) {
    boat.classList.remove("boat-sail");
    void boat.offsetWidth;
    boat.classList.add("boat-sail");

    boat.addEventListener(
      "animationend",
      () => {
        boat.classList.remove("boat-sail");
        currentChapter = nextIndex;
        showChapter(currentChapter);
      },
      { once: true }
    );
  } else {
    currentChapter = nextIndex;
    showChapter(currentChapter);
  }
}

function nextChapter() {
  const next = (currentChapter + 1) % chapters.length;
  sailToChapter(next);
}

// Inicial
showChapter(currentChapter);
document.getElementById("revealButton").addEventListener("click", function () {
  const message = document.getElementById("hiddenMessage");
  message.classList.add("visible");
  this.style.display = "none";

  const revealSound = document.getElementById("revealSound");
  if (revealSound) {
    revealSound.currentTime = 0;
    revealSound.play();
  }
});