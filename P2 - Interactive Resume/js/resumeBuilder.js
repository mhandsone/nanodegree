/* BIO */
	var bio = {
		"name": "myName",
		"role": "Web Developer",
		"contacts": {
			"mobile"   : "+3932974...",
			"email"    : "...@...com",
			"github"   : "qrob",
			"location" : "Rome"
		},
		"welcomeMsg": "Work it harder, make it better Do it faster, makes us stronger More than ever, hour after hour Work is never over!",
		"skills": ["aaa","bbb","ccc","ddd"],
		"bioPic": "images/197x148.gif"
	}

	bio.display = function(){
		var headerName = HTMLheaderName.replace("%data%", bio.name);
		var headerRole = HTMLheaderRole.replace("%data%", bio.role);
		$('#header').prepend(headerName + headerRole);

		var mobile    = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var email     = HTMLemail.replace("%data%", bio.contacts.email);
		var github    = HTMLgithub.replace("%data%", bio.contacts.github);
		var _location = HTMLlocation.replace("%data%", bio.contacts.location);
		$('#topContacts, #footerContacts').append(mobile + email + github + _location);

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
			"employer": "employer",
			"title": "title",
			"location": "Dublin",
			"dates": "2013",
			"description": "description"
		},
		{
			"employer": "aoksdo",
			"title": "aposkd",
			"location": "New York",
			"dates": "2011",
			"description": "asdasd asdasd asdsad"
		},
		{
			"employer": "fsagfdg",
			"title": "fgfgd",
			"location": "Mosca",
			"dates": "2010",
			"description": "asdfasdga"
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

			$('.work-entry:last').append(employer + title + dates + description);
		}	
	};

/* PROJECT */
	var projects = {
	  "projects": [
			{
				"title": "title",
				"dates": "dates",
				"description" : "description",
				"image": "image"
			},
			{
				"title": "asd",
				"dates": "dfdf",
				"description" : "asfs",
				"image": "sfsfsf"
			},
			{
				"title": "asdasd",
				"dates": "asdfdf",
				"description" : "sdfdsf",
				"image": "adasdsaf"
			}
	]};

	projects.display = function(){
		for(index in projects.projects){
			$('#projects').append(HTMLprojectStart);
			var title 		= HTMLprojectTitle.replace("%data%", projects.projects[index].title);
			var dates 		= HTMLprojectDates.replace("%data%", projects.projects[index].dates);
			var description = HTMLprojectDescription.replace("%data%", projects.projects[index].description);
			var image 		= HTMLprojectImage.replace("%data%", projects.projects[index].image);

			$('.project-entry:last').append(title + dates + description + image);		
		}
	};

/* EDUCATION */
	var education = {
		"schools": [
			{
			"name"		: "schoolName",
			"degree"	: "degree",
			"dates"		: "dates",
			"location" 	: "Sydney",
			"major"		: "major"
			}
		],
		"onlineCourses": [
			{
				"title"  : "title",
				"school" : "school",
				"dates"  : "dates",
				"url" 	 : "url"
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