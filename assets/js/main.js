$(document).ready(function(){
  $('#hero-slider').owlCarousel({
    loop:true,
    autoplay: true,
    items: 1,
    dots: false,
    nav: true,
    navText: ['PREV', 'NEXT'],
    smartSpeed: 1000,
  });

  // Client Reviw
  $('#client-review').owlCarousel({
    loop:true,
    autoplay: true,
    items: 2,
    dots: true,
    nav: false,
    smartSpeed: 1000,
  })
});