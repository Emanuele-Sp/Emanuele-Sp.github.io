// FUNZIONE DI START
const start = document.querySelector(".start");
const inizio = document.querySelector("#inizio");
const addProfile = document.querySelector("#add-profile");
const startProfile = document.querySelector(".start");
let profiles = document.querySelectorAll(".start div .profile-img");
const insertData = document.querySelector(".insert-data");
const insertNameP = document.querySelector(".insert-data section input");
const btnInsertProfile = document.querySelector(".aggiungi");
const btnNullProfile = document.querySelector(".annulla");
const sectionStart = document.querySelector(".start section");
const deleteProfile = document.querySelector(".start button");
let spans = document.querySelectorAll(".start span");

function initStart() {
  profiles.forEach((profile) => {
    // Evita duplicazione listener usando un flag custom
    if (!profile.dataset.listenerAdded) {
      profile.addEventListener("click", () => {
        inizio.innerHTML = ""; // sposta qui!
        console.log(profile);
        start.style.display = "none";
        container.style.display = "block";
        header.style.display = "block";
        profile.classList.remove("focus");
        let startProfile = profile.cloneNode(true);
        inizio.append(startProfile);
        counter = 0;
      });

      profile.dataset.listenerAdded = "true"; // flag per evitare duplicazione
    }
  });
}

initStart();

inizio.addEventListener("click", () => {
  start.style.display = "grid";
  container.style.display = "none";
  header.style.display = "none";
  filtContainer.style.display = "none";
  inizio.innerHTML = "";
  spans.forEach((span) => {
    span.classList.remove("elimina");
    deleteProfile.innerHTML = "Elimina profilo";
    bool = true;
  });
});

let counter = 0;
let divProfile;
let imgProfile;
let lastP;
addProfile.addEventListener("click", () => {
  otherProfile();
  deleteProfile.style.display = "block";
  startProfile.style.display = "none";
  insertData.style.display = "block";
  insertNameP.value = "";
  if (!bool) {
    spans.forEach((span) => {
      span.classList.remove("elimina");
      deleteProfile.innerHTML = "Elimina profilo";
      bool = true;
    });
  }

  // console.log(sectionStart)
});

btnInsertProfile.addEventListener("click", () => {
  if (insertNameP.value.length != 0 && variable != undefined) {
    start.style.display = "grid";
    insertData.style.display = "none";

    divProfile = document.createElement("div");
    lastP = document.createElement("p");

    let span = document.createElement("span");
    span.classList.add("span");
    span.innerHTML = "Elimina";

    sectionStart.insertBefore(divProfile, addProfile);

    variable.classList.remove("focus");
    counter--;
    console.log(counter);
    lastP.innerHTML = insertNameP.value;
    divProfile.append(variable, lastP, span);
    profiles = document.querySelectorAll(".start div .profile-img");
    console.log(profiles);

    for (let i = 0; i < avatarProfiles.length; i++) {
      if (avatarProfiles[i] == variable.getAttribute("src")) {
        avatarProfiles.splice(i, 1);
      }
    }

    initStart();
  } else {
    alert("DEVI INSERIRE IL TUO NOME E SCEGLIERE UN AVATAR");
  }
});

btnNullProfile.addEventListener("click", () => {
  start.style.display = "grid";
  insertData.style.display = "none";
  insertNameP.value = "";
  counter = 0;
});

let variable;
console.log(variable);

secAvatar = document.querySelector("section.avatar");
avatarProfiles = [
  "images/profile/shadow.png",
  "images/profile/pink.png",
  "images/profile/eggman.png",
  "images/profile/white.png",
  "images/profile/pupazzo.png",
];

let div, img;

function otherProfile() {
  secAvatar.innerHTML = "";
  avatarProfiles.forEach((avatar) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.classList.add("profile-img");
    img.setAttribute("src", avatar);
    div.append(img);
    secAvatar.append(div);

    img.addEventListener("click", () => {
      // function event() {
      if (!img.classList.contains("focus")) {
        if (counter < 1) {
          counter++;
          img.classList.add("focus");
          variable = img;
          console.log(variable);
          console.log(variable.getAttribute("src"));
          console.log(lastP);
        } else {
          alert("PUOI SELEZIONARE SOLO UN AVATAR");
        }
      } else {
        variable.classList.remove("focus");
        counter--;
        variable = undefined;
        console.log(variable);
      }

      //   img.removeEventListener("click", event);
      // }
    });
  });
}

let bool = true;
deleteProfile.addEventListener("click", () => {
  spans = document.querySelectorAll(".start span");

  if (bool) {
    spans.forEach((span) => {
      span.classList.add("elimina");
      deleteProfile.innerHTML = "Annulla";

      if (!span.dataset.listenerAdded) {
        span.addEventListener("click", (e) => {
          let imageDel =
            span.previousElementSibling.previousElementSibling.getAttribute(
              "src"
            );
          avatarProfiles.push(imageDel);
          console.log(avatarProfiles);
          console.log(span.parentElement);
          console.log(imageDel);
          e.target.parentElement.remove();
          otherProfile();

          profiles = document.querySelectorAll(".start div .profile-img");
          if (profiles.length == 0) {
            deleteProfile.innerHTML = "Elimina profilo";
            bool = true;
            deleteProfile.style.display = "none";
          }
        });

        span.dataset.listenerAdded = "true";
      }

      bool = false;
    });
  } else {
    spans.forEach((span) => {
      span.classList.remove("elimina");
      deleteProfile.innerHTML = "Elimina profilo";
    });

    bool = true;
  }
});

// FUNZIONE DI INIZIO CREAZIONE DELLE RIGHE DEI FILM

let main = document.querySelector("main");
let footer = document.querySelector("footer");
let ulFilms = [];
/* let sound1 */

function createCard(movies, title) {
  return fetch(`https://spatarotv.ftdomotics.it/${movies}`)
    .then((res) => res.json())
    .then((responseObj) => {
      const movies = responseObj;

      let article = document.createElement("article");

      let section = document.createElement("section");
      // section.setAttribute('id', `film${movies.id}`)

      let h2 = document.createElement("h2");
      h2.innerHTML = `${title}`; 

      let arrowRight = document.createElement("img");
      arrowRight.setAttribute("src", `images/arrow-right.png`);
      arrowRight.setAttribute("class", `arrow-right`);

      let arrowLeft = document.createElement("img");
      arrowLeft.setAttribute("src", `images/arrow-left.png`);
      arrowLeft.setAttribute("class", `arrow-left`);

      let ul = document.createElement("ul");

      main.append(article, footer);
      article.append(section);

      section.append(h2, arrowRight, arrowLeft, ul);
      ul.setAttribute("class", `film`);

      // console.log(movies, section)

      movies.forEach((movie) => {
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

        ul.append(li);

        //

        let setTimer, setTimerSound;

        li.addEventListener("mouseenter", mouseEnter);
        li.addEventListener("mouseleave", mouseLeave);

        function mouseEnter() {
          video.setAttribute("src", `${movie.trailer}`);
          setTimerSound = setTimeout(() => (img.style.display = "block"), 1700);
          setTimer = setTimeout(() => video.play(), 1500);
        }

        function mouseLeave() {
          video.load();
          video.muted = true;
          video.autoplay = false;
          clearTimeout(setTimer);
          clearTimeout(setTimerSound);
          img.style.display = "none";
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
      });
    })
    .catch((errore) => {
      console.log(errore);
    });
}

function likeDiv(like) {
  like.addEventListener("click", () => {
    if (!like.classList.contains("pollice")) {
      like.setAttribute("src", "images/like2.png");
      like.classList.add("pollice");
    } else {
      like.classList.remove("pollice");
      like.setAttribute("src", "images/like.png");
    }
  });
}

Promise.all([
  createCard("Action", "Azione"),
  createCard("Documentari", "Documentari"),
  createCard("Disney", "Disney"),
  createCard("Classici", "Classici"),
  createCard("Comici", "Comici"),
]).then(() => {
  // Chiama la funzione dopo aver creato gli elementi
  let visibleCards;

  if (window.innerWidth > 900) {
    visibleCards = 5;
  } else {
    visibleCards = 3;
  }

  // Funzione per abilitare lo scroll orizzontale per ogni sezione
  function carousel() {
    const articles = document.querySelectorAll("article");

    articles.forEach((article) => {
      const ul = article.querySelector("ul");

      const arrowLeft = article.querySelector(".arrow-left");
      const arrowRight = article.querySelector(".arrow-right");
      let cards = ul.querySelectorAll("li");

      // console.log(arrowLeft, arrowRight)

      let cardWidth;

      function updateCardWidth() {
        cardWidth = cards[0].offsetWidth + 10;
      }

      // console.log(cardWidth);
      let currentIndex = 0;
      let maxIndex = cards.length - visibleCards;
      //   console.log(cards.length);

      arrowRight.addEventListener("click", () => {
        if (currentIndex < maxIndex) {
          updateCardWidth();
          currentIndex++;
          console.log(currentIndex);
          ul.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
          let totalSection = document.querySelectorAll("main section");
          console.log(totalSection);
          for (let i = 0; i < totalSection.length; i++) {
            totalSection[i].style.zIndex = 28 - i;
            // console.log(totalSection[i].style.zIndex)
          }

          /* ul.scrollTo({
            top: 0,
            left: currentIndex * cardWidth,
            behavior: 'smooth'
        }); 
         ul.scrollBy({
            top: 0,
            left: cardWidth,
            behavior: 'smooth'
        }); 
         */
          // console.log(cards.length - visibleCards);
          if (currentIndex != 0 && currentIndex < cards.length - visibleCards) {
            arrowLeft.style.display = "block";
          } else if (currentIndex == cards.length - visibleCards) {
            arrowRight.style.display = "none";
          }
        }
      });

      arrowLeft.addEventListener("click", () => {
        if (currentIndex > 0) {
          currentIndex--;
          console.log(currentIndex);
          ul.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

          /*  ul.scrollTo({
            top: 0,
            left: -currentIndex * cardWidth,
            behavior: 'smooth'
        });
        ul.scrollBy({
            top: 0,
            left: -cardWidth,
            behavior: 'smooth'
        }); */
          if (currentIndex == 0) {
            arrowLeft.style.display = "none";
          } else if (currentIndex < cards.length - visibleCards) {
            arrowRight.style.display = "block";
          }
        }
      });
    });
  }
  carousel();
});
