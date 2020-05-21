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
	  	


//	  	shuffle(data)




	  	for (i=0; i<data.length;i++) {
	  	console.log(data[i]["Thumbnail Image"])	

	  	var tags="<h6 class='tag'>"+data[i]["Project Tags"].replace(/;/g,"</h6><br /><h6 class='tag'>")+"</h6>";


	  	var imagenames = data[i]["First & Last Name"].toLowerCase().replace(" ","_")
	  	var thumb = imagenames+"_thumbnail.jpg"
	  	var portrait = imagenames+"_portrait.jpg"



		var projTeaser = 	"<div id='project-"+i+"' class=\"thumbnail\">"+
					"<a data-project-id='"+i+"' class=\"project-link\" >"+
					"<img src=\"images/"+thumb+"\" alt=\"\"/>"+
					"<div class=\"img-tags\">"+
					"<h5>"+data[i]["First & Last Name"]+"</h5>"+
					"<h3>"+data[i]["Project Title"]+"</h3>"+
					"<h6>"+tags+"</h6>"+
					"</div>"+
					"</a>"+
					"</div>";

					//console.log(data[i]);

					projectTeasers.push(projTeaser);
			
				console.log(data[i])

		var projFull = "<div class=\"students-container\">"+
"<div class=\"sidebar\">"+
"<h5>"+data[i]["First & Last Name"]+"</h5>"+
"<h3>"+data[i]["Project Title"]+"</h3>"+
"<h6 class=\"description\">"+data[i]["Project Description"]+"<h6>"+
"<h6 class=\"uppercase description\">"+tags+"</h6>"+
"<img src=\"images/"+portrait+"\">"+

"<h6 class=\"uppercase\">"+"About the designer"+"</h6>"+
"<h6 class=\"description\">"+data[i]["Short Bio"]+"</h6>"+
"<h6 class=\"uppercase\">"+data[i]["Personal Quip"]+"</h6>"+
"<h6 class=\"description\">"+data[i]["Quip answer"]+"</h6>"+
"</div>"+
"<div class=\"project\">"+
	
"<img class=\"img1\" src=\"images/"+imagenames+"_1.jpg\">"+

"<h6 class=\"caption\">"+data[i]["Caption #1: OPTIONAL"]+"</h6>"+
"<div class=\"\">"+
"<img class=\"img2\" src=\"images/"+imagenames+"_2.jpg\">"+"</div>"+
"<h6 class=\"caption\">"+data[i]["Caption #2: OPTIONAL"]+"</h6>"+

"<div class=\"longimage\">"+
"<img class=\"img3\" src=\"images/"+imagenames+"_3.jpg\">"+
"</div>"+
"<h6 class=\"caption\">"+data[i]["Caption #3: OPTIONAL"]+"</h6>"+
"<div class=\"\">"+
"<img class=\"img4\" src=\"images/"+imagenames+"_4.jpg\">"+
"</div>"+
"<h6 class=\"caption\">"+data[i]["Caption #4: OPTIONAL"]+"</h6>"+
"<div class=\"longimage\">"+
"<img class=\"img5\" src=\"images/"+imagenames+"_5.jpg\">"+
"</div>"+
"<h6 class=\"caption\">"+data[i]["Caption #5: OPTIONAL"]+"</h6>"+
"</div>"+
"</div>"



		projects.push(projFull);
	  			
	  	}


		shuffle(projectTeasers)

	  	for (j=0;j<projectTeasers.length;j++) {
			$(".projects-container").append(projectTeasers[j])
		}


		setTimeout(function(){
	  		$(".projects-container").fadeIn(200);
	  	},500)
	  });

	  $(document).on("click",".project-link",function(e){
	  	e.preventDefault();

	  	$(".projects-container").fadeOut(200);


	  	$(".student-container").html(projects[$(this).data("project-id")])

	  	setTimeout(function(){
	  		$(".student-container").fadeIn(200);
	  	},200)

	  	
	  })