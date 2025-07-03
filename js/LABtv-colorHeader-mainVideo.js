// CAMBIO COLORE SULL'HEADER
let header = document.querySelector("header");
let login = document.querySelectorAll("header section .menu span");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
    for (let span of login) {
      span.classList.add("scrolled");
    }
  } else {
    header.classList.remove("scrolled");
    for (let span of login) {
      span.classList.remove("scrolled");
    }
  }
});

//VIDEO PLAY E PAUSE
const videoR = document.querySelector("#video video");
const videoHead = document.getElementById("video");
const videoHeadPlay = document.querySelector(".d-play");
const sound2 = document.querySelector(".sound2");

videoR.addEventListener("click", () => {
  if (!videoR.classList.contains("reproduction")) {
    videoR.classList.add("reproduction");
    sound2.style.display = "block";
    videoR.play();
    
  } else {
    videoR.classList.remove("reproduction");
    videoR.pause();
  }
});

sound2.addEventListener("click", () => {
  if (!videoR.classList.contains("reproduction-sound")) {
    videoR.classList.add("reproduction-sound");
    sound2.setAttribute("src", "images/sound.png");
    videoR.muted = false;
  } else {
    videoR.classList.remove("reproduction-sound");
    sound2.setAttribute("src", "images/no-sound.png");
    videoR.muted = true;
  }
});

videoHead.addEventListener("mouseleave", mouseLeaveRobot);

function mouseLeaveRobot() {
  if (document.fullscreenElement) return;
  videoR.setAttribute(
    "src",
    "images/Il Robot Selvaggio ｜ Trailer Ufficiale (Universal Studios) - HD.mp4"
  );
  videoR.load();
  videoR.classList.remove("reproduction");
  videoR.classList.remove("reproduction-sound");
  videoR.pause();
  sound2.style.display = "none";
  videoR.muted = true
  sound2.setAttribute("src", "images/no-sound.png");
}

videoHeadPlay.addEventListener("click", () => {
  videoR.removeEventListener("mouseleave", mouseLeaveRobot);
  videoR.setAttribute("src", "film/Il robot salva TUTTI gli animali da una bufera di neve  Il robot selvaggio  Clip in Italiano.mp4");
  videoR.autoplay = true;
  videoR.muted = false;
  videoR.requestFullscreen();
  videoR.play();
});

document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) {
    videoR.setAttribute(
      "src",
      "images/Il Robot Selvaggio ｜ Trailer Ufficiale (Universal Studios) - HD.mp4"
    );
    videoR.addEventListener("mouseLeave", mouseLeaveRobot);
    videoR.load();
    videoR.pause();
  }
});

let arrowClose = document.querySelectorAll(".close");

arrowClose.forEach((close) => {
  close.addEventListener("click", () => {
    moduleContLog.style.display = "none";
    modulo.style.display = "none";
    main.style.display = "block";
    header.style.display = "block";
    moduleRegisterCont.style.display = "none";
  });
});

const creaAccount = document.getElementById("crea-account");

creaAccount.addEventListener("click", () => {
  moduleContLog.style.display = "none";
  modulo.style.display = "none";
  moduleRegisterCont.style.display = "block";
});

