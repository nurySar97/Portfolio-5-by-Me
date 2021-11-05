import $ from "jquery";

export default (function () {
  let cursor = 0;

  $(".burger").on("click", onHandleMenu);
  $(".nav").on("click", onHandleMenu);

  function onHandleMenu() {
    const $burger = $(".burger__inner");
    const $nav = $(".nav");
    $burger.toggleClass("menu");
    $burger.toggleClass("close");

    switch (cursor) {
      case 0:
        $nav.removeClass("transition");
        $nav.toggleClass("left");
        cursor = 1;
        return;
      case 1:
        $nav.toggleClass("left");
        $nav.toggleClass("right");
        cursor = 2;
        return;
      case 2:
        $nav.toggleClass("right");
        $nav.toggleClass("left");
        cursor = 3;
        return;
      default:
        $nav.addClass("transition");
        $nav.toggleClass("left");
        cursor = 0;
    }
  }
})();
