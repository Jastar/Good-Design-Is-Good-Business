$(document).ready(function(){
	
	$("section#testimonials ul#feedbacks li.comment1 a").mouseenter(function(){
		$("section#testimonials h5#recall").text("Lorem ipsum dolor sit amet, consectetur adipiscing Qus umeo commodo s lya uscipit praesent sollicitudin enim vel mirhon");
		$("section#testimonials p#name").text("Teresa Coco");
	})
	$("section#testimonials ul#feedbacks li.comment2 a").mouseenter(function(){
		$("section#testimonials h5#recall").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris necip at lacus commodo suscipit praesent sollicitudin enim vel");
		$("section#testimonials p#name").text("Jon Doe");
	})
	$("section#testimonials ul#feedbacks li.comment3 a").mouseenter(function(){
		$("section#testimonials h5#recall").text("Lorem ipsum Setumi des ar lerus, consectetur adipiscing elit mauris necip at lacus commodo suscipit cosen sollicitudin");
		$("section#testimonials p#name").text("Marya Qasic");
	});

	$("section#portfolio figure.fig1").mouseenter(function(){
		$("div.photo1").fadeOut();
		$("div.details1").fadeIn();
	});

	$("section#portfolio figure.fig1").mouseleave(function(){
		$("div.photo1").fadeIn();
		$("div.details1").fadeOut();
	});

	$("section#portfolio figure.fig2").mouseenter(function(){
		$("div.photo2").fadeOut();
		$("div.details2").fadeIn();
	});

	$("section#portfolio figure.fig2").mouseleave(function(){
		$("div.photo2").fadeIn();
		$("div.details2").fadeOut();
	});

	$("section#portfolio figure.fig3").mouseenter(function(){
		$("div.photo3").fadeOut();
		$("div.details3").fadeIn();
	});

	$("section#portfolio figure.fig3").mouseleave(function(){
		$("div.photo3").fadeIn();
		$("div.details3").fadeOut();
	});

	$("button#menu").click(function(){
		$("ul.menuXS").slideToggle("slow");
	});
	
});