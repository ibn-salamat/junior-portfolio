$(document).ready(function() {
  let owl = $(".owl-carousel");
  function sliderEvents() {
    $(".my-slide").on("click", function(e) {
      e.stopImmediatePropagation();
      if ($(e.target).hasClass("close-slide")) {
        $(".my-slide.active").removeClass("active");
      } else {
        $(".my-slide").each(function() {
          $(this).removeClass("active");
        });
        $(this).addClass("active");
      }
    });
  }

  owl.on("refreshed.owl.carousel", sliderEvents);
  owl.owlCarousel({
    nav: true,
    loop: true,
    startPosition: 2,
    autoWidth: true,
    center: true
  });
});
