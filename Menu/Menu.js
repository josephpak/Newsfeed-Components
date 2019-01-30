
// const toggleMenu = () => {
//   // Toggle the "menu--open" class on your menu reference. 
//   menu.classList.toggle("menu--open");

//   TweenMax.to(menu, .3, {
//     width: "350px",
//     ease: Bounce.easeout
//   })
// }


const openMenu = () => {
  // Toggle the "menu--open" class on your menu reference. 
  menu.classList.toggle("menu--open");
  openButton.classList.toggle("hide-btn")
  closeButton.classList.toggle("hide-btn")

  TweenMax.to(menu, .3, {
    width: "350px",
    ease: Bounce.easeout
  })
}

const closeMenu = () => {
  // Toggle the "menu--open" class on your menu reference.
  menu.classList.toggle("menu--open"); 
  openButton.classList.toggle("hide-btn")
  closeButton.classList.toggle("hide-btn")

  TweenMax.to(menu, .3, {
    width: "0px",
    ease: Bounce.easeout
  })
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const openButton = document.querySelector(".openBtn");
const closeButton = document.querySelector(".closeBtn");
// Using your menuButton reference, add a click handler that calls toggleMenu
openButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);