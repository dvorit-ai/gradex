 	// 	var draw = SVG().addTo('#backgroundX').size($(window).width(), $(window).height())

 	// 	var line1 = draw.line($(window).width(), 0, 0, $(window).height()).stroke({ width: 1, color:"#0F0" })

		// var line2 = draw.line(0, 0, $(window).width(), $(window).height()).stroke({ width: 1, color:"#0F0" })

		const speed = 300 			//this is the speed of animations in milliseconds
		var allData = [];					//this array will hold all the data.
		var projectTeasers = []; 	//this array will hold all the HTML for the Thubnails on the front page
		var projects = [];			//this array will hold all the HTML for the full projects.
		var studentList = [];		//this array will list all the student names and projects
		var allTags = [];			//this array will hold all the unique tags

 


//this is function to randomize any array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


//this is for making filenames and classnames mn = machine name
function mn(string) {
	return string.toLowerCase().replace(" ","")
}


	//this reaches out the the JSON file and pulls in all the data
	//fetch('data/responses.json')
	fetch('https://spreadsheets.google.com/feeds/list/1eXqcfAFnQsfIgsAWohCV2sRYQxvG6V8Q9RpDvyWAgz4/1/public/full?alt=json')
	  .then(response => response.json())
	  .then(data => {
	  	
	  	allData = data.feed.entry;




	  	//here we will loop through ALLLLL the data.
	  	for (i=0; i<allData.length;i++) {
	  	//console.log(allData[i]["Thumbnail Image"])	


		var tags  = name = title  = profs = description = bio = quipq = quipa = image1 = image2 = image3 = image4 = image5 = caption1 = caption2 = caption3 = caption4 = caption5 = video = portrait = "";

		tags 		=	allData[i]["gsx$tags"] != undefined ? allData[i]["gsx$tags"]["$t"].split(", "):"";
	  	name 		= 	allData[i]["gsx$name"] != undefined ? allData[i]["gsx$name"]["$t"]:"";
	  	title 		= 	allData[i]["gsx$title"] != undefined ? allData[i]["gsx$title"]["$t"]:"";
	  	profs		= 	allData[i]["gsx$profs"] != undefined ? allData[i]["gsx$profs"]["$t"]:"";
	  	description = 	allData[i]["gsx$description"] != undefined ? allData[i]["gsx$description"]["$t"]:"";
		bio			=	allData[i]["gsx$bio"] != undefined ? allData[i]["gsx$bio"]["$t"]:"";
		quipq		=	allData[i]["gsx$quipq"] != undefined ? allData[i]["gsx$quipq"]["$t"]:"";
		quipa		=	allData[i]["gsx$quipa"] != undefined ? allData[i]["gsx$quipa"]["$t"]:"";
		image1	=	allData[i]["gsx$image1"] != undefined ? allData[i]["gsx$image1"]["$t"]:"";
		image2	=	allData[i]["gsx$image2"] != undefined ? allData[i]["gsx$image2"]["$t"]:"";
		image3	=	allData[i]["gsx$image3"] != undefined ? allData[i]["gsx$image3"]["$t"]:"";
		image4	=	allData[i]["gsx$image4"] != undefined ? allData[i]["gsx$image4"]["$t"]:"";
		image5	=	allData[i]["gsx$image5"] != undefined ? allData[i]["gsx$image5"]["$t"]:"";
		caption1	=	allData[i]["gsx$caption1"] != undefined ? allData[i]["gsx$caption1"]["$t"]:"";
		caption2	=	allData[i]["gsx$caption2"] != undefined ? allData[i]["gsx$caption2"]["$t"]:"";
		caption3	=	allData[i]["gsx$caption3"] != undefined ? allData[i]["gsx$caption3"]["$t"]:"";
		caption4	=	allData[i]["gsx$caption4"] != undefined ? allData[i]["gsx$caption4"]["$t"]:"";
		caption5	=	allData[i]["gsx$caption5"] != undefined ? allData[i]["gsx$caption5"]["$t"]:"";
		video	=	allData[i]["gsx$video"] != undefined ? allData[i]["gsx$video"]["$t"]:"";
		videocaption	=	allData[i]["gsx$videocaption"] != undefined ? allData[i]["gsx$videocaption"]["$t"]:"";
		portrait	=	allData[i]["gsx$portrait"] != undefined ? allData[i]["gsx$portrait"]["$t"]:"";

		const thumbnail	=	allData[i]["gsx$thumbnail"]["$t"];

		
	  	var tagButtons = "";
	  	var tagClasses= ""
	  	
	  			for (t=0;t<tags.length;t++) {
	  				tagClasses += "t_"+mn(tags[t])+" ";
	  				tagButtons += "<h6 class='tag'>"+tags[t]+"</h6>";
	  				allTags.push(tags[t]);
	  				
	  			}

		
	  	var imagenames = name.toLowerCase().replace(" ","_")
	  	
	  	



	  	student = $("<tr data-name='"+name+"' data-title='"+title+"' data-class='"+profs+"'><td><a href='/?id="+i+"'>"+name+"</a></td><td><a href='/?id="+i+"'>"+title+"</a></td><td><a href='/?id="+i+"'>"+profs+"</a></td></tr>");
	  	studentList.push(student);




		var projTeaser = 	"<div id='project-"+i+"' class=\"thumbnail "+tagClasses+"\"+>"+
					"<a data-project-id='"+i+"' id='project-link-"+i+"' class=\"project-link\" data-url="+mn(name)+">"+
					"<img src=\"images/"+thumbnail+"\" alt=\"\"/>"+
					"<div class=\"img-tags\">"+
					"<p class='uppercase'>"+name+"</p>"+
					"<h3>"+title+"</h3>"+
					tagButtons+
					"</div>"+
					"</a>"+
					"</div>";

					//console.log(allData[i]);

					projectTeasers.push(projTeaser);
			
		var projFull = "<div class=\"students-container\">"+
"<div class=\"sidebar\">"+
"<p class='uppercase'>"+name+"</p>"+
"<h3>"+title+"</h3>"+
"<p class=\"description\">"+description+"</p>"+
"<p class=\"uppercase description\">"+tagButtons+"</p>";
portrait != "" ? projFull+="<img src=\"images/"+portrait+"\">": null

projFull+= "<p class=\"uppercase\">"+"About the designer"+"</p>"+
"<p class=\"description\">"+bio+"</p>"+
"<p class=\"uppercase\">"+quipq+"</p>"+
"<br><p class=\"description\">"+quipa+"</p>"+
"</div>"+
"<div class=\"project\">";
	




	if (image1 != "") {
		projFull += "<div class='img1'>"+
					"<img src='images/"+image1+"'>";
						if (caption1 != "") projFull += "<h6 class='caption'>"+caption1+"</h6>"		
		projFull += "</div>";
	}



	if (image2 != "") {
		projFull += "<div class='img2'>"+
					"<img src='images/"+image2+"'>";
						if (caption2 != "") projFull += "<h6 class='caption'>"+caption2+"</h6>"		
		projFull += "</div>";
	}


	if (image3 != "") {
		projFull += "<div class='img3'>"+
					"<img src='images/"+image3+"'>";
						if (caption3 != "") projFull += "<h6 class='caption'>"+caption3+"</h6>"		
		projFull += "</div>";
	}

	if (image4 != "") {
		projFull += "<div class='img4'>"+
					"<img src='images/"+image4+"'>";
						if (caption4 != "") projFull += "<h6 class='caption'>"+caption4+"</h6>"		
		projFull += "</div>";
	}

	if (image5 != "") {
		projFull += "<div class='img5'>"+
					"<img src='images/"+image5+"'>";
						if (caption5 != "") projFull += "<h6 class='caption'>"+caption5+"</h6>"		
		projFull += "</div>";
	}	


	//determine if youtube or vimeo and post accordingly
	if (video != "") {

		//if VIMEO
		if (video.includes("vimeo")) {
			var l = video.split(".com/")[1];		
			projFull += "<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://player.vimeo.com/video/"+l+"' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>"
		//IF YOUTUBE 
		} else {
			var l = video.split(".com/")[1];		
			projFull += "<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/"+l+"' frameborder='0' allowfullscreen></iframe></div>"
		}
		projFull+="<h6 class=\"caption\">"+videocaption+"</h6>"
		
	}

	projFull += "</div></div>"



		projects.push(projFull);
	  			
	  	}

	 // shuffle(projectTeasers)


	 studentList.sort();

	for (k=0;k<studentList.length;k++) {
			$("#student-list table").append(studentList[k])


		}




	  	for (j=0;j<projectTeasers.length;j++) {
			$(".projects-container").append(projectTeasers[j])

			if (j==0) { $(".projects-container").append("<div class=\"thumbnail type\"><h1>r e c<br>e s s<br>i o n</h1></div>"); }
			if (j==34) { $(".projects-container").append("<div class=\"thumbnail type\"><p class='home'>Recession Grads is a digital archive that showcases the work of the graphic design graduates from OCADU 2020. Recession Grads is a digital archive that showcases the work of the graphic design graduates from OCADU 2020. Enjoy your visit!</p></div>"); }
			if (j==35) { $(".projects-container").append("<div class=\"thumbnail type\"><h1>g r a<br />d s</h1></div>"); }
			if (j==50) { $(".projects-container").append("<div class=\"thumbnail type\"><h1 class='larger'>2 0<br />2 0</h1></div>"); }
		}


		$(".projects-container").prepend("<div class='filter-by-tag'><h6 class='tag filter'>Filter</h6></div>")

		var uniqueTags = [];
		$.each(allTags, function(i, el){
		    if($.inArray(el, uniqueTags) === -1) uniqueTags.push(el);
		});
		uniqueTags.sort();
		for (t=0;t<uniqueTags.length;t++) {
			$(".filter-by-tag").append("<h6 class='tag t_"+uniqueTags[t].toLowerCase().replace(" ","")+"'>"+uniqueTags[t]+"</h6>")
		}

		setTimeout(function(){

	  		$(".projects-container").slideDown(speed);;
	  	},500)
	  });



//tag filtering on the homepage

 	$(document).on("click",".filter-by-tag .tag",function(){
 		
 		if ($(this).hasClass("active")) {
 			$(".tag").removeClass("active");
 			$(".thumbnail").slideDown(speed);
			history.pushState({
				    id: $(this).data("url")
				}, $(this).data("url"), "/");
 		} else {
 			$(".tag").removeClass("active");
 			$(this).addClass("active");
 		cT = "t_"+$(this).text().toLowerCase().replace(" ",""); 
		$("."+cT).slideDown(speed);
		$(".thumbnail:not(."+cT+")").slideUp(speed);
		history.pushState({
		    id: $(this).data("url")
		}, $(this).data("url"), "/?tag="+cT);

 		}
 		
 		
 	})


//tag filtering on the homepage
 	$(document).on("click",".filter",function(){
 		$(".tag").removeClass("active")
		$(".thumbnail").slideDown(speed);
		history.pushState({
		    id: $(this).data("url")
		}, $(this).data("url"), "/");
 	})

//tag filtering from a project page
 	$(document).on("click",".sidebar .tag",function(){
 		//$(".tag").removeClass("active");
 		//$(this).addClass("active");
 		cT = "t_"+$(this).text().toLowerCase().replace(" ",""); 
		//$("."+cT).slideDown(speed);
		//$(".thumbnail:not(."+cT+")").slideUp(speed);
		window.location.href= "/?tag="+cT;
	});



$(window).bind("unload", function() { 
alert("f")
});

	  $(document).on("click",".project-link",function(e){
	  	e.preventDefault();

	  	history.pushState({
		    id: $(this).data("url")
		}, $(this).data("url"), "?id="+$(this).data("project-id"));

	  	$(".projects-container").slideUp(speed);;
	  	setTimeout(function(){
	  		$(".projects-container").empty();
	  	})


	  	$(".student-container").html(projects[$(this).data("project-id")])



	  	setTimeout(function(){
	  		$(document).scrollTop(0)
	  		$(".student-container").slideDown(speed);;
	  	},200)

	  	
	  })


	  $(document).ready(function(){


	  		setTimeout(function(){

	  			var u = window.location.href;
				if (u.includes("?")) {
	  				var getz = u.split("?")[1].split("=");
	  				if (getz[0] == "id") {		
	  					$("#project-link-"+getz[1]).click();
	  				} else if (getz[0] == "tag") {		
	  					rrr = ".filter-by-tag ."+getz[1].toLowerCase().replace(" ","");
	  					console.log(rrr)
	  					$(rrr).click();
	  				}
	  			}
	  			
	  		

	  	},500)

	  	$(".projects-container").slideUp(speed);;


	  	$(".student-container").html(projects[$(this).data("project-id")])



	  	setTimeout(function(){
	  		$(".student-container").slideDown(speed);;
	  	},200)
	  })