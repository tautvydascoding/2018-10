//------------nuotrauku aprasymai------------//
$(".moz1").click(function() {
  $(".content").show(500);
});
$(".moz1").mouseleave(function() {
  $(".content").hide(150);
});

$(".moz4").click(function() {
  $(".content1").show(500);
});
$(".moz4").mouseleave(function() {
  $(".content1").hide(150);
});

$(".moz5").click(function() {
  $(".content2").show(500);
});
$(".moz5").mouseleave(function() {
  $(".content2").hide(150);
});
//------------END-------------------------//

//------------signup--------------------//
$(".registracija").click(function() {
  $(".box").show(500);
});
$(".submit").click(function() {
  $(".box").hide(500);
});
//--------------END----------------------//

//------------YOUTUBE-------------------//
if($(window).width()>768){
$(".youtube").mouseenter(function() {
  $(".nav").animate({
    width: '+=250px'
  }, 500);
});
}
if($(window).width()>768){
$(".youtube").mouseleave(function() {
  $(".nav").animate({
    width: '-=250px'
  }, 500);
});
}
if($(window).width()>768){
$(".nav").click(function() {
  $(".youtube").show(1000);
});
}
if($(window).width()>768){
$(".youtube").mouseleave(function() {
  $(".youtube").hide(1000);
});
}
//--------------END----------------------//

//--------------menu template----------------//
var t1 = new TimelineMax({
  paused: true
});

t1.to(".one", 0.8, {
  y: 6,
  rotation: 45,
  ease: Expo.easeInOut
});
t1.to(".two", 0.8, {
  y: -6,
  rotation: -45,
  ease: Expo.easeInOut,
  delay: -0.8
});

t1.to(".menu", 2, {
  top: "0%",
  ease: Expo.easeInOut,
  delay: -0.5
});

t1.staggerFrom(".menu ul li", 2, {
  x: -200,
  opacity: 0,
  ease: Expo.easeOut
}, 0.3);

t1.reverse();
$(document).on("click", ".toggle-btn", function() {
  t1.reversed(!t1.reversed());
});
$(document).on("click", "men a", function() {
  t1.reversed(!t1.reversed());
});
//-----------------END------------------------//
