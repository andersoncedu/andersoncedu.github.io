$(document).ready(function() 
	{$("#javascriptTest").on('click', function(){
		$(".image").toggle()
	})
	$(document).on("transitionend", function(){
		$(".image").toggle()
		console.log("Beans")
	})
})