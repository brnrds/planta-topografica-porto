(function () {
  var panel = document.getElementById("about-panel");
  var backdrop = document.getElementById("about-panel-backdrop");
  var openBtn = document.getElementById("about-open");
  var closeBtn = document.getElementById("about-close");

  if (!panel || !backdrop || !openBtn || !closeBtn) {
    return;
  }

  function setOpen(isOpen) {
    panel.classList.toggle("is-open", isOpen);
    backdrop.classList.toggle("is-open", isOpen);
    backdrop.hidden = !isOpen;
    panel.setAttribute("aria-hidden", isOpen ? "false" : "true");
    openBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.style.overflow = isOpen ? "hidden" : "";
  }

  openBtn.addEventListener("click", function () {
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
