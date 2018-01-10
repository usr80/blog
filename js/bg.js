
$(document).ready(function() {
  window.pattern = Trianglify({
    width: window.innerWidth + 100,
    height: window.innerHeight + 200
  });
  //document.body.appendChild(pattern.canvas())
  //$("body").css("background-image",pattern.svg());
  $("body").append(pattern.svg());
});
