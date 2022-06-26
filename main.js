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
/* ==================== Dark theme ====================
const themeButton=document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localstorage.getItem('selected-theme')
const selectedIcon=localstorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark':'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon': 'uil-sun'

if (selectedTheme){
document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove' ] (darkTheme)
themeButton.classList[selectedIcon ==='uil-moon' ? 'add' : 'remove'] (iconTheme)
}

themeButton.addEventListener('click',() => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme',getCurrentTheme())
  localStorage.setItem('selected-icon',getCurrentTheme())
})*/



/* ==================== Rigester ==================== 

document.getElementById("new-signup").addEventListener("click", () => {
  document.getElementById("SingIn").style.display = "none";
  document.getElementById("SingUp").style.display = "";
});

document.getElementById("signup-button").addEventListener("click", () => {
  let userName = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;

  let UserData = {
    username: userName,
    email: email,
    password: password,
  };

  if (userName == "" || password == "" || email == "") {
    alert("Please enter data");
  } else {
    let Users = JSON.parse(localStorage.getItem("Users"));
    if (Users == null) {
      let NewArray = [UserData];
      localStorage.setItem("Users", JSON.stringify(NewArray));
    } else {
      Users.push(UserData);
      localStorage.setItem("Users", JSON.stringify(Users));
    }
    document.getElementById("SingIn").style.display = "";
    document.getElementById("SingUp").style.display = "none";
  }
});

document.getElementById("login-button").addEventListener("click", () => {
  email = document.getElementById("loginEmail").value;
  password = document.getElementById("loginPassword").value;

  let Users = JSON.parse(localStorage.getItem("Users"));

  let user;

  if (email == "" || password == "") {
    alert("Please enter data");
  } else {
    if (Users != null) {
      user = Users.find(
        (user) => user.email == email && user.password == password
      );

      if (user != undefined) {
        document.getElementById("index").style.display = "";
        document.getElementById("SingIn").style.display = "none";
      } else {
        alert("Please enter correct data");
      }
    } else {
      alert("User not found");
    }
  }
});*/


// Name and Password from the register-form
var nm = document.getElementById('name');
var pw = document.getElementById('pw');

// storing input from register-form
function store() {
    localStorage.setItem('name', nm.value);
    localStorage.setItem('pw', pw.value);
   
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
    if(userName.value == storedName && userPw.value == storedPw) {
      alert('You are loged in.');
  }else {
      alert('ERROR.');
  }
}