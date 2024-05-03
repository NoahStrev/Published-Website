
// The code for the nav bar
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

menu_items.forEach(item => {
  item.addEventListener('click',function(){
    close();
  })
})
function hello(){
    
}
function show(){
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}
function close(){
  mainMenu.style.top = '-100%';
}


//Show more/show less button, Projects section
const showMoreBtn = document.getElementById('showMoreBtn');
const projectsContainer = document.querySelector('.projects-container');

showMoreBtn.addEventListener('click', function() {
  projectsContainer.classList.toggle('show-more');
  if (showMoreBtn.innerText === 'Show More') {
    showMoreBtn.innerText = 'Show Less';
  } 
  else {
    showMoreBtn.innerText = 'Show More';
  }
});

//The scroll effects for the projects page
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const projects = document.querySelectorAll('.project-details-container');
  
  projects.forEach((project) => {
    const positionFromTop = project.getBoundingClientRect().top + scrollPosition;
    if (scrollPosition >= positionFromTop - 350) {
      project.classList.add('reveal');
    } else {
      project.classList.remove('reveal');
    }
  });
});

//Toggling the majors/minors to be visible and not visible, Courses page
function toggleVisibility(id) {
  var element = document.getElementById(id);
  if (element.style.display === "none" || element.style.display === "") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}