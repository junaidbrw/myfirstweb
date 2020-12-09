document.body.onkeyup = function(event) {
  console.log(event.keycode);
  if (event.keyCode == 68) {
    document.body.classList.toggle("dark");
  }
}