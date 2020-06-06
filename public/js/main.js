// $('#nav').marquee({
//     //speed in milliseconds of the marquee
//     duration: 30000,
//     //gap in pixels between the tickers
//     gap: 30,
//     //time in milliseconds before the marquee will start animating
//     delayBeforeStart: 0,
//     //'left' or 'right'
//     direction: 'left',
//     //true or false - should the marquee be duplicated to show an effect of continues flow
//     duplicated: true,
//     startVisible:true,
//     pauseOnHover:true

// });


 	// 	var draw = SVG().addTo('#backgroundX').size($(window).width(), $(window).height())

 	// 	var line1 = draw.line($(window).width(), 0, 0, $(window).height()).stroke({ width: 1, color:"#0F0" })

		// var line2 = draw.line(0, 0, $(window).width(), $(window).height()).stroke({ width: 1, color:"#0F0" })

		const speed = 300 			//this is the speed of animations in milliseconds
		var allData = [];					//this array will hold all the data.
		var projectTeasers = []; 	//this array will hold all the HTML for the Thubnails on the front page
		var projects = [];			//this array will hold all the HTML for the full projects.
		var studentList = [];		//this array will list all the student names and projects
		var allTags = [];			//this array will hold all the unique tags

 

// window.addEventListener("hashchange", hashHandler, false);


// function hashHandler() {
//   console.log('The hash has changed!');
// }


// window.location.hash="ffff"

//this is function to randomize any array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function urlify(inputText) {
    var replacedText, replacePattern1, replacePattern2, replacePattern3;

    //URLs starting with http://, https://, or ftp://
    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

    //Change email addresses to mailto:: links.
    replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
    replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

    return replacedText;

    //return(inputText)
}



//this is for making filenames and classnames mn = machine name
function mn(string) {
	return string
			.toLowerCase()
			.replace(" ","")
			.replace("/","")
}


//this is for making adding HTML ([[ to < ]] to  >)
function htmlize(string) {
	return string
			// .replace("[[","<")
			// .replace("]]",">")
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




		var tags  = 
		name = 
		title  = 
		shorttitle = 
		profs = 
		description = 
		bio = 
		quipq = 
		quipa = 
		image1 = 
		image2 = 
		image3 = 
		image4 = 
		image5 = 
		caption1 = 
		caption2 = 
		caption3 = 
		caption4 = 
		caption5 = 
		video = 
		insta = 
		linkedin = 
		email = 
		portfolio = 
		behance = 
		portrait = "";

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
		
		
		//turn each variable into a snippet of HTML code that makes a font awesome chicklet
		//then go down to the fullProject function and add each variable (if it's empty it'll just dump in empty code)
		//in css try using this class selector: ".social links i {DO SOMETHIGN HERE}"
		
		if (allData[i]["gsx$shorttitle"]["$t"] != "") {
			shorttitle = allData[i]["gsx$shorttitle"]["$t"]
		} else {
			shorttitle = title;
		}


		if (allData[i]["gsx$insta"]["$t"] != "") {
			insta = "<a href='"+allData[i]["gsx$insta"]["$t"]+"' target='_blank'><i class='fab fa-instagram-square'></i></a>"
		}

		if (allData[i]["gsx$linkedin"]["$t"] != "") {
			linkedin = "<a href='"+allData[i]["gsx$linkedin"]["$t"]+"' target='_blank'><i class='fab fa-linkedin'></i></a>"
		}

		if (allData[i]["gsx$portfolio"]["$t"] != "") {
			portfolio = "<a href='"+allData[i]["gsx$portfolio"]["$t"]+"' target='_blank'><i class='fas fa-link'></i></a>"
		}



		if (allData[i]["gsx$behance"]["$t"] != "") {
			
			behance = "<a href='"+allData[i]["gsx$behance"]["$t"]+"' target='_blank'><i class='fab fa-behance-square'></i></a>"
		}

		if (allData[i]["gsx$email"]["$t"] != "") {
			email = "<a href='mailto:"+allData[i]["gsx$email"]["$t"]+"' target='_blank'><i class='fas fa-envelope-square'></i></a>"
		}
		



		// linkedin = allData[i]["gsx$linkedin"] != undefined ? allData[i]["gsx$linkedin"]["$t"]:"";
		
		// email = allData[i]["gsx$email"] != undefined ? allData[i]["gsx$email"]["$t"]:"";
		
		// portfolio = allData[i]["gsx$portfolio"] != undefined ? allData[i]["gsx$portfolio"]["$t"]:"";
		
		// behance = allData[i]["gsx$behance"] != undefined ? allData[i]["gsx$behance"]["$t"]:"";
		




		const thumbnail	=	allData[i]["gsx$thumbnail"]["$t"];

		
	  	var tagButtons = "";
	  	var tagClasses= ""
	  	
	  			for (t=0;t<tags.length;t++) {
	  				tagClasses += "t_"+mn(tags[t])+" ";
	  				tagButtons += "<h6 class='tag'>"+tags[t]+"</h6>";
	  				allTags.push(tags[t]);
	  				
	  			}

		


	  	student = $("<tr data-href='/?id="+i+"' class='student-row'  data-name='"+name+"' data-title='"+title+"' data-class='"+profs+"' data-img='"+thumbnail+"'><td class='name'><a href='/?id="+i+"'>"+name+"</a></td><td class='title'><a href='/?id="+i+"'>"+title+"</a></td><td class='profs'><a href='/?id="+i+"'>"+profs+"</a></td></tr>");
	  	studentList.push(student);




		var projTeaser = 	"<div id='project-"+i+"' class=\"thumbnail "+tagClasses+"\"+>"+
					"<a data-project-id='"+i+"' id='project-link-"+i+"' class=\"project-link\" data-url="+mn(name)+">"+
					"<img src=\"images/thumbnails/"+thumbnail+"\" alt=\"\"/>"+
					"<div class=\"img-tags\">"+
					"<p class='uppercase'>"+name+"</p>"+
					"<h3>"+shorttitle+"</h3>"+
					tagButtons+
					"</div>"+
					"</a>"+
					"</div>";

					//console.log(allData[i]);

					projectTeasers.push(projTeaser);
			
		var projFull = "<div class='students-container'>"+
"<div class='sidebar'>"+
"<p class='uppercase'>"+name+"</p>"+
"<h3>"+title+"</h3>"+
"<p class='description'>"+description+"</p>"+
"<p class='uppercase description'>"+tagButtons+"</p>"+
"<hr />";
portrait != "" ? projFull+="<img src='images/"+portrait+"'>": null

projFull+= 
"<div class='social-links'>"+
insta+linkedin+portfolio+behance+email+
"</div>"+
"<p class='uppercase'>"+"About the designer"+"</p>"+
"<p class='description'>"+htmlize(bio)+"</p>"+
"<p class='uppercase'>"+quipq+"</p>"+
"<p class='description'>"+quipa+"</p>"+
"</div>"+
"<div class='project'>";
	




	if (image1 != "") {
		projFull += "<div class='img1'>"+
					"<img src='images/"+image1+"'>";
						if (caption1 != "") projFull += "<h6 class='caption'>"+htmlize(caption1)+"</h6>"		
		projFull += "</div>";
	}



	if (image2 != "") {
		projFull += "<div class='img2'>"+
					"<img src='images/"+image2+"'>";
						if (caption2 != "") projFull += "<h6 class='caption'>"+htmlize(caption2)+"</h6>"		
		projFull += "</div>";
	}


	if (image3 != "") {
		projFull += "<div class='img3'>"+
					"<img src='images/"+image3+"'>";
						if (caption3 != "") projFull += "<h6 class='caption'>"+htmlize(caption3)+"</h6>"		
		projFull += "</div>";
	}

	if (image4 != "") {
		projFull += "<div class='img4'>"+
					"<img src='images/"+image4+"'>";
						if (caption4 != "") projFull += "<h6 class='caption'>"+htmlize(caption4)+"</h6>"		
		projFull += "</div>";
	}

	if (image5 != "") {
		projFull += "<div class='img5'>"+
					"<img src='images/"+image5+"'>";
						if (caption5 != "") projFull += "<h6 class='caption'>"+htmlize(caption5)+"</h6>"		
		projFull += "</div>";
	}	

 
	//determine if youtube or vimeo and post accordingly
	if (video != "") {

		//if VIMEO
		if (video.includes("vimeo")) {
			var l = video.split(".com/")[1];		
			projFull += "<style>.embed-container { margin-top: 35pt; margin-bottom: 10pt; position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://player.vimeo.com/video/"+l+"' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>"
		//IF YOUTUBE 
		} else {
			var l = video.split(".be/")[1];		
			projFull += "<style>.embed-container { margin-top: 35pt; margin-bottom: 10pt; position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/"+l+"' frameborder='0' allowfullscreen></iframe></div>"
		}
		projFull+="<h6 class=\"caption\">"+videocaption+"</h6>"
		
	}

	projFull += "</div></div>"



		projects.push(projFull);
	  			
	  	}

	 shuffle(projectTeasers)



	for (k=0;k<studentList.length;k++) {
			$("#student-list table").append(studentList[k])


		}


function sortTable(via){
  var rows = $('#student-list table tr').get();

  rows.sort(function(a, b) {

  var A = $(a).children('td.'+via).eq(0).text();
  var B = $(b).children('td.'+via).eq(0).text();



  if(A < B) {
    return -1;
  }

  if(A > B) {
    return 1;
  }

  return 0;

  });
  $.each(rows, function(index, row) {
    $('#student-list table').append(row);
  });
}


$(document).on("click",".close-button",function(){
	$(".blm").slideUp(speed)
})

$(document).on("click",".student-top",function(){
	sortTable($(this).data("via"));
})

$(document).on("mouseout",".student-row",function(e){
	
	$(".row-thumb").remove()
})



$(document).on("mouseover",".student-row",function(e){
	
	var fixedTop = $(this).offset().top-$(document).scrollTop();
	var reverse = false;
	if (fixedTop > $(window).height()-400) {
		reverse = true
		console.log(reverse)
	}


	var fromTop;
	fromTop = $(this).offset().top+$(this).height()+1;

	fromLeft = function() {
		l = e.clientX;

		if (e.clientX > $(window).width()-300) l = $(window).width()-300

		return l
	}


	$("<img class='row-thumb'>")							//create image elemtent
			.attr('src','/images/thumbnails/'+$(this).data("img"))		//add the image to it
			.addClass(function(){
				return reverse ? "reverse" : ""				
			})
			.appendTo("body")
			.css({
				left:fromLeft,
				top:function(){

				return fromTop;
				}
			})
})



		

	// this is where we load all projects... 
$(".projects-container").append("<div class='projects-container-interior'></div>");

	  	for (j=0;j<projectTeasers.length;j++) {
			$(".projects-container-interior").append(projectTeasers[j])

			if (j==0) { $(".projects-container-interior").append("<div class=\"thumbnail type\"><h1>r e c<br>e s s<br>i o n</h1></div>"); }
			
			if (j==41) { $(".projects-container-interior").append("<div class=\"thumbnail type\"><p class='home'>Recession Grads is a digital archive & exhibition set to showcase the work of the Graphic Design 2020 graduating class at OCADU.</p></div>"); }
			if (j==25) { $(".projects-container-interior").append("<div class=\"thumbnail type\"><p class='home'>The work featured on this site has been produced over an 8 month period of research, iteration, and craft. </p></div>"); }
			if (j==46) { $(".projects-container-interior").append("<div class=\"thumbnail type\"><p class='home'>Supported by faculty and their classes, students produced work that pertained to their design practice and topics they were passionate about such as equity, sustainability, social justice, and more.</p></div>"); }
			if (j==9) { $(".projects-container-interior").append("<div class=\"thumbnail type\"><p class='home'>Despite COVID-19 halting our work and cancelling our graduate show and exhibition GradEx105, students still worked to complete their projects for themselves, their professors, and this website.</p></div>"); }
			if (j==75) { $(".projects-container-interior").append("<div class=\"thumbnail type\"><p class='home'>Recession Grads exists to acknowledge the situation of what it is like for us to graduate into a recession, and a period of time where everything is a missing glyph of uncertainty and at an indefinite pause. This site serves to showcase our work despite the circumstances and to start new traditions of archiving future graduates' work.</p></div>"); }
			
			if (j==22) { $(".projects-container-interior").append("<div class=\"thumbnail type\"><h1>g r a<br />d s</h1></div>"); }
			if (j==43) { $(".projects-container-interior").append("<div class=\"thumbnail type\"><h1 class='larger'>2 0<br>2 0</h1></div>"); }
			
			// random project click?? 
			// if (j==79) { $(".projects-container").append("<div class=\"thumbnail type\"><h1 class='home'>Click here for a random project</h1></div>"); }
		}


		$(".projects-container").prepend("<div class='filter-by-tag'><h6 class='tag see-all'>all work</h6></div>")

		var uniqueTags = [];
		$.each(allTags, function(i, el){
		    if($.inArray(el, uniqueTags) === -1) uniqueTags.push(el);
		});
		uniqueTags.sort();
		for (t=0;t<uniqueTags.length;t++) {
			$(".filter-by-tag").append("<h6 class='tag t_"+mn(uniqueTags[t])+"'>"+uniqueTags[t]+"</h6>")
		}

		setTimeout(function(){

	  		$(".projects-container").fadeIn(speed);;
	  	},1500)
	  });






//tag filtering on the homepage


$(document).on("click",".filter",function(e){
	
	e.preventDefault();
	$(".filter-by-tag").toggleClass("active")
	$(document).scrollTop(0)

	if (window.location.href.includes("id=")) {
		window.location.href="/?tag=see_all"
	}
})

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
 		cT = "t_"+mn($(this).text());
		$("."+cT).slideDown(speed);
		$(".thumbnail:not(."+cT+")").slideUp(speed);
		history.pushState({
		    id: $(this).data("url")
		}, $(this).data("url"), "/?tag="+cT);

 		}
 		
 		$(this).hasClass("see-all") ? $(".thumbnail").slideDown(speed) : null
 		
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
 		cT = "t_"+mn($(this).text())
		//$("."+cT).slideDown(speed);
		//$(".thumbnail:not(."+cT+")").slideUp(speed);
		window.location.href= "/?tag="+cT;
	});

$(window).on('popstate', function(event) {
 console.log(window.location.href)

 if ((!window.location.href.includes("id=")) ||
 	(!window.location.href.includes("student-list")) ||
 	(!window.location.href.includes("about"))) {
 		location.reload();
 }

});


 	$(document).on("click",".student-row",function(e){
 		  window.location = $(this).data("href");
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
	  		$("img").each(function(){
	  			if ($(this).height() > $(this).width()) {
	  				$(this).addClass("longimage")
	  			}
	  		})
	  	},500)

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
	  					rrr = ".filter-by-tag ."+mn(getz[1]);
	  					$(".filter-by-tag").addClass("active")
	  					$(rrr).click();
	  				}
	  			}
	  			
	  		

	  	},1500)

	  	$(".projects-container").slideUp(speed);;


	  	$(".student-container").html(projects[$(this).data("project-id")])


	  	$(document).scroll(function(){
	  		$("x").css({
	  			"font-family":"notdef"
	  		})
	  	})

	  	// Setup isScrolling variable
var isScrolling;

// Listen for scroll events
window.addEventListener('scroll', function ( event ) {

	// Clear our timeout throughout the scroll
	window.clearTimeout( isScrolling );

	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {

		$("x").css({
	  			"font-family":"Work Sans"
	  		})

	}, 66);

}, false);



	  	setTimeout(function(){
	  		$(".student-container").slideDown(speed);;
	  	},200)
	  })