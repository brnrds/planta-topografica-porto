(function () {
  var backdrop = document.getElementById("about-backdrop");
  var sheet = document.getElementById("about-sheet");
  var toggle = document.getElementById("about-toggle");
  var closeBtn = document.getElementById("about-close");
  var languageButtons = sheet ? sheet.querySelectorAll("[data-about-language]") : [];
  var languageSections = sheet ? sheet.querySelectorAll(".about-sheet-content > section[lang]") : [];

  if (!backdrop || !sheet || !toggle || !closeBtn) {
    return;
  }

  function setOpen(isOpen) {
    backdrop.classList.toggle("is-open", isOpen);
    sheet.classList.toggle("is-open", isOpen);
    backdrop.hidden = !isOpen;
    sheet.setAttribute("aria-hidden", isOpen ? "false" : "true");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.style.overflow = isOpen ? "hidden" : "";
  }

  function setLanguage(language) {
    languageSections.forEach(function (section) {
      section.hidden = section.lang.split("-")[0] !== language;
    });

    languageButtons.forEach(function (button) {
      var isActive = button.getAttribute("data-about-language") === language;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    sheet.setAttribute("aria-labelledby", "about-sheet-title-" + language);
    sheet.scrollTop = 0;
  }

  toggle.addEventListener("click", function () {
    setOpen(true);
  });

  closeBtn.addEventListener("click", function () {
    setOpen(false);
  });

  backdrop.addEventListener("click", function () {
    setOpen(false);
  });

  languageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setLanguage(button.getAttribute("data-about-language"));
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setOpen(false);
    }
  });
})();
