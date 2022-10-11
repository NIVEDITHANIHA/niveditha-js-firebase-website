//header section
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  nav = document.getElementById(navId);
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));

  this.classList.add("active");
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

//project section
let imgList = document.querySelectorAll(".img-list-container .list");

imgList.forEach((img) => {
  img.onclick = () => {
    imgList.forEach((remove) => {
      remove.classList.remove("active");
    });
    img.classList.add("active");
    let src = img.querySelector(".list-img").src;
    let title = img.querySelector(".list-title ").innerHTML;
    document.querySelector(".main-img-container .main-img").src = src;
    document.querySelector(".main-img-container .main-img-title").innerHTML =
      title;
  };
});
// contact section

var firebaseConfig = {
  apiKey: "AIzaSyDmmxOdpbcI-olv-imvK2R7iyp9rryFoQU",
  authDomain: "contact-database-8e6a6.firebaseapp.com",
  databaseURL: "https://contact-database-8e6a6-default-rtdb.firebaseio.com",
  projectId: "contact-database-8e6a6",
  storageBucket: "contact-database-8e6a6.appspot.com",
  messagingSenderId: "555326772055",
  appId: "1:555326772055:web:aa014174ddc18340012412"
 };

firebase.initializeApp(firebaseConfig);

//refernce contact info

let contactInfo = firebase.database().ref("infos");
document.querySelector("#contacts").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;

  saveContactInfo(name, email);

  document.querySelector(".alert").style.display = "block";
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);
  document.querySelector("#contacts").reset();
}
function saveContactInfo(name, email) {
  let newContactInfo = contactInfo.push();
  newContactInfo.set({
    name: name,
    email: email,
  });
}
