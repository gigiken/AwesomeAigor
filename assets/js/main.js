$(document).ready(function() {


	$("#open_altar").click(function() {	

		$(".open-left").hide("slide", {direction: "left"}, 1000);
		$(".open-right").hide("slide", {direction: "right"}, 1000);
		$(this).hide();
		setTimeout(function(){
 			$("#slider").hide();			
		}, 1000);
		$("main").fadeIn(1000);		

	});

	// var animateButton = function(e) {

	//   e.preventDefault;
	//   //reset animation
	//   e.target.classList.remove('animate');
	  
	//   e.target.classList.add('animate');
	//   setTimeout(function(){
	//     e.target.classList.remove('animate');
	//   },700);
	// };

	// var bubblyButtons = document.getElementsByClassName("bubbly-button");

	// for (var i = 0; i < bubblyButtons.length; i++) {
	//   bubblyButtons[i].addEventListener('click', animateButton, false);
	// }

	$( ".tribute-box" ).on( "click", function() {
      
      $(this).removeClass("ZoomIn").addClass("zoomOutUp"); // animate button
      $(".sign").fadeOut(500); // remove default text
      // check if the user receives blessing
      blessing = Math.floor((Math.random() * 2));
      if(blessing == 1) {
      	receiveBlessing();
      } else {
      	// error message
      	$(".glow").addClass("red").html("<i class='fas fa-heart-broken'></i> His Aigorness was not pleased enough to offer you his blessing.");
      	// display button
      	setTimeout(function() {
      		$( ".tribute-box" ).removeClass("zoomOutUp").addClass("ZoomIn");
      		$(".glow").html('');
      		// $(".sign").fadeIn(500);
      	}, 3000);
      }

      console.log(blessing);

      //sendOffering();
      // receiveBlessing();
      // return false;
    });
	
});

function receiveBlessing() {

	var blessArr = [
			"It is time to burn the bridge so the crazies don’t follow you.",
			"Shine your own light and follow your own path.",
			"Look up into that dazzling sun, kick the dust from your shoes, <br/>and choose your next adventure!",
			"May you be warmed and sheltered by the glow of the holy fires.",
			"That's what I do. I drink and I know things."
	];

	var randomElement = blessArr[Math.floor(Math.random()*blessArr.length)]
		//console.log(randomElement);
		// display ranger
		if(!ismobile()) {
			$(".unicorn").css("flex-basis", "33%");
		}
		
		$(".ranger").slideDown( "slow", function() {
    	$(".glow").removeClass("red").html(randomElement);
  	});
	// display message
	

	setTimeout(function(){
		$( ".tribute-box" ).removeClass("zoomOutUp").addClass("ZoomIn");
		$(".glow").html('');
		$(".ranger").fadeOut( "slow", function() {
			
			if(!ismobile()) {
				$(".unicorn").css("flex-basis", "50%");
			}
		});

	}, 3000);
}


function ismobile(){
     var newWindowWidth = $(window).width();

        return (newWindowWidth < 768);
}