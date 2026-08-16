document.addEventListener("DOMContentLoaded", function() {
  var drop = document.getElementById("navDrop");
  if (!drop) return;
  drop.querySelector("button").addEventListener("click", function(e) {
    e.stopPropagation();
    drop.classList.toggle("open");
  });
  document.addEventListener("click", function() {
    drop.classList.remove("open");
  });
});
