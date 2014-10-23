/* BIO */
	var bio = {
		"name"		: "Nicola Tesla",
		"role"		: "Engineering",
		"contacts"	: {
			"generic"	: {"html": HTMLcontactGeneric,  "value": ""},
			"mobile"	: {"html": HTMLmobile, 	 		"value": ""},
			"email"		: {"html": HTMLemail, 	 		"value": "nikola.tesla286@gmail.com"},
			"twitter"	: {"html": HTMLtwitter,  		"value": ""},
			"github"	: {"html": HTMLgithub, 	 		"value": ""},
			"blog"		: {"html": HTMLblog, 	 		"value": "http://en.wikipedia.org/wiki/Nikola_Tesla"},
			"location"	: {"html": HTMLlocation, 		"value": "Serbia, Belgrade"}
		},
		"welcomeMsg": "Work it harder, make it better Do it faster, makes us stronger More than ever, hour after hour Work is never over!",
		"skills"	: ["inventor","electrical engineer","mechanical engineer","futurist", "polyglot"],
		"bioPic"	: "images/nikola.jpg"
	}

	bio.display = function(){
		var headerName = HTMLheaderName.replace("%data%", bio.name);
		var headerRole = HTMLheaderRole.replace("%data%", bio.role);
		$('#header').prepend(headerName + headerRole);

		$.each(bio.contacts, function(key, obj){
			if(obj.value)
				$('#topContacts, #footerContacts').append(obj.html.replace("%data%", obj.value));
		});

		var bioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		var welcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
		$('#header').append(bioPic + welcomeMsg);

		$('#header').append(HTMLskillsStart);
		for(index in bio.skills){
			$('#skills').append(HTMLskills.replace("%data%", bio.skills[index]));
		}
	};
	
/* WORK */
	var work = {
		"jobs": [
		{
			"employer": "Continental Edison Company",
			"title": "Engineer",
			"location": "France, Paris",
			"dates": "1882 - 1884",
			"description": "Designing and making improvements to electrical equipment"
		},
		{
			"employer": "Edison Machine Works",
			"title": "Engineer",
			"location": "US, New York",
			"dates": "June 1884",
			"description": "My work for Edison began with simple electrical engineering and quickly progressed to solving more difficult problems. I was offered the task of completely redesigning the Edison Company's direct current generators. I redesigned Edison's inefficient motor and generators, making an improvement in both service and economy."
		},
		{
			"employer": "Westinghouse Electric & Manufacturing Company",
			"title": "Consultant ",
			"location": "US, Pittsburgh",
			"dates": "1888",
			"description": "I helped to create an alternating current system to power the city's streetcars."
		}
	]};

	work.display = function(){
		for(index in work.jobs){
			$('#workExperience').append(HTMLworkStart);

			var employer 	= HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
			var title 		= HTMLworkTitle.replace("%data%", work.jobs[index].title);
			var _location 	= HTMLworkLocation.replace("%data%", work.jobs[index].location);
			var dates 		= HTMLworkDates.replace("%data%", work.jobs[index].dates);
			var description = HTMLworkDescription.replace("%data%", work.jobs[index].description);

			$('.work-entry:last').append(employer + title + _location + dates + description);
		}	
	};

/* PROJECT */
	var projects = {
	  "projects": [
			{
				"title": "Alternating Current",
				"dates": "1890",
				"description" : "I developed the concept of Alternating Currents; I modified it to give rise to more efficient high frequency alternating currents and then discovered the phenomenon of Wireless Electricity and all this as I always claimed were in perfect harmony with Mother Nature. - See more at: http://aniruddhafriend-samirsinh.com/wireless-electricity-part-1/",
				"image1": "images/wireless-electricity.jpg",
				"image2": "images/AC.png",
				"image3": ""
			},
			{
				"title": "X-ray experimentation",
				"dates": "1894",
				"description" : "I began investigating on radiant energy of \"invisible\" kinds after I had noticed damaged film in my laboratory in previous experiments. I proceeded to do my own experiments in X-ray imaging, developing a high energy single terminal vacuum tube of my own design that had no target electrode and that worked from the output of the Tesla Coil. In my research, I devised several experimental setups to produce X-rays.",
				"image1": "images/xray.jpg",
				"image2": "",
				"image3": ""
			}
	]};

	projects.display = function(){
		for(index in projects.projects){
			$('#projects').append(HTMLprojectStart);
			var title 		= HTMLprojectTitle.replace("%data%", projects.projects[index].title);
			var dates 		= HTMLprojectDates.replace("%data%", projects.projects[index].dates);
			var description = HTMLprojectDescription.replace("%data%", projects.projects[index].description);
			//var image 		= HTMLprojectImage.replace("%data%", projects.projects[index].image);

			$('.project-entry:last').append(title + dates + description);
			for(var i=1; i<=3; i++){
				if("%data%", projects.projects[index]["image"+i]){
					var image = HTMLprojectImage.replace("%data%", projects.projects[index]["image"+i]);
					$('.project-entry:last').append(image);
				}
			}	
		}
	};

/* EDUCATION */
	var education = {
		"schools": [
			{
			"name"		: "Graz University of Technology",
			"degree"	: "dropped out",
			"dates"		: "1875-1877",
			"location" 	: "Austria, Graz",
			"major"		: "mathematics, physics, engineering"
			}
		],
		"onlineCourses": [
			{
				"title"  : "Intro to Computer Science",
				"school" : "Udacity",
				"dates"  : "2014",
				"url" 	 : "https://www.udacity.com/course/cs101"
			}
		]
	};

	education.display = function(){
		for(index in education.schools){
			$('#education').append(HTMLschoolStart);
			var schoolName = HTMLschoolName.replace("%data%", education.schools[index].name);
			var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[index].degree);
			var schoolDates = HTMLschoolDates.replace("%data%", education.schools[index].dates);
			var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[index].location);
			var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[index].major);
			$('.education-entry:last').append(schoolName + schoolDegree + schoolDates + schoolLocation + schoolMajor);
		}

		$('#education').append(HTMLonlineClasses);

		for(index in education.onlineCourses){
			$('#education').append(HTMLschoolStart);
			var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[index].title);
			var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school);
			var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[index].dates);
			var onlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[index].url);
			$('.education-entry:last').append(onlineTitle + onlineSchool + onlineDates + onlineUrl);
		}
	};

/* RESUME */
var resume = {
	"resume" : [ bio, work, projects, education],
	"build"  : function(){
		for(index in resume.resume){
			resume.resume[index].display();
		}
		//$('#main').append(internationalizeButton);
		$('#mapDiv').append(googleMap);
	}
};

resume.build();