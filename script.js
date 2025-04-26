
const allSections = document.querySelectorAll('.section');

const revealSection = function(entries, observer){
  const entry = entries[0];
  if(!entry.isIntersecting) return
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
})

allSections.forEach(function(section) {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
})





///////////////////////////////////////////////////////////
// Make mobile navigation work (burger-menu)
const btnMobile = document.querySelector(".navigation__button");
const nav = document.querySelector(".nav");
const navigationBackground = document.querySelector('.navigation__background');

btnMobile.addEventListener("click", function () { 
    nav.classList.toggle("nav--open"); 
    btnMobile.classList.toggle('navigation__button--toggle');  
    navigationBackground.classList.toggle('navigation__background--toggle');
});



///////////////////////////////////////
// Page navigation
document.querySelector('.nav__list').addEventListener('click', function (e) {
  // e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) { 
    const id = e.target.getAttribute('href'); 
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
  //  Close mobile naviagtion это для того когда открыто бургер меню
  if (nav.classList.contains("nav--open")) {// если на наве весит класс nav--active
      nav.classList.remove('nav--open'); // убираем его и закрывается бургер меню
      btnMobile.classList.remove('navigation__button--toggle'); /* ибираем к кнопке класс для крестика и крестик становится линиями */

      navigationBackground.classList.remove('navigation__background--toggle');
      
    }
});


/* убираем эфект перетаскивания. */
document.addEventListener('dragstart', function(e) {
    e.preventDefault();
});
