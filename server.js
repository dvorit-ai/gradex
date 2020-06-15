const fs = require('fs');
const http = require("http");
const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
var about;

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');


fs.readFile(__dirname + '/public/about.html', (err, data) => {
  if (err) throw err;
  
  about = data;

});


let db = [];
var projectTeasers = []; 	//this array will hold all the HTML for the Thubnails on the front page
var projects = [];			//this array will hold all the HTML for the full projects.
var studentList = [];		//this array will list all the student names and projects
var allTags = [];			//this array will hold all the unique tags
var uniqueTags = [];			//this array will hold all the unique tags


var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./client_secret.json');

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('1eXqcfAFnQsfIgsAWohCV2sRYQxvG6V8Q9RpDvyWAgz4');

// Authenticate with the Google Spreadsheets API.
doc.useServiceAccountAuth(creds, function (err) {

  // Get all of the rows from the spreadsheet.
  doc.getRows(1, function (err, rows) {
   rows

   for (i=0;i<rows.length;i++) {

   var 	sID =
   		tags  = 
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
		sID = i;
		tags 		=	rows[i].tags != undefined ? rows[i].tags.split(", "):"";
	  	name 		= 	rows[i].name != undefined ? rows[i].name:"";
	  	title 		= 	rows[i].title != undefined ? rows[i].title:"";
	  	profs		= 	rows[i].profs != undefined ? rows[i].profs:"";
	  	description = 	rows[i].description != undefined ? rows[i].description:"";
		bio			=	rows[i].bio != undefined ? rows[i].bio:"";
		quipq		=	rows[i].quipq != undefined ? rows[i].quipq:"";
		quipa		=	rows[i].quipa != undefined ? rows[i].quipa:"";
		image1		=	rows[i].image1 != undefined ? rows[i].image1:"";
		image2		=	rows[i].image2 != undefined ? rows[i].image2:"";
		image3		=	rows[i].image3 != undefined ? rows[i].image3:"";
		image4		=	rows[i].image4 != undefined ? rows[i].image4:"";
		image5		=	rows[i].image5 != undefined ? rows[i].image5:"";
		caption1	=	rows[i].caption1 != undefined ? rows[i].caption1:"";
		caption2	=	rows[i].caption2 != undefined ? rows[i].caption2:"";
		caption3	=	rows[i].caption3 != undefined ? rows[i].caption3:"";
		caption4	=	rows[i].caption4 != undefined ? rows[i].caption4:"";
		caption5	=	rows[i].caption5 != undefined ? rows[i].caption5:"";
		video		=	rows[i].video != undefined ? rows[i].video:"";
		videocaption	=	rows[i].videocaption != undefined ? rows[i].videocaption:"";
		portrait	=	rows[i].portrait != undefined ? rows[i].portrait:"";


		if (rows[i].shorttitle != "") {
			shorttitle = rows[i].shorttitle
		} else {
			shorttitle = title;
		}


		if (rows[i].insta != "") {
			insta = "<a href='"+rows[i].insta+"' target='_blank'><i class='fab fa-instagram-square'></i></a>"
		}

		if (rows[i].linkedin != "") {
			linkedin = "<a href='"+rows[i].linkedin+"' target='_blank'><i class='fab fa-linkedin'></i></a>"
		}

		if (rows[i].portfolio != "") {
			portfolio = "<a href='"+rows[i].portfolio+"' target='_blank'><i class='fas fa-link'></i></a>"
		}



		if (rows[i].behance != "") {
			
			behance = "<a href='"+rows[i].behance+"' target='_blank'><i class='fab fa-behance-square'></i></a>"
		}

		if (rows[i].email != "") {
			email = "<a href='mailto:"+rows[i].email+"' target='_blank'><i class='fas fa-envelope-square'></i></a>"
		}


		const thumbnail	=	rows[i].thumbnail;


	  	var tagButtons = "";
	  	var tagClasses= ""
	  	
	  			for (t=0;t<tags.length;t++) {
	  				tagClasses += "t_"+mn(tags[t])+" ";
	  				tagButtons += "<h6 class='tag' data-tag='t_"+mn(tags[t])+"'>"+tags[t]+"</h6>";
	  				allTags.push("<h6 data-tag='t_"+mn(tags[t])+"' class='tag t_"+mn(tags[t])+"'>"+tags[t]+"</h6>");
	  				
	  			}








	  	student = "<tr data-href='/student/"+sID+"' class='student-row'  data-name='"+name+"' data-title='"+title+"' data-class='"+profs+"' data-img='"+thumbnail+"'><td class='name'><a href='/?id="+i+"'>"+name+"</a></td><td class='title'><a href='/?id="+i+"'>"+title+"</a></td><td class='profs'><a href='/?id="+i+"'>"+profs+"</a></td></tr>";
	  	studentList.push(student);
	  	

		var projTeaser = 	"<div id='project-"+sID+"' class=\"thumbnail "+tagClasses+"\"+>"+
					"<a data-project-id='"+sID+"' id='project-link-"+i+"' class=\"project-link\" data-url="+mn(name)+">"+
					"<img src=\"/images/thumbnails/"+thumbnail+"\" alt=\"\"/>"+
					"<div class=\"img-tags\">"+
					"<p class='uppercase'>"+name+"</p>"+
					"<h3>"+shorttitle+"</h3>"+
					tagButtons+
					"</div>"+
					"</a>"+
					"</div>";

					//console.log(allData[i]);

					projectTeasers.push(projTeaser);
			
		var projFull = "<div class='students-container' id='student-"+sID+"'>"+
"<div class='sidebar'>"+

"<p class='uppercase'>"+name+"</p>"+
"<h3>"+title+"</h3>"+
"<div class='sidebar-project'>"+
"<p class='description'>"+description+"</p>"+
"<p class='uppercase description'>"+tagButtons+"</p>"+

"</div>"+
"<hr />"+
"<div class='sidebar-author'>";


portrait != "" ? projFull+="<img src='/images/"+portrait+"'>": null

projFull+= 
"<div class='social-links'>"+
insta+linkedin+portfolio+behance+email+
"</div>"+
"<p class='uppercase'>"+"About the designer"+"</p>"+
"<p class='description'>"+bio+"</p>"+
"<p class='uppercase'>"+quipq+"</p>"+
"<p class='description'>"+quipa+"</p>"+
"</div>"+
"</div>"+
"<div class='project'>";
	




	if (image1 != "") {
		projFull += "<div class='img1'>"+
					"<img src='/images/"+image1+"'>";
						if (caption1 != "") projFull += "<h6 class='caption'>"+caption1+"</h6>"		
		projFull += "</div>";
	}



	if (image2 != "") {
		projFull += "<div class='img2'>"+
					"<img src='/images/"+image2+"'>";
						if (caption2 != "") projFull += "<h6 class='caption'>"+caption2+"</h6>"		
		projFull += "</div>";
	}


	if (image3 != "") {
		projFull += "<div class='img3'>"+
					"<img src='/images/"+image3+"'>";
						if (caption3 != "") projFull += "<h6 class='caption'>"+caption3+"</h6>"		
		projFull += "</div>";
	}

	if (image4 != "") {
		projFull += "<div class='img4'>"+
					"<img src='/images/"+image4+"'>";
						if (caption4 != "") projFull += "<h6 class='caption'>"+caption4+"</h6>"		
		projFull += "</div>";
	}

	if (image5 != "") {
		projFull += "<div class='img5'>"+
					"<img src='/images/"+image5+"'>";
						if (caption5 != "") projFull += "<h6 class='caption'>"+caption5+"</h6>"		
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

  });
});




function mn(string) {
	return string
			.toLowerCase()
			.replace(" ","")
			.replace("/","")
}


//this is function to randomize any array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}



setTimeout(function(){
	uniqueTags = allTags.filter((item, i, ar) => ar.indexOf(item) === i);
uniqueTags.sort();
	//console.log(uniqueTags)
},5000)

// Compile the source code
//const compiledFunction = pug.compileFile('template.pug');

app.use(express.static(__dirname + '/public'));

app.get('/projects.json', (req, res) => {
    res.send(projects);
});

app.get('/projectTeasers.json', (req, res) => {
    res.send(projectTeasers);
});

app.get('/tags.json', (req, res) => {
    res.send(uniqueTags);
});

app.get('/students.json', (req, res) => {
    res.send(studentList);
});


app.get('/', function (req, res) {

			const pT = [...projectTeasers];

				shuffle(pT)


			pT.splice(1,0,"<div class='thumbnail type'><h1>r e c<br>e s s<br>i o n</h1></div>");
			pT.splice(10,0,"<div class='thumbnail type'><p class='home'>Despite COVID-19 halting our work and cancelling our graduate show and exhibition GradEx105, students still worked to complete their projects for themselves, their professors, and this website.</p></div>"); 
			pT.splice(26,0,"<div class='thumbnail type'><p class='home'>The work featured on this site has been produced over an 8 month period of research, iteration, and craft. </p></div>"); 
			pT.splice(26,0,"<div class='thumbnail type'><h1>g r a<br />d s</h1></div>"); 
			pT.splice(42,0,"<div class='thumbnail type'><p class='home'>Recession Grads is a digital archive & exhibition set to showcase the work of the Graphic Design 2020 graduating class at OCADU.</p></div>"); 			
			pT.splice(47,0,"<div class='thumbnail type'><p class='home'>Supported by faculty and their classes, students produced work that pertained to their design practice and topics they were passionate about such as equity, sustainability, social justice, and more.</p></div>"); 
			pT.splice(47,0,"<div class='thumbnail type'><h1 class='larger'>2 0<br>2 0</h1></div>"); 
			pT.splice(76,0,"<div class='thumbnail type'><p class='home'>Recession Grads exists to acknowledge the situation of what it is like for us to graduate into a recession, and a period of time where everything is a missing glyph of uncertainty and at an indefinite pause. This site serves to showcase our work despite the circumstances and to start new traditions of archiving future graduates' work.</p></div>"); 

  	var content = "<div class='projects-container'><div class='projects-container-interior'>"+pT.join('')+"</div></div>"
  res.render('head', { stuff: content })
})


app.get('/students', function (req, res) {
  	var content = "<div class='table-list' id='student-list'><table><tr class='uppercase'><th class='student-top cell-one' data-via='name'>Name</th><th class='student-top cell-two' data-via='title'>Project</th><th class='student-top cell-three' data-via='profs'>Professor(s)</th></tr>"+studentList.join('')+"</table></div>"
  res.render('head', { stuff: content })
})

app.get('/about', function (req, res) {
	console.log();
  	//var content = "<div class='table-list' id='student-list'><table><tr class='uppercase'><th class='student-top cell-one' data-via='name'>Name</th><th class='student-top cell-two' data-via='title'>Project</th><th class='student-top cell-three' data-via='profs'>Professor(s)</th></tr>"+studentList.join('')+"</table></div>"
  res.render('head', { stuff: about })
})


app.get('/tag/:uid', function (req, res) {
  	var content = "<div class='projects-container'><div class='projects-container-interior'>"+projectTeasers.join('')+"</div></div>"
  res.render('head', { stuff: content })
})

app.get('/student/:uid', function (req, res) {
  res.render('head', { stuff: projects[req.params.uid] })
})

app.get('/teasers.json', (req, res) => {
    res.send(projectTeasers);
});


app.get('/table.json', (req, res) => {
    res.send(studentList);
});

// app.get('/', (req, res) => {
// 	const ts = projectTeasers.join('');
//     res.send(compiledFunction({
//   		t: ts
// 	}));
// });

var server = app.listen(11896);