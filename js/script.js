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

// DAY NIGHT

// function getStylesheet() {
//       var currentTime = new Date().getHours();
//       if (0 <= currentTime&&currentTime < 6) {
//        document.write("<link rel='stylesheet' href='css/style-night.css' type='text/css'>");
//       }
//       if (6 <= currentTime&&currentTime < 21) {
//        document.write("<link rel='stylesheet' href='css/style.css' type='text/css'>");
//       }
//       if (21 <= currentTime&&currentTime <= 24) {
//         document.write("<link rel='stylesheet' href='css/style-night.css' type='text/css'>");
//       }
// }
//
// getStylesheet();


// NEW DARK MODE

function darkmode() {
      var currentTime = new Date().getHours();
      if (0 <= currentTime&&currentTime < 6) {
        document.querySelector("body").classList.add("night");
        document.querySelector("h1").classList.add("night");
        document.querySelector("section").classList.add("night");
        document.querySelector("footer").classList.add("night");      }
      if (6 <= currentTime&&currentTime < 21) {
        document.querySelector("body").classList.remove("night");
        document.querySelector("h1").classList.remove("night");
        document.querySelector("section").classList.remove("night");
        document.querySelector("footer").classList.remove("night");
      }
      if (21 <= currentTime&&currentTime <= 24) {
        document.querySelector("body").classList.add("night");
        document.querySelector("h1").classList.add("night");
        document.querySelector("section").classList.add("night");
        document.querySelector("footer").classList.add("night");      }
}

darkmode();
