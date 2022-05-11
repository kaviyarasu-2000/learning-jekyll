$(document).ready(function() {
	$('.font').on('click', function() { 
		var textColor = $(this).val();
		$('.textshow').css("color", textColor);
		$('#showtextcolor').val(textColor);
		$('.colortxt').css("background-color", textColor);
	});
	$('.container').on('click', function() { 
		var containerColor = $(this).val(); 
			$('.showbox').css("background-color", containerColor);
			$('#Bg-color').val(containerColor);
			$('.boxcolor').css("background-color", containerColor);
		
	});
    
        $('#showtext').keyup(function () {
        let writeText = $(this).val();
        $('.textshow').text(writeText);
        
    })
});
    