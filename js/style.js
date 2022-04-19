window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.remove("bg-transparent");
  nav.classList.toggle("fondo-dark", window.scrollY > 0);
});
