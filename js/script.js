// SHOW AND HIDE NAVBAR ON SCROLL

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


// HIDE NAVBAR LI ON CLICK

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
