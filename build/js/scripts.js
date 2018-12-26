$(".carousel-1").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 4,
      nav: false
    },
    576: {
      items: 4,
      nav: false
    },
    1200: {
      items: 4
    }
  }
});

$(".carousel-2").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    992: {
      items: 1,
      nav: true,
      singleItem: true,
      mouseDrag: true,
      touchDrag: true
    },
    1200: {
      items: 0,
      nav: false,
      loop: false,
      singleItem: false,
      mouseDrag: false,
      touchDrag: false
    }
  }
});

$(".carousel-3").owlCarousel({
  loop: true,
  margin: 19,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
});

//================================================

$(".flip").click(function() {
  $(this)
    .parents(".card")
    .toggleClass("flipped");
});

//====================================================

$(document).ready(function() {
  $(".btn-white").click(function() {
    var lable = $(".btn-white")
      .text()
      .trim();

    if (lable == "READ MORE") {
      $(".btn-white").text("READ LESS");
      $(".promo-info").removeClass("hidden");
    } else {
      $(".btn-white").text("READ MORE");
      $(".promo-info").addClass("hidden");
    }
  });
});

//=================================================

$(".btn-collapse_table").click(function() {
  $(this)
    .prev(".table-collapse_group")
    .toggle()
    .toggleClass("class-table");

  $(this)
    .parents(".table-infos")
    .toggleClass("class-table_padding");
});

//==================================================

$(document).ready(function() {
  var readMore = $(".read-more").html();
  var lessText = readMore.substr(0, 220);

  if (readMore.length > 220) {
    $(".read-more")
      .html(lessText)
      .append("<a href='#' class='read-more-link'>... Read more</a>");
  } else {
    $(".read-more").html(readMore);
  }

  $("body").on("click", ".read-more-link", function(event) {
    event.preventDefault();

    $(this)
      .parent(".read-more")
      .html(readMore)
      .append("<a href='#' class='show-less-link'>Read less</a>");
  });

  $("body").on("click", ".show-less-link", function(event) {
    event.preventDefault();

    $(this)
      .parent(".read-more")
      .html(readMore.substr(0, 220))
      .append("<a href='' class='read-more-link'>... Read more</a>");
  });
});

//=============================================================================
