 	// 	var draw = SVG().addTo('#backgroundX').size($(window).width(), $(window).height())

 	// 	var line1 = draw.line($(window).width(), 0, 0, $(window).height()).stroke({ width: 1, color:"#0F0" })

		// var line2 = draw.line(0, 0, $(window).width(), $(window).height()).stroke({ width: 1, color:"#0F0" })

		var projectTeasers = [];
		var projects = [];



function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


	fetch('data/responses.json')
	  .then(response => response.json())
	  .then(data => {
	  	





	  	for (i=0; i<data.length;i++) {
	  	//console.log(data[i]["Thumbnail Image"])	

	  	var tags="<h6 class='tag'>"+data[i]["Project Tags"].replace(/;/g,"</h6><br /><h6 class='tag'>")+"</h6>";


	  	var imagenames = data[i]["First & Last Name"].toLowerCase().replace(" ","_")
	  	var thumb = imagenames+"_thumbnail.jpg"
	  	var portrait = imagenames+"_portrait.jpg"



		var projTeaser = 	"<div id='project-"+i+"' class=\"thumbnail\">"+
					"<a data-project-id='"+i+"' id='project-link-"+i+"' class=\"project-link\" data-url="+data[i]["First & Last Name"].toLowerCase().replace(" ","_")+">"+
					"<img src=\"images/"+thumb+"\" alt=\"\"/>"+
					"<div class=\"img-tags\">"+
					"<h5>"+data[i]["First & Last Name"]+"</h5>"+
					"<h3>"+data[i]["Project Title"]+"</h3>"+
					tags+
					"</div>"+
					"</a>"+
					"</div>";

					//console.log(data[i]);

					projectTeasers.push(projTeaser);
			
//				console.log(data[i])

		var projFull = "<div class=\"students-container\">"+
"<div class=\"sidebar\">"+
"<p class='uppercase'>"+data[i]["First & Last Name"]+"</p>"+
"<h3>"+data[i]["Project Title"]+"</h3>"+
"<p class=\"description\">"+data[i]["Project Description"]+"</p>"+
"<p class=\"uppercase description\">"+tags+"</p>"+
"<img src=\"images/"+portrait+"\">"+

"<p class=\"uppercase\">"+"About the designer"+"</p>"+
"<p class=\"description\">"+data[i]["Short Bio"]+"</p>"+
"<p class=\"uppercase\">"+data[i]["Personal Quip"]+"</p>"+
"<p class=\"description\">"+data[i]["Quip answer"]+"</p>"+
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

	projFull += "</div></div>"



		projects.push(projFull);
	  			
	  	}


		//shuffle(projectTeasers)





	  	for (j=0;j<projectTeasers.length;j++) {
			$(".projects-container").append(projectTeasers[j])

			if (j==5) { $(".projects-container").append("<div class=\"thumbnail type\"><h1>r e c<br>e s s<br>i o n</h1></div>"); }
			if (j==20) { $(".projects-container").append("<div class=\"thumbnail type\"><h1>g r a<br />d s</h1></div>"); }
			if (j==23) { $(".projects-container").append("<div class=\"thumbnail type\"><h1>2 0<br />2 0</h1></div>"); }
		}


		setTimeout(function(){
	  		$(".projects-container").fadeIn(200);
	  	},500)
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
	  		var getz = window.location.href.split("?")[1].split("=");
	  		
	  		if (getz[0] == "id") {
		//alert(getz[1])
	  			$("#project-link-"+getz[1]).click();
	  		}
	  	},1000)

	  	$(".projects-container").fadeOut(200);


	  	$(".student-container").html(projects[$(this).data("project-id")])



	  	setTimeout(function(){
	  		$(".student-container").fadeIn(200);
	  	},200)
	  })