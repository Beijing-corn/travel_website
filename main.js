const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
//Menu Show
navToggle.addEventListener('click', function () {
  navMenu.classList.add("show-menu");
})

//Hide Menu
navClose.addEventListener("click", function () {
  navMenu.classList.remove("show-menu");
})
/*=============== DISCOVER ===============*/
/*==================== SWIPER DISCOVER ====================*/
let swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
  },
});

// ==================================================Change background headerrrrrrr===============================================================//
/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 100) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
// VIDEOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO//
const videoFile = document.getElementById('video-file')
const videoButton = document.getElementById('video-button')
const videoIcon = document.getElementById('video-icon')

function playPause() {
  // check whether the video is paused or playing
  if (videoFile.paused) {
    // Play the Videooooooo
    videoFile.play()
    //IKON CHANGERRRRRRRRRRRRR
    videoIcon.classList.remove('ri-play-line')
    videoIcon.classList.add('ri-pause-line')
  }
  else {
    videoFile.pause()
    //IKON CHANGERRRRRRRRRRRRR
    videoIcon.classList.add('ri-play-line')
    videoIcon.classList.remove('ri-pause-line')
  }
}
videoButton.addEventListener('click', playPause)

/* Scroll up */
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up')
  if (this.scrollY >= 200) { scrollUp.classList.add('show-scroll') }
  else { scrollUp.classList.remove('show-scroll') }
}
window.addEventListener("scroll", scrollUp)
// SCROLLLL REVEALLLLLLLLLLLLLLLLLL
const Sr = ScrollReveal({
  distance: '60px',
  duration: 2800
})



Sr.reveal('.home__data, .home__social-link, .home__info, .discover__container, .experience__data, .experience__overlay,.place__card,.sponsor__content,.footer__data, .footer__rights', {
  origin: 'top',
  interval: 100,
 })
Sr.reveal('.about__data, .video__description,.subscribe__description', {
  origin: 'left',
  interval: 100,
})
Sr.reveal('.about__data, .video__description,.subscribe__description', {
  origin: 'right',
  interval: 100,
})