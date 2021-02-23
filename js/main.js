/*== SHOW THE MOBILE MENU */
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

/*== REMOVE THE MOBILE */
// Initiate the variable
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  // When we click on the nav__link, we want to remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(item => item.addEventListener('click', linkAction));