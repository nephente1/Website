document.addEventListener("DOMContentLoaded", function() {
	
	//menu btn
	
	    var btnMenu = document.querySelector(".btn-open");
    	var menu = document.querySelector(".navigation");

    	btnMenu.addEventListener("click", function(){
        this.classList.toggle("btn-close");
        menu.classList.remove("hider");
   
        if(this.className == "btn-open"){
            menu.classList.add("hider");
        }
});
        	//scroll menu1
    $("#scrollMenu1").on('click', function(e){
        e.preventDefault();
        
      var target = $("#pos1");
      $('html, body').animate({scrollTop: $(target).offset().top -90 }, 800);
	});
	
	        	//scroll menu2
    $("#scrollMenu2").on('click', function(e){
        e.preventDefault();
//		$('#pos2').animatescroll({scrollSpeed:2000,easing:'easeInOutSine'});
        
      var target = $("#pos2");
      $('html, body').animate({scrollTop: $(target).offset().top -90 }, 800);
	});
	
	        	//scroll menu3
    $("#scrollMenu3").on('click', function(e){
        e.preventDefault();
        
      var target = $("#pos3");
      $('html,body').animate({scrollTop: $(target).offset().top -90 }, 800);
	});
	
	        	//scroll menu4
    $("#scrollMenu4").on('click', function(e){
        e.preventDefault();
        
      var target = $("#pos4");
      $('html,body').animate({scrollTop: $(target).offset().top -90 }, 800);
	});
	
	
    	//scroll down1
    $("#scroll").on('click', function(e){
        e.preventDefault();
        
      var target = $("#pos1");
      $('html,body').animate({scrollTop: $(target).offset().top}, 1000);
	});
	
		//scroll down2	

	$("#scroll2").on('click', function(e){
        e.preventDefault();	
	  var target = $("#pos2");
      $('html,body').animate({scrollTop: $(target).offset().top}, 1000);
  });

			//scroll down3
	$("#scroll3").on('click', function(e){
        e.preventDefault();	
	  var target = $("#pos3");
      $('html,body').animate({scrollTop: $(target).offset().top}, 1000);
  });
	
			//scroll down4
	$("#scroll4").on('click', function(e){
        e.preventDefault();	
	  var target = $("#pos4");
      $('html,body').animate({scrollTop: $(target).offset().top}, 1000);
  });
    //scroll to top
    $("#scrollTop").on('click', function(e){
        e.preventDefault();
        
      var target = $("#top");
      $('html,body').animate({scrollTop: $(target).offset().top}, 1000);
  });
  
	
    //zmiana diva pasek po scrollowaniu
  $(document).on('scroll', function(){ //zmiana diva po scrollowaniu
    var startPosition = 0;
    var afterScrollPosition = $(this).scrollTop();
	    if (afterScrollPosition > startPosition) {
	        $('#pasek1,#pasek2').css({
            'width' :' 80%',
            'background' :'rgb(92, 35, 54)' 
          });
	    } else {
	       $('#pasek1,#pasek2').css({
            'width' :' 200px',
            'background' :'#41416f'
           });
	    }
  })
    

    
})

