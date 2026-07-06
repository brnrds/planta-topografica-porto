(function () {
  var backdrop = document.getElementById("about-backdrop");
  var sheet = document.getElementById("about-sheet");
  var toggle = document.getElementById("about-toggle");
  var closeBtn = document.getElementById("about-close");

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

  toggle.addEventListener("click", function () {
    setOpen(true);
  });

  closeBtn.addEventListener("click", function () {
    setOpen(false);
  });

  backdrop.addEventListener("click", function () {
    setOpen(false);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setOpen(false);
    }
  });
})();
