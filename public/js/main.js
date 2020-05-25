 	// 	var draw = SVG().addTo('#backgroundX').size($(window).width(), $(window).height())

 	// 	var line1 = draw.line($(window).width(), 0, 0, $(window).height()).stroke({ width: 1, color:"#0F0" })

		// var line2 = draw.line(0, 0, $(window).width(), $(window).height()).stroke({ width: 1, color:"#0F0" })

		var projectTeasers = []; //this array will hold all the HTML for the Thubnails on the front page
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


	//this reaches out the the JSON file and pulls in all the data
	fetch('data/responses.json')
	  .then(response => response.json())
	  .then(data => {
	  	




	  	//here we will loop through ALLLLL the data.
	  	for (i=0; i<data.length;i++) {
	  	//console.log(data[i]["Thumbnail Image"])	

	  	var tags=data[i]["Project Tags"].split(";");
	  	var tagButtons = "";
	  	var tagClasses= ""
	  	
	  			for (t=0;t<tags.length;t++) {
	  				tagClasses += "t_"+tags[t].toLowerCase().replace(" ","")+" ";
	  				tagButtons += "<h6 class='tag'>"+tags[t]+"</h6>";
	  				allTags.push(tags[t]);
	  				
	  			}


	  	var imagenames = data[i]["First & Last Name"].toLowerCase().replace(" ","_")
	  	var thumb = imagenames+"_thumbnail.jpg"
	  	var portrait = imagenames+"_portrait.jpg"



	  	student = "<tr><td><a href='/?id="+i+"'>"+data[i]["First & Last Name"]+"</a></td><td><a href='/?id="+i+"'>"+data[i]["Project Title"]+"</a></td><td><a href='/?id="+i+"'>"+data[i]["Class/Professor(s)"]+"</a></td></tr>";
	  	studentList.push(student);




		var projTeaser = 	"<div id='project-"+i+"' class=\"thumbnail "+tagClasses+"\"+>"+
					"<a data-project-id='"+i+"' id='project-link-"+i+"' class=\"project-link\" data-url="+data[i]["First & Last Name"].toLowerCase().replace(" ","_")+">"+
					"<img src=\"images/"+thumb+"\" alt=\"\"/>"+
					"<div class=\"img-tags\">"+
					"<p class='uppercase'>"+data[i]["First & Last Name"]+"</p>"+
					"<h3>"+data[i]["Project Title"]+"</h3>"+
					tagButtons+
					"</div>"+
					"</a>"+
					"</div>";

					//console.log(data[i]);

					projectTeasers.push(projTeaser);
			
		var projFull = "<div class=\"students-container\">"+
"<div class=\"sidebar\">"+
"<p class='uppercase'>"+data[i]["First & Last Name"]+"</p>"+
"<h3>"+data[i]["Project Title"]+"</h3>"+
"<p class=\"description\">"+data[i]["Project Description"]+"</p>"+
"<p class=\"uppercase description\">"+tagButtons+"</p>"+
"<img src=\"images/"+portrait+"\">"+

"<p class=\"uppercase\">"+"About the designer"+"</p>"+
"<p class=\"description\">"+data[i]["Short Bio"]+"</p>"+
"<p class=\"uppercase\">"+data[i]["Personal Quip: OPTIONAL"]+"</p>"+
"<br><p class=\"description\">"+data[i]["Quip answer"]+"</p>"+
"</div>"+
"<div class=\"project\">";
	


	

	if (data[i]["Caption #1: OPTIONAL"] != "") {
		projFull += "<img class=\"img1\" src=\"images/"+imagenames+"_1.jpg\">"+
		"<h6 class=\"caption\">"+data[i]["Caption #1: OPTIONAL"]+"</h6>"
	}


	if (data[i]["Caption #2: OPTIONAL"] != "") {
		projFull += "<img class=\"img2\" src=\"images/"+imagenames+"_2.jpg\">"+
		"<h6 class=\"caption\">"+data[i]["Caption #2: OPTIONAL"]+"</h6>"
	}

	if (data[i]["Caption #3: OPTIONAL"] != "") {
		projFull += "<img class=\"img3\" src=\"images/"+imagenames+"_3.jpg\">"+
		"<h6 class=\"caption\">"+data[i]["Caption #3: OPTIONAL"]+"</h6>"
	}

	if (data[i]["Caption #4: OPTIONAL"] != "") {
		projFull += "<img class=\"img4\" src=\"images/"+imagenames+"_4.jpg\">"+
		"<h6 class=\"caption\">"+data[i]["Caption #4: OPTIONAL"]+"</h6>"
	}

	if (data[i]["Caption #5: OPTIONAL"] != "") {
		projFull += "<img class=\"img5\" src=\"images/"+imagenames+"_5.jpg\">"+
		"<h6 class=\"caption\">"+data[i]["Caption #5: OPTIONAL"]+"</h6>"
	}



	//determine if youtube or vimeo and post accordingly
	if (data[i]["Video Link: OPTIONAL"] != undefined) {

		//if VIMEO
		if (data[i]["Video Link: OPTIONAL"].includes("vimeo")) {
			var l = data[i]["Video Link: OPTIONAL"].split(".com/")[1];		
			projFull += "<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://player.vimeo.com/video/"+l+"' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>"
		//IF YOUTUBE 
		} else {
			var l = data[i]["Video Link: OPTIONAL"].split(".com/")[1];		
			projFull += "<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/"+l+"' frameborder='0' allowfullscreen></iframe></div>"
		}
		projFull+="<h6 class=\"caption\">"+data[i]["Video Caption: OPTIONAL"]+"</h6>"
		
	}

	projFull += "</div></div>"



		projects.push(projFull);
	  			
	  	}

	 // shuffle(projectTeasers)




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


		$(".projects-container").prepend("<div class='filter-by-tag'><h6 class='filter invert-tag'>Filter</h6></div>")

		var uniqueTags = [];
		$.each(allTags, function(i, el){
		    if($.inArray(el, uniqueTags) === -1) uniqueTags.push(el);
		});
		uniqueTags.sort();
		for (t=0;t<uniqueTags.length;t++) {
			$(".filter-by-tag").append("<h6 class='tag t_"+uniqueTags[t].toLowerCase().replace(" ","")+"'>"+uniqueTags[t]+"</h6>")
		}

		setTimeout(function(){

	  		$(".projects-container").fadeIn(200);
	  	},500)
	  });



//tag filtering on the homepage

 	$(document).on("click",".filter-by-tag .tag",function(){
 		$(".tag").removeClass("active");
 		$(this).addClass("active");
 		cT = "t_"+$(this).text().toLowerCase().replace(" ",""); 
		$("."+cT).fadeIn(200)
		$(".thumbnail:not(."+cT+")").fadeOut(200)
		history.pushState({
		    id: $(this).data("url")
		}, $(this).data("url"), "/?tag="+cT);
 	})


//tag filtering on the homepage
 	$(document).on("click",".filter",function(){
 		$(".tag").removeClass("active")
		$(".thumbnail").fadeIn(200)
		history.pushState({
		    id: $(this).data("url")
		}, $(this).data("url"), "/");
 	})

//tag filtering from a project page
 	$(document).on("click",".sidebar .tag",function(){
 		//$(".tag").removeClass("active");
 		//$(this).addClass("active");
 		cT = "t_"+$(this).text().toLowerCase().replace(" ",""); 
		//$("."+cT).fadeIn(200)
		//$(".thumbnail:not(."+cT+")").fadeOut(200)
		window.location.href= "/?tag="+cT;
	});


	  $(document).on("click",".project-link",function(e){
	  	e.preventDefault();

	  	history.pushState({
		    id: $(this).data("url")
		}, $(this).data("url"), "?id="+$(this).data("project-id"));

	  	$(".projects-container").fadeOut(200);


	  	$(".student-container").html(projects[$(this).data("project-id")])



	  	setTimeout(function(){
	  		$(".student-container").fadeIn(200);
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

	  	$(".projects-container").fadeOut(200);


	  	$(".student-container").html(projects[$(this).data("project-id")])



	  	setTimeout(function(){
	  		$(".student-container").fadeIn(200);
	  	},200)
	  })