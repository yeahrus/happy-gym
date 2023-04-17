$(function () {
  var header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOfset = $(window).scrollTop();

  // fixed header
  checkScroll(scrollOfset);

  $(window).on("scroll", function () {
    scrollOfset = $(this).scrollTop();
    checkScroll(scrollOfset);
  });

  function checkScroll(scrollOfset) {
    if (scrollOfset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  // Smooth Scroll

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $this.data("scroll"),
      blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate(
      {
        scrollTop: blockOffset,
      },
      1000
    );
    $("#nav, #nav_toggle").removeClass("active");
  });
  // Menu nav toggle

  $("#nav_toggle").on("click", function (event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });
});

// Pop_up
const openPopUp = document.getElementById("open_pop_up");
const closePopUp = document.getElementById("pop_up_close");
const popUp = document.getElementById("pop_up");
const popUpBody = document.getElementById("pop_up_body");

openPopUp.addEventListener("click", function (e) {
  e.preventDefault();

  popUp.classList.add("active");
});
closePopUp.addEventListener("click", () => {
  popUp.classList.remove("active");
});

//Send
