const navMenue = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* ==================== MENU SHOW  ====================*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenue.classList.add("show-menu");
  });
}

/* ==================== MENU HIDDEN  ====================*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenue.classList.remove("show-menu");
  });
}

/* ==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenue = document.getElementById("nav-menu");
  navMenue.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* ==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");
function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((element) => {
  element.addEventListener("click", toggleSkills);
});

/* ==================== QUALIFICATION TAB ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click',() => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
          })
          target.classList.add('qualification__active')

          tab.forEach(tab =>{
            tab.classList.remove('qualification__active')
          })
          tab.classList.add('qualification__active')
        })
      })
