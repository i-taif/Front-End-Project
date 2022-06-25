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
const navLink=document.querySelectorAll('.nav__link')
function linkAction(){
  const navMenue =document.getElementById('nav-menu')
  navMenue.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))