(function () {
  var bar = document.getElementById("bottom-bar");
  var toggle = document.getElementById("about-toggle");
  var panel = document.getElementById("bottom-bar-expand");

  if (!bar || !toggle || !panel) {
    return;
  }

  toggle.addEventListener("click", function () {
    var isOpen = bar.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    panel.setAttribute("aria-hidden", isOpen ? "false" : "true");
  });
})();
