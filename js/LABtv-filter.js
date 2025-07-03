// CODICE DI FILTRAGGIO

let arrApi = [
  "https://spatarotv.ftdomotics.it/Action",
"https://spatarotv.ftdomotics.it/Documentari",
"https://spatarotv.ftdomotics.it/Disney",
"https://spatarotv.ftdomotics.it/Classici",
"https://spatarotv.ftdomotics.it/Comici "
];

const filterS = document.getElementById("filterFilm");
const select = document.getElementById("selectFilter");
const filterFilm = document.getElementById("filter");
const divFilter = document.querySelector(".div-filter");
const lent = document.querySelector("#lent");
const btnFilter = document.querySelector(".div-filter .search");
const btnSvuota = document.querySelector(".div-filter .svuota");
const alphabet = document.querySelector("#tastierino");
const inpFilt = document.getElementById("filter");
const filtContainer = document.querySelector("#filter-container");
let lastTast;

select.addEventListener("change", () => {
  if (select.value === "genere") {
    filterFilm.setAttribute("placeholder", "inserisci un genere");
  } else {
    filterFilm.setAttribute("placeholder", "inserisci un titolo");
  }
});

// console.log(select.value)

let string = [];

lent.addEventListener("click", () => {
  main.style.display = "none";
  filtContainer.style.display = "flex";
  // main.remove(footer)
  // filtContainer.append(footer)
  alphabet.innerHTML = "";

  for (let i = 65; i <= 90; i++) {
    let li = document.createElement("li");
    li.classList.add("toGuessCover", "alphabet-letter");
    li.innerHTML = String.fromCharCode(i);
    alphabet.appendChild(li);

    tastierino(li);
  }

  // TASTO DELETE
  let liD = document.createElement("li");
  liD.classList.add("toGuessCover", "alphabet-letter", "delete");
  liD.innerHTML = "Delete";
  console.log(liD);
  alphabet.append(liD);

  lastTast = document.querySelector("#tastierino .delete");
  console.log(lastTast);

  lastTast.addEventListener("click", () => {
    string.pop(string);
    // string.join('')
    console.log(string.join(""));
    inpFilt.value = string.join("");
  });

  //TASTO SPAZIO
  let liSp = document.createElement("li");
  liSp.classList.add("toGuessCover", "alphabet-letter", "space");
  liSp.innerHTML = "Space";
  console.log(liSp);
  alphabet.append(liSp);

  spaceTast = document.querySelector("#tastierino .space");
  console.log(lastTast);

  spaceTast.addEventListener("click", () => {
    string.push(" ");
    // string.join('')
    console.log(string.join(""));
    inpFilt.value = string.join("");
  });

  // TASTO SVUOTA

  function emptyInp() {
    string = [];
    inpFilt.value = string;
  }
  btnSvuota.addEventListener("click", () => {
    emptyInp();
  });
});

function tastierino(tast) {
  tast.addEventListener("click", () => {
    // console.log(e.target)
    string.push(tast.innerText.toLowerCase());
    // string.join('')
    console.log(string.join(""));
    inpFilt.value = string.join("");
  });
}

btnFilter.addEventListener("click", () => {
  let selectValue = select.value;
  if (inpFilt.value.trim() != 0) {
    console.log(selectValue);
    filterS.innerHTML = "";
    filterS.style.display = "grid";
    let results = [];
    results.length = 0;

    stringFilter(selectValue);
  } else {
    string = [];
    inpFilt.value = string;
    alert("Scrivi la parola chiave per cercare il tuo film");
  }
});

function stringFilter(valore) {
  arrApi.forEach((array) => {
    fetch(array)
      .then((res) => res.json())

      .then((resObj) => {
        // console.log(resObj)
        results = resObj.filter((p) =>
          p[valore]
            .toLowerCase()
            .includes(filterFilm.value.toLowerCase().trim())
        );
        console.log(filterFilm);

        results.forEach((movie) => {
          // console.log(movie)
          if (results.length != 0) {
            let li = document.createElement("li");
            let video = document.createElement("video");
            let img = document.createElement("img");
            img.setAttribute("src", "images/no-sound.png");
            img.classList.add("sound");
            video.muted = true;
            video.setAttribute("id", `${movie.titolo}`);
            video.setAttribute("src", `${movie.trailer}`);
            video.setAttribute("alt", `${movie.titolo}`);
            video.setAttribute("poster", `${movie.copertina}`);
            video.setAttribute("class", "gradient play-trailer");

            // video.setAttribute("type", "video/mp4");
            let divInfo = document.createElement("div");
            divInfo.setAttribute("class", "d-none div-info");
            divInfo.innerHTML = `
            <div class="arr-play filter-w">
                    <img src="images/play.png" class="play-video ${movie.titolo}">
                    <img src="images/like.png" class="like">
                </div>
                <div class="time filter-w">
                    <div class="age">${movie.eta}+</div>
                    <div class="time-film">${movie.timing}</div>
                    <div class="hd">HD</div>
                </div>
                <div class="type-film">${movie.genere}</div>
            </div>        
            `;
            li.append(video, divInfo, img);

            filterS.append(li);

            let setTimer, setTimerSound;

            li.addEventListener("mouseenter", mouseEnter);
            li.addEventListener("mouseleave", mouseLeave);

            function mouseLeave() {
              video.load();
              video.muted = true;
              video.autoplay = false;
              clearTimeout(setTimer);
              clearTimeout(setTimerSound);
              img.style.display = "none";
            }

            function mouseEnter() {
              video.setAttribute("src", `${movie.trailer}`);
              setTimerSound = setTimeout(
                () => (img.style.display = "block"),
                1700
              );
              setTimer = setTimeout(() => video.play(), 1500);
            }

            img.addEventListener("click", () => {
              if (!video.classList.contains("reproduction")) {
                video.classList.add("reproduction");
                img.setAttribute("src", "images/sound.png");
                video.muted = false;
              } else {
                video.classList.remove("reproduction");
                img.setAttribute("src", "images/no-sound.png");
                video.muted = true;
              }
            });

            let playFilm = divInfo.querySelector(".arr-play .play-video");

            playFilm.addEventListener("click", () => {
              video.setAttribute("src", `${movie.film}`);
              video.muted = false;
              video.autoplay = true;

              video.requestFullscreen();

              li.removeEventListener("mouseenter", mouseEnter);
              li.removeEventListener("mouseleave", mouseLeave);
            });

            video.addEventListener("fullscreenchange", () => {
              if (!document.fullscreenElement) {
                // Quando esci dal fullscreen, rimettili
                li.addEventListener("mouseenter", mouseEnter);
                li.addEventListener("mouseleave", mouseLeave);
                video.setAttribute("src", `${movie.trailer}`);
                video.autoplay = false;
                video.muted = true;
              }
            });

            let likes = divInfo.querySelector(".like");
            likeDiv(likes);
          } else {
            console.log("NON HO TROVATO IL FILM");
          }
        });
      });
  });
}