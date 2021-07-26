
$(document).ready(function(){
    
    $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
          $('#btnScrollToTop').fadeIn();
      } else {
          $('#btnScrollToTop').fadeOut();
      }
  });

  
     $('#btnScrollToTop').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
     });


    $('#workNav').click(function(){
        $([document.documentElement, document.body]).animate({
          scrollTop: $(".casestudyGrid").offset().top
        }, 2000);

    });

    window.onscroll = function() {myFunction()};

    function myFunction() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      $("#myProgressBar").attr('style',"width:" + scrolled + "%");
      $("#myProgressBar").html(Math.round(scrolled) + "%");

      
    }


});


