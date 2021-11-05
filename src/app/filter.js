import $ from "jquery";

export default (function () {
  // Filter
  const filter = $("[data-filter]");
  filter.on("click", function (event) {
    event.preventDefault();

    const cat = $(this).data("filter");

    if (cat == "all") {
      $("[data-cat]").removeClass("hide");
    } else {
      $("[data-cat]").each(function () {
        const workCat = $(this).data("cat");

        if (workCat != cat) {
          $(this).addClass("hide");
        } else {
          $(this).removeClass("hide");
        }
      });
    }
  });
})();
