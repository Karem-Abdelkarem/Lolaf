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

let singlePro = Array.from(document.querySelectorAll(".content .box"));
let contentBox = document.querySelector(".content");

for (let i = 0; i < singlePro.length; i++) {
  singlePro[i].addEventListener("click", () => {
    window.location.href = "sproducts.html";
  });
}
