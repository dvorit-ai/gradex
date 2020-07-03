

$(document).keypress(function(e){
	
	 if (e.charCode == 99) { //hit "c"
	 	chaos();
	 }
})

if (window.location.href.includes("about")) {
	addVirus();	
}





		const aSpeed = 300 			//this is the speed of animations in milliseconds
		var allData = [];					//this array will hold all the data.
		var projectTeasers = []; 	//this array will hold all the HTML for the Thubnails on the front page
		var projects = [];			//this array will hold all the HTML for the full projects.
		var studentList = [];		//this array will list all the student names and projects
		var allTags = [];			//this array will hold all the unique tags

 




fetch('/projects.json')
	.then(response => response.json())
	.then(data => {
		for (i=0;i<data.length;i++) {
			projects.push(data[i])
		}

})


fetch('/projectTeasers.json')
	.then(response => response.json())
	.then(data => {
		projectTeasers = [...data]

})

  	


//THIS IS FOR CLICKING ON THE MAIN PAGE
$(document).on("click",".one",function(e){

		e.preventDefault();
		unload();
		
		removeVirus();
		shuffle(projectTeasers);

		setTimeout(function(){
			projectTeasers.splice(1,0,"<div class='thumbnail type'><h1>r e c<br>e s s<br>i o n</h1></div>");
			projectTeasers.splice(10,0,"<div class='thumbnail type'><p class='home'>Despite COVID-19 halting our work and cancelling our graduate show and exhibition GradEx105, students still worked to complete their projects for themselves, their professors, and this website.</p></div>"); 
			projectTeasers.splice(26,0,"<div class='thumbnail type'><p class='home'>The work featured on this site has been produced over an 8 month period of research, iteration, and craft. </p></div>"); 
			projectTeasers.splice(26,0,"<div class='thumbnail type'><h1>g r a<br />d s</h1></div>"); 
			projectTeasers.splice(42,0,"<div class='thumbnail type'><p class='home'>Recession Grads is a digital archive & exhibition set to showcase the work of the Graphic Design 2020 graduating class at OCADU.</p></div>"); 			
			projectTeasers.splice(47,0,"<div class='thumbnail type'><p class='home'>Supported by faculty and their classes, students produced work that pertained to their design practice and topics they were passionate about such as equity, sustainability, social justice, and more.</p></div>"); 
			projectTeasers.splice(47,0,"<div class='thumbnail type'><h1 class='larger'>2 0<br>2 0</h1></div>"); 
			projectTeasers.splice(76,0,"<div class='thumbnail type'><p class='home'>Recession Grads exists to acknowledge the situation of what it is like for us to graduate into a recession, and a period of time where everything is a missing glyph of uncertainty and at an indefinite pause. This site serves to showcase our work despite the circumstances and to start new traditions of archiving future graduates' work.</p></div>"); 
			$("#container").append("<div class='projects-container'><div class='projects-container-interior'>"+projectTeasers.join('')+"</div></div>");
		
				$(".projects-container").prepend("<div class='filter-by-tag'><h6 class='tag see-all'>all work</h6></div>")

		
	

		fetch('/tags.json')
	.then(response => response.json())
	.then(data => {
		for (i=0;i<data.length;i++) {
			//console.log(data[i])
			$(".filter-by-tag").append(data[i])
		}

})


		}, aSpeed+200);
	  	history.pushState({ id: "students" }, $(this).data("url"), "/");

})


//THIS IS FOR CLICKING ON THE STUDENT PAGE
$(document).on("click",".four",function(e){
		e.preventDefault();
		unload()
	removeVirus();
		fetch('/students.json')
		  	.then(respond => respond.json())
		  	.then(data=>{
	  			setTimeout(function(){
	  				$("#container").append("<div class='table-list' id='student-list'><table><tr class='uppercase'><th class='student-top cell-one' data-via='name'>Name</th><th class='student-top cell-two' data-via='title'>Project</th><th class='student-top cell-three' data-via='profs'>Professor(s)</th></tr>"+data.join('')+"</table></div>")
	  			},aSpeed+200)
	  		})

	  	history.pushState({ id: "students" }, $(this).data("url"), "/students");

})


//THIS IS FOR CLICKING ON THE ABOUT PAGE
$(document).on("click",".three",function(e){
		e.preventDefault();
		unload();

	  	fetch('/about.html')
	  	  	.then(respond => respond.text())
	  		.then(data=>{  
				setTimeout(function(){ 
					$("#container").append(data) 

					addVirus()
				},aSpeed+200);
    		})
	  	
	  	history.pushState({id: "about" }, $(this).data("url"), "/about");

})





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
	$(".blm").slideUp(aSpeed)
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
		//console.log(reverse)
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



		



		$(".projects-container").prepend("<div class='filter-by-tag'><h6 class='tag see-all'>all work</h6></div>")

		
	

		fetch('/tags.json')
	.then(response => response.json())
	.then(data => {
		for (i=0;i<data.length;i++) {
			//console.log(data[i])
			$(".filter-by-tag").append(data[i])
		}

})

		setTimeout(function(){

	  		$(".projects-container").fadeIn(aSpeed);;
	  	},200)





//tag filtering on the homepage


$(document).on("click",".filter",function(e){
		

	e.preventDefault();
	$(".filter-by-tag").toggleClass("active")
	$(document).scrollTop(0)

	if ((window.location.href.includes("about")) ||
		(window.location.href.includes("student")))	{
	
		$(".one").click();

		setTimeout(function(){
			$(".filter-by-tag").addClass("active")
		},500)
	}
})

 	$(document).on("click",".filter-by-tag .tag",function(){
 		
 		if ($(this).hasClass("active")) {
 			$(".tag").removeClass("active");
 			$(".thumbnail").slideDown(aSpeed);
			history.pushState({
				    id: $(this).data("url")
				}, $(this).data("url"), "/");
 		} else {
 			$(".tag").removeClass("active");
 			$(this).addClass("active");
 		cT = $(this).data("tag");
		$("."+cT).slideDown(aSpeed);
		$(".thumbnail:not(."+cT+")").slideUp(aSpeed);
		history.pushState({
		    id: $(this).data("url")
		}, $(this).data("url"), "/tag/"+cT);

 		}
 		
 		$(this).hasClass("see-all") ? $(".thumbnail").slideDown(aSpeed) : null
 		
 	})


//tag filtering on the homepage
 	$(document).on("click",".filter",function(){
 		$(".tag").removeClass("active")
		$(".thumbnail").slideDown(aSpeed);
		history.pushState({
		    id: $(this).data("url")
		}, $(this).data("url"), "/");
 	})

//tag filtering from a project page
 	$(document).on("click",".sidebar .tag",function(){ 		
		window.location.href= "/tag/"+$(this).data("tag")
	});

$(window).on('popstate', function(event) {
 console.log(window.location.href)

 if ((!window.location.href.includes("id=")) ||
 	(!window.location.href.includes("student-list")) ||
 	(!window.location.href.includes("about"))) {
 		location.reload();
 }

});



	  $(document).on("click",".student-row, .project-link",function(e){
	  	e.preventDefault();		
	  	
loadProject($(this).data("project-id"))
	  	

	  	
	  })


	  $(document).ready(function(){


	  		setTimeout(function(){

	  			var u = window.location.href.split("/");
	  			
				
	  				 if (u[3] == "tag") {			  					
	  					$(".filter-by-tag").addClass("active")
	  					$(".filter-by-tag ."+u[4]).click();
	  				
	  				}
	  			
	  		

	  	},500)

	  	$(".projects-container").slideUp(aSpeed);;


	  	//$(".student-container").html(projects[$(this).data("project-id")])


	  	$(document).scroll(function(){
	  		$("x").css({
	  			"font-family":"notdef",
	  			"font-size":"1.3em",
	  			"position":"relative",
	  			"top":"2px"
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

		$("x").attr("style","")

	}, 66);

}, false);



	  	setTimeout(function(){
	  		$(".student-container").slideDown(aSpeed);;
	  	},200)
	  })


	  //this function loads a project:
	  function loadProject(pID){

	  	unload();
	 history.pushState({
		     id: $(this).data("url")
	 }, $(this).data("url"), "/student/"+pID);


	 setTimeout(function(){
	  	$("<div class='student-container'></div>")
	  		.html(projects[pID])
	  		.appendTo("#container")
	  	},aSpeed+200)


	  	setTimeout(function(){
	  		$("img").each(function(){
	  			if ($(this).height() > $(this).width()) {
	  				$(this).addClass("longimage")
	  			}
	  		})
	  	},500)

	  	setTimeout(function(){
	  		$(document).scrollTop(0)
	  		$(".student-container").slideDown(aSpeed);;
	  	},200)
	  }


//this is a function to randomize any array (with added function to foreground some designers)
function shuffle(array) {
	let index1;
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

    for (let i = array.length - 1; i > 0; i--) {
    if (array[i].includes("project-74")) {
    	index1 = i    	
    }

  }
  t = array[index1];
   array.splice(index1, 1);   
   array.unshift(t);
}




	  //this function unloads all existing content
	  function unload() {
	  		  	$(".projects-container, .students-container, .student-container, .about-container, .table-list").slideUp(aSpeed);
	  	setTimeout(function(){
	  		$(".projects-container, .students-container, .student-container, .table-list").remove();
	  	},aSpeed+100	)
	  }


	  function addVirus() {

//start of virus 

i = 0;
while (i < 3) {
	$("<img>")									//create empty imag element
		.addClass("virus")						//add a class to this element
		.attr("src","../logos/corona-virus.svg")	//add the attribute SRC to the element
		.appendTo (".holder")					//add the element to the div .holder

	i++; //this is the short form of just saing "i = i + 1"
}

//pulled from https://codepen.io/stezu/pen/cmLrI 

$(".virus").each(function(){
	randomTop = Math.floor(Math.random()*$(window).height())
	randomLeft = Math.floor(Math.random()*$(window).width())
	randomSpeed = Math.floor(Math.random()*300)+50 //before it was *600 + 200
	randomWidth = Math.floor(Math.random()*80)+50

	$(this)
		.css({
			"top":randomTop,
			"left":randomLeft,
			"width":randomWidth,
			"height":randomWidth,
		})
		.marqueeify({
			"speed":randomSpeed
		});

})

//end of virus 
	  }

	  function removeVirus() {
	  	$(".holder").remove();
	  }


	  function chaos() {


	  		$(".projects-container-interior").css({"position":"static"})
	  		$(".thumbnail").each(function(){
	  			e = this
	  			let rect = e.getBoundingClientRect();
	  			fT = rect.top;
	  			fL = rect.left;
	  			w = $(this).width();
	  			$(this).css({
	  				//"position":"absolute",
	  				"width":w,
	  				"top":fT+"px",
	  				"left":fL+"px"

	  			})
	  			
	  		})

	  		setTimeout(function(){
	  			$(".thumbnail").css("position","absolute")
	  			 // $('body').jGravity({
	  			 //   target: '.thumbnail',
       //             weight: 25,
       //             depth: 8
       //    		});
	  		},300)
	  }
