// FADE
const fadeEl = document.querySelector(".fade");

let hasScrolled = false;
window.addEventListener("scroll", () => {
  if (!hasScrolled) {
    //Change opacity if fade
    fadeEl.style.opacity = "0";
    hasScrolled = true;
  }
});

// VIDEO TOGGLE
// Legato script

//Refactor, use one function, pass the link
function toggle() {
  document.getElementById("videoId").src =
    "https://www.youtube.com/embed/hOFNfmt70gs?enablejsapi=1";
  var popupVid = document.querySelector(".popupVid");
  popupVid.classList.toggle("active");

  let video = document.getElementById("videoId");
  video.contentWindow.postMessage(
    '{"event":"command", "func":"destroy", "args":""}',
    "*"
  );
}
// Bandura
function toggleBandura() {
  document.getElementById("videoId").src =
    "https://www.youtube.com/embed/5a2OxN4Cn-s?start=86";
  var popupVid = document.querySelector(".popupVid");

  popupVid.classList.toggle("active");

  let video = document.getElementById("videoId");
  video.contentWindow.postMessage(
    '{"event":"command", "func":"destroy", "args":""}',
    "*"
  );
}

function toggleAppQuiz() {
  document.getElementById("videoId").src =
    "https://www.youtube.com/embed/qEtk-XmV2Mg";
  var popupVid = document.querySelector(".popupVid");
  popupVid.classList.toggle("active");

  let video = document.getElementById("videoId");
  video.contentWindow.postMessage(
    '{"event":"command", "func":"destroy", "args":""}',
    "*"
  );
}

function toggleClipper() {
  document.getElementById("videoId").src =
    "https://www.youtube.com/embed/i1glWgpqqXY";
  var popupVid = document.querySelector(".popupVid");
  popupVid.classList.toggle("active");

  let video = document.getElementById("videoId");
  video.contentWindow.postMessage(
    '{"event":"command", "func":"destroy", "args":""}',
    "*"
  );
}

function toggleUtility() {
  document.getElementById("videoId").src =
    "https://www.youtube.com/embed/pNdIpFl2uZw";
  var popupVid = document.querySelector(".popupVid");
  popupVid.classList.toggle("active");

  let video = document.getElementById("videoId");
  video.contentWindow.postMessage(
    '{"event":"command", "func":"destroy", "args":""}',
    "*"
  );
}

function toggleImager() {
  document.getElementById("videoId").src =
    "https://www.youtube.com/embed/5eYNklKYZ-Q";
  var popupVid = document.querySelector(".popupVid");
  popupVid.classList.toggle("active");

  let video = document.getElementById("videoId");
  video.contentWindow.postMessage(
    '{"event":"command", "func":"destroy", "args":""}',
    "*"
  );
}

function toggleEchoDelay() {
  document.getElementById("videoId").src =
    "https://www.youtube.com/embed/pm6RybQs3PU";
  var popupVid = document.querySelector(".popupVid");
  popupVid.classList.toggle("active");

  let video = document.getElementById("videoId");
  video.contentWindow.postMessage(
    '{"event":"command", "func":"destroy", "args":""}',
    "*"
  );
}

function toggleDjApp() {
  document.getElementById("videoId").src =
    "https://www.youtube.com/embed/sqbKAwQEQfQ";
  var popupVid = document.querySelector(".popupVid");
  popupVid.classList.toggle("active");

  let video = document.getElementById("videoId");
  video.contentWindow.postMessage(
    '{"event":"command", "func":"destroy", "args":""}',
    "*"
  );
}

function toggleAudioPlayer() {
  document.getElementById("videoId").src =
    "https://www.youtube.com/embed/2fL1kZFH4XY";
  var popupVid = document.querySelector(".popupVid");
  popupVid.classList.toggle("active");

  let video = document.getElementById("videoId");
  video.contentWindow.postMessage(
    '{"event":"command", "func":"destroy", "args":""}',
    "*"
  );
}

function toggleModular() {
  document.getElementById("videoId").src =
    "https://www.youtube.com/embed/v1rzxpyIOIw";
  var popupVid = document.querySelector(".popupVid");
  popupVid.classList.toggle("active");

  let video = document.getElementById("videoId");
  video.contentWindow.postMessage(
    '{"event":"command", "func":"destroy", "args":""}',
    "*"
  );
}

function toggleMorphFilter() {
  document.getElementById("videoId").src =
    "https://www.youtube.com/embed/lpipNwaUZ7g";
  var popupVid = document.querySelector(".popupVid");
  popupVid.classList.toggle("active");

  let video = document.getElementById("videoId");
  video.contentWindow.postMessage(
    '{"event":"command", "func":"destroy", "args":""}',
    "*"
  );
}

// ANCHOR SCROLL

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
// FILTERS
const filtersEl = document.querySelector(".filters");
const projectEl1 = document.querySelector(".project:nth-child(1)");
const projectEl2 = document.querySelector(".project:nth-child(2)");
const projectEl3 = document.querySelector(".project:nth-child(3)");
const projectEl4 = document.querySelector(".project:nth-child(4)");
const projectEl5 = document.querySelector(".project:nth-child(5)");
const projectEl6 = document.querySelector(".project:nth-child(6)");
const projectEl7 = document.querySelector(".project:nth-child(7)");
const projectEl8 = document.querySelector(".project:nth-child(8)");
const projectEl9 = document.querySelector(".project:nth-child(9)");
const projectEl10 = document.querySelector(".project:nth-child(10)");
const projectEl11 = document.querySelector(".project:nth-child(11)");
const projectEl12 = document.querySelector(".project:nth-child(12)");

const htmlEl = document.querySelector("html");

filtersEl.addEventListener("click", (e) => {
  // remove fade
  fadeEl.style.opacity = "0";

  // make clicked button active
  document
    .querySelector(".filter-btn--active")
    .classList.remove("filter-btn--active");
  e.target.classList.add("filter-btn--active");

  // change image opacities
  // htmlEl.style.setProperty("--default-opacity", "0");
  // htmlEl.style.setProperty("--hover-opacity", "0.3");

  // reorganize grid
  const filterText = e.target.textContent;

  if (filterText === "All") {
    projectEl1.style.opacity = "1";
    projectEl1.style.transform = "scale(1)";
    projectEl2.style.opacity = "1";
    projectEl2.style.transform = "scale(1)";
    projectEl3.style.opacity = "1";
    projectEl3.style.transform = "scale(1)";
    projectEl4.style.opacity = "1";
    projectEl4.style.transform = "scale(1)";
    projectEl5.style.opacity = "1";
    projectEl5.style.transform = "scale(1)";
    projectEl6.style.opacity = "1";
    projectEl6.style.transform = "scale(1)";
    projectEl7.style.opacity = "1";
    projectEl7.style.transform = "scale(1)";
    projectEl8.style.opacity = "1";
    projectEl8.style.transform = "scale(1)";
    projectEl9.style.opacity = "1";
    projectEl9.style.transform = "scale(1)";
    projectEl10.style.opacity = "1";
    projectEl10.style.transform = "scale(1)";
    projectEl11.style.opacity = "1";
    projectEl11.style.transform = "scale(1)";
    projectEl12.style.opacity = "1";
    projectEl12.style.transform = "scale(1)";
  } else if (filterText === "Web Apps") {
    projectEl1.style.opacity = "1";
    projectEl1.style.transform = "scale(1)";
    projectEl2.style.opacity = "1";
    projectEl2.style.transform = "scale(1)";
    projectEl3.style.opacity = "0";
    projectEl3.style.transform = "scale(0)";
    projectEl4.style.opacity = "0";
    projectEl4.style.transform = "scale(0)";
    projectEl5.style.opacity = "0";
    projectEl5.style.transform = "scale(0)";
    projectEl6.style.opacity = "0";
    projectEl6.style.transform = "scale(0)";
    projectEl7.style.opacity = "1";
    projectEl7.style.transform = "translate(646px, -646px)";
    projectEl8.style.opacity = "8";
    projectEl8.style.transform = "translate(0, -323px)";
    projectEl9.style.opacity = "0";
    projectEl9.style.transform = "scale(0)";
    projectEl10.style.opacity = "0";
    projectEl10.style.transform = "scale(0)";
    projectEl11.style.opacity = "0";
    projectEl11.style.transform = "scale(0)";
    projectEl12.style.opacity = "0";
    projectEl12.style.transform = "scale(0)";
  } else if (filterText === "Desktop Apps") {
    projectEl1.style.opacity = "0";
    projectEl1.style.transform = "scale(0)";
    projectEl2.style.opacity = "0";
    projectEl2.style.transform = "scale(0)";
    projectEl3.style.opacity = "1";
    projectEl3.style.transform = "scale(1)";
    projectEl4.style.opacity = "1";
    projectEl4.style.transform = "translate(0, -323px)";
    projectEl5.style.opacity = "1";
    projectEl5.style.transform = "translate(0, -323px)";
    projectEl6.style.opacity = "1";
    projectEl6.style.transform = "scale(1)";
    projectEl7.style.opacity = "0";
    projectEl7.style.transform = "scale(0)";
    projectEl8.style.opacity = "0";
    projectEl8.style.transform = "scale(0)";
    projectEl9.style.opacity = "1";
    projectEl9.style.transform = "translate(0,0)";
    projectEl10.style.opacity = "1";
    projectEl10.style.transform = "translate(0, -646px)";
    projectEl11.style.opacity = "1";
    projectEl11.style.transform = "translate(0, -646px)";
    projectEl12.style.opacity = "1";
    projectEl12.style.transform = "translate(-323px, -323px)";
  }
});
