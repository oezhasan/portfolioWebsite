const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");
const darkMode = document.querySelector("#toggle-darkmode");

particlesJS.load("particles-js", "particles.json", function () {
  console.log("callback - particles.js config loaded");
});

navLinksArray = Array.from(navLinks);
sectionsArray = Array.from(sections);

darkMode.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

window.onscroll = () => {
  let current = " ";

  sectionsArray.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  updateNavbar(current);

  navLinksArray.forEach((li) => {
    li.classList.remove("nav-link-selected");

    if (li.href.includes(current)) {
      li.classList.add("nav-link-selected");
    }
  });

  // if (sectionsArray[0].getBoundingClientRect().bottom > 0){
  //     updateNavbar(navLinksArray[0]);
  // }
  // else if(sectionsArray[1].getBoundingClientRect().bottom > 0){
  //     updateNavbar(navLinksArray[1]);
  // }
  // else if(sectionsArray[2].getBoundingClientRect().bottom > 0){
  //     updateNavbar(navLinksArray[2]);

  // }
};

function updateNavbar(current) {
  navLinksArray.forEach((navLink) => {
    if (navLink === current) {
      navLink.classList.add("nav-link-selected");
    } else {
      navLink.classList.remove("nav-link-selected");
    }
  });
}
