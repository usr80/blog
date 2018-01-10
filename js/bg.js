
$(document).ready(function() {
  window.pattern = Trianglify({
    width: window.innerWidth,
    height: window.innerHeight
  });
  //document.body.appendChild(pattern.canvas())
  //$("body").css("background-image",pattern.svg());
  $("body").append(pattern.svg());
});
