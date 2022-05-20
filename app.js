$(document).ready(function() {
    var textColor = 1;
	$('.font').on('click', function() { 
		var textColor = $(this).val();
        color=$(this).val();
		$('.textshow').css("color", textColor);
		$('#showtextcolor').val(textColor);
		$('.colortxt').css("background-color", textColor);
	});
	$('.container').on('click', function() { 
        	var containerColor = $(this).val(); 
		if(containerColor == color) {
			$(color).attr("disabled", 'disabled');
		} else {
			$(color).attr("enable", 'enable');
	
        $('.showbox').css("background-color", containerColor);
        $('#Bg-color').val(containerColor);
        $('.boxcolor').css("background-color", containerColor);
        }
	});
       $('#showtext').keyup(function() {
       let write = $(this).val();
       $('.textshow').text(write);
        
    })
});

      function colorPopup(id) {
            var pop = document.getElementById(id);
            var popup = document.getElementById("Popup");
            var mypopup = document.getElementById("mypopup");
            if(id == "Popup" && mypopup.classList.contains("show")){
                 mypopup.classList.toggle("show");
                }else if(id == "mypopup" && popup.classList.contains("show")){
                 popup.classList.toggle("show");
                }
                 pop.classList.toggle("show");
                }











