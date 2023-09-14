$(document).ready(function() 
	{$("#javascriptTest").on('click', function(){
		$(".image").toggle()
	})
	$(document).on("click", function(){
		$(".image").toggle()
		console.log("Beans")
	})
})