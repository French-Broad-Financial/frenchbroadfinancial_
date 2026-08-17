(function () {
  var btn = document.querySelector("[data-menu]");
  var nav = document.querySelector("[data-mobile]");
  if (!btn || !nav) return;
  btn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
})();
