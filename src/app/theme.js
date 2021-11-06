import $ from "jquery";

export default (function () {
  const sun = `<i class="fas fa-sun" />`;
  const moon = `<i class="far fa-moon" />`;
  const themeBtn = $(".header__theme-btn");
  const theme = { current: "light" };
  const getHrefValue = () => `assets/theme/${theme.current}.css`;

  themeBtn.on("click", function () {
    const link = $(`[href="${getHrefValue()}"]`);
    const href = link.attr("href");
    const isLight = href.includes("light");
    const template = isLight ? sun : moon;

    theme.current = isLight ? "dark" : "light";
    themeBtn.html(template);
    link.attr("href", getHrefValue());
  });
})();
