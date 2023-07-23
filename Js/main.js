// make array from the cards using Array.From
let sliderCards = Array.from(document.querySelectorAll(".feed-cards .card"));
let slidesCount = sliderCards.length;
let currentSlide = 1;
// Left and Right Icons
let nextButton = document.getElementById("click-right");
let prevButton = document.getElementById("click-left");

// Create The UL Element
let paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");
// loop to created lis
for (let i = 1; i <= slidesCount - 2; i++) {
  let paginationItem = document.createElement("li");
  paginationItem.setAttribute("data-index", i);
  paginationElement.appendChild(paginationItem);
}
document.getElementById("indicators").appendChild(paginationElement);
// Get the New Ul
let paginationUl = document.getElementById("pagination-ul");
// pagination Items
let paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

// Slider Function

const slidesContainer = document.querySelector(".feed-cards");
const slide = document.querySelector(".card");

nextButton.addEventListener("click", () => {
  const slidesWidth = slide.clientWidth + 30;
  slidesContainer.scrollLeft += slidesWidth;
});

setInterval(() => {
  const slidesWidth = slide.clientWidth + 30;
  if (
    slidesContainer.scrollLeft + slidesWidth >=
    slidesWidth * (slidesCount - 3)
  ) {
    slidesContainer.scrollLeft = 0;
    currentSlide = 1;
    theChecker();
  } else {
    slidesContainer.scrollLeft += slidesWidth;
    currentSlide++;
    theChecker();
  }
}, 3000);

prevButton.addEventListener("click", () => {
  const slidesWidth = slide.clientWidth + 30;
  slidesContainer.scrollLeft -= slidesWidth;
});

// Trigger the checker function
theChecker();

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

function nextSlide() {
  if (currentSlide == slidesCount) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

function prevSlide() {
  if (currentSlide > 1) {
    currentSlide--;
    theChecker();
  } else {
    return false;
  }
}

// checker function
function theChecker() {
  removeActive();
  paginationUl.children[currentSlide - 1].classList.add("active");
}

// Remove active class
function removeActive() {
  paginationBullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}

// Nav Bar Icon
let bar = document.getElementById("bar");
let navBar = document.getElementById("nav-bar");
let closeBar = document.getElementById("x-mark");

if (bar) {
  bar.addEventListener("click", () => {
    navBar.classList.add("active-bar");
  });
}

if (closeBar) {
  closeBar.addEventListener("click", () => {
    navBar.classList.remove("active-bar");
  });
}
