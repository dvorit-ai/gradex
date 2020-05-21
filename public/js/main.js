 	// 	var draw = SVG().addTo('#backgroundX').size($(window).width(), $(window).height())

 	// 	var line1 = draw.line($(window).width(), 0, 0, $(window).height()).stroke({ width: 1, color:"#0F0" })

		// var line2 = draw.line(0, 0, $(window).width(), $(window).height()).stroke({ width: 1, color:"#0F0" })
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


	fetch('data/responses.json')
	  .then(response => response.json())
	  .then(data => {
	  	


	  	shuffle(data)


	  	for (i=0; i<data.length;i++) {
	  	console.log(data[i]["Thumbnail Image"])	

	  	var tags="<h6 class='tag'>"+data[i]["Project Tags"].replace(/;/g,"</h6><br /><h6 class='tag'>")+"</h6>";

	  	var thumb = data[i]["First & Last Name"].toLowerCase().replace(" ","_")+"_thumbnail.jpg"

		var proj = 	"<div class=\"thumbnail\">"+
					"<a class=\"project-link\" href=\"\">"+
					"<img src=\"images/"+thumb+"\" alt=\"\"/>"+
					"<div class=\"img-tags\">"+
					"<h5>"+data[i]["First & Last Name"]+"</h5>"+
					"<h3>"+data[i]["Project Title"]+"</h3>"+
					"<h6>"+tags+"</h6>"+
					"</div>"+
					"</a>"+
					"</div>";

		$(".projects")
			.append(proj)

	  			
	  	}
	  });

	  $(document).on("click",".project-link",function(e){
	  	e.preventDefault();
	  	alert("f")
	  })