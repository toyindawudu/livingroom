/*=======================
    SHOW THE MOBILE MENU 
======================== */
const showMenu = (toggleId, navId) =>{
  // Initiate the variables
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)
  
  // Validate the variables with an if statement
  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          // Add the show-menu class to the div-tag with the nav__menu class
          nav.classList.toggle('show-menu')
      })
  }
}
showMenu('nav-toggle','nav-menu')

/*=========================
    REMOVE THE MOBILE MENU
========================== */
// Initiate the variable
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
  const navMenu = document.getElementById('nav-menu');
  // When we click on the nav__link, we want to remove the show-menu class from navMenu
  navMenu.classList.remove('show-menu');
}

navLink.forEach(item => item.addEventListener('click', linkAction));  


/*=========================
    BACKGROUND HEADER
========================== */

function scrollHeader(){
  const nav = document.getElementById('header');
  // When the scroll is greater than 200 viewport height, add the scroll header class to the element
  if(this.scrollY >= 200) {
    nav.classList.add('scroll-header');
  } else {
    nav.classList.remove('scroll-header');
  }
}
window.addEventListener('scroll', scrollHeader);

/*=========================
    SHOW SCROLL TO THE TOP
========================== */

function scrollTop(){
  const scrollTop = document.getElementById('scroll-top');
  // When the scroll is greater than 560 viewport height, add the scroll header class to the element
  if(this.scrollY >= 560) {
    scrollTop.classList.add('scroll-top');
  } else {
    scrollTop.classList.remove('scroll-top');
  }
}
window.addEventListener('scroll', scrollTop);

