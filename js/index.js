$(document).ready(function(){
      $('.parallax').parallax();
      $('.kappa').kappa();
   


    var currentTime = new Date()
    var month = currentTime.getMonth() + 1
    var total = month;
    var src = "/images/";
  
    
    // Verano
    if (total >=6 && total <= 7)
    {
        src += "logo_summer.jpg";

    }
    


    // Navidad
    else if (total ==12 || total == 1)
   {
     src += "logo_winter.png";
     $('.menu').prepend('<img id="lights" src="/images/lights2.png" />');
     $('.menu').prepend('<div id="candy"></div>');
    }




  else
  {
    src += "logo.png";
        
  }

  $('.logo').attr("src", src);

    });


