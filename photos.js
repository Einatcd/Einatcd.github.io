document.getElementById("content").scrollIntoView({block: "end"});
let myCarousel = document.querySelector('#myCarousel')
let carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2500,
  touch: true,
  keyboard: true
})
