
//had to use a seperate js file because it was messing with the index scroll effects
//Scroll effects for the timeline page
const timelineItems = document.querySelectorAll('.timeline-content');

function checkScroll() {
  timelineItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.75) {
      item.classList.add('show');
    }
    else {
      item.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', checkScroll);//Call the function
checkScroll();