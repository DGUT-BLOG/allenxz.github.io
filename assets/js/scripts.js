// dl-menu options
$(function() {
  $( '#dl-menu' ).dlmenu({
    animationClasses : { classin : 'dl-animate-in', classout : 'dl-animate-out' }
  });
});
// Need this to show animation when go back in browser
window.onunload = function() {};

// Add lightbox class to all image links
$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

// FitVids options
$(function() {
  $(".content").fitVids();
});

// All others
var mouseSum = 0;
$(document).ready(function() {
    // zoom in/zoom out animations
    if ($(".container").hasClass('fadeOut')) {
        $(".container").removeClass("fadeOut").addClass("fadeIn");
    }
    if ($(".wrapper").hasClass('fadeOut')) {
        $(".wrapper").removeClass("fadeOut").addClass("fadeIn");
    }
    $(".zoombtn").click(function() {
        $(".container").removeClass("fadeIn").addClass("fadeOut");
        $(".wrapper").removeClass("fadeIn").addClass("fadeOut");
    });
    // go up button
    $.goup({
        trigger: 500,
        bottomOffset: 10,
        locationOffset: 20,
        containerRadius: 0,
        containerColor: '#fff',
        arrowColor: '#000',
        goupSpeed: 'normal'
    });
	$('.image-popup').magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 300, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open. 
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade'
  });
   // 鼠标点击特效
//    $("body").click(function(e) {
//       var a = new Array("(๑•̀ㅂ•́)و✧", "( ‵▽′)ψ", "(oﾟvﾟ)ノ", "ㄟ( ▔, ▔ )ㄏ", "（*゜ー゜*）", 
//       "(。_。)", "ʅ（´◔౪◔）ʃ", "_( ﾟДﾟ)ﾉ", "<(￣︶￣)>", "(｡･∀･)ﾉﾞ", "(。・∀・)ノ", "<(￣ˇ￣)/");
//       var $i = $("<span/>").text(a[mouseSum]);
//       mouseSum = (mouseSum + 1) % a.length;
//       var x = e.pageX,
//       y = e.pageY;
//       $i.css({
//           "z-index": 9999999,
//           "top": y - 20,
//           "left": x,
//           "position": "absolute",
//           "font-weight": "bold",
//           "color": "#b390d0"
//       });
//       $("body").append($i);
//       $i.animate({
//           "top": y - 180,
//           "opacity": 0
//       },
//       1500,
//       function() {
//           $i.remove();
//       });
//   });
});
