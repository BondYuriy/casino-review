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

$(document).ready(function() {
  $(".owl-carousel2").owlCarousel({
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
      1000: {
        items: 4
      }
    }
  });
});

//================================================

$(".flip").click(function() {
  $(this)
    .parents(".card")
    .toggleClass("flipped");
});

//================================================

$(document).ready(function() {
  $(".promo-info").hide();

  $(".btn-white").click(function() {
    var lable = $(".btn-white")
      .text()
      .trim();

    if (lable == "READ MORE") {
      $(".btn-white").text("READ LESS");
      $(".promo-info").show();
    } else {
      $(".btn-white").text("READ MORE");
      $(".promo-info").hide();
    }
  });
});
