$(document).ready(function () {
  // nav bar fun
  $(".fa-bars").click(function () {
    $(".fa-bars").toggleClass("fa-times-circle");
    $("nav ul").toggleClass("active");
  });

  //   color fun
  const color = (value, query) => {
    $(query).click(() => {
      $("html").css("--pri-col", value);
      $(".color").change(function (e) {
        console.log("aa");
      });
    });
  };
  color("#2aff8a", ".green");
  color("#2a7fff", ".blue");
  color("#ff145a", ".purp");
  color("#ff2929", ".reset");

  //   colors
  $(".fa-angle-up").click(function () {
    $(".color-sec").toggleClass("active");
  });
  //   scroll event
  $(window).scroll(function () {
    $(".color-sec").removeClass("active");
    $("nav ul").removeClass("active");
    $(".fa-bars").removeClass("fa-times-circle");
    if ($(window).scrollTop() > 30) {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  });
});
