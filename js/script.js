// SHOW AND HIDE NAVBAR ON SCROLL

if (!(/iPhone|iPad|iPod|Android|webOS|BlackBerry|Opera Mini|IEMobile/i.test(navigator.userAgent))) {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbarid").style.top = "0";
    } else {
      document.getElementById("navbarid").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
  }
}


// HIDE NAVBAR LI ON CLICK

$('.navbar-nav>li>a').on('click', function() {
  $('.navbar-collapse').collapse('hide');
});



// DARK MODE

var x = $("body, h1, section, footer");
var currentTime = new Date().getHours();

if (6 <= currentTime && currentTime < 21) {
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("night");
  }
} else {
  for (i = 0; i < x.length; i++) {
    x[i].classList.add("night");
  }
}
