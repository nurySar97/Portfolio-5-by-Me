import $ from "jquery";

export default (function () {
  // Modal
  const modalCall = $("[data-modal]");
  const modalClose = $("[data-close]");
  const slider = $(".modal-work__slider");

  modalCall.on("click", function (event) {
    event.preventDefault();
    const $this = $(this);
    const modalId = $this.data("modal");

    $(modalId).addClass("show");
    $("body").addClass("no-scroll");

    // Animation
    setTimeout(function () {
      $(modalId).find(".modal__dialog").css({
        transform: "rotateX(0)",
      });
    }, 200);

    setTimeout(() => {
      slider.slick("setPosition");
    }, 25);

    slider.slick("setPosition");
  });

  modalClose.on("click", function (event) {
    event.preventDefault();
    const $this = $(this);
    const modalParent = $this.parents(".modal");

    modalParent.find(".modal__dialog").css({
      transform: "rotateX(90deg)",
    });

    // Animation
    setTimeout(function () {
      modalParent.removeClass("show");
      $("body").removeClass("no-scroll");
    }, 200);
  });

  $(".modal").on("click", function (event) {
    event.stopPropagation();
    const $this = $(this);
    $this.find(".modal__dialog").css({
      transform: "rotateX(90deg)",
    });

    // Animation
    setTimeout(function () {
      $this.removeClass("show");
      $("body").removeClass("no-scroll");
    }, 200);
  });

  $(".modal__dialog").on("click", function (event) {
    event.stopPropagation();
  });
})();
