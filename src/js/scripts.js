$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 19,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });
});

$(".flip").click(function() {
  $(this).parents('.card').toggleClass("flipped");
});
