
//had to use a seperate js file because it was messing with the timeline scroll effects
//scroll effects for the about page
function checkScroll() {
  const aboutSection = document.querySelector('.about_move_up');
  const footerSection = document.querySelector('.footer_move_up');
  const aboutRect = aboutSection.getBoundingClientRect();
  const footerRect = footerSection.getBoundingClientRect();
  
  if (aboutRect.top < window.innerHeight * 0.75) {// Change this value for how early it appears
    aboutSection.classList.add('active');
  } else {
    aboutSection.classList.remove('active');
  }
  
  if (footerRect.top < window.innerHeight * 0.9) {// Change this value for how early it appears
    footerSection.classList.add('active');
  } else {
    footerSection.classList.remove('active');
  }
}
  
window.addEventListener('scroll', checkScroll);
checkScroll(); // Check initially in case some items are already in view
  