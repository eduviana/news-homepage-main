document.getElementById("menuIcon").addEventListener("click", function () {
  var menuOverlay = document.getElementById("menuOverlay");
  menuOverlay.classList.toggle("active");
  document.body.classList.toggle("menu-overlay-active");
});

document
  .querySelector(".menu-overlay-close")
  .addEventListener("click", function () {
    var menuOverlay = document.getElementById("menuOverlay");
    menuOverlay.classList.remove("active");
    document.body.classList.remove("menu-overlay-active");
  });
