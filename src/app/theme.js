import $ from "jquery";
const sun = `<i class="fas fa-sun" />`;
const moon = `<i class="far fa-moon" />`;
const storageName = 'theme-webpack-portfolio';
const initTheme = localStorage.getItem(storageName);
const theme = { current: initTheme || "light" };
const $themeBtn = $(".header__theme-btn");

export default (function () {
  const getTheme = (theme = "light") => `assets/theme/${theme}.css`;
  const template = () => {
    const _icons = {
      dark: moon,
      light: sun,
    };
    return _icons[theme.current];
  };

  const $styleSheet = $(`[href="${getTheme()}"]`);

  $themeBtn.on("click", function () {
    theme.current = theme.current === "light" ? "dark" : "light";
    setTheme(template());
  });

  function setTheme(template) {
    $styleSheet.attr("href", getTheme(theme.current));
    localStorage.setItem(storageName, theme.current);
    $themeBtn.html(template);
  }

  $(window).on("load", function () {
    setTheme(template());
  });
})();
