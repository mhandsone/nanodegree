var bio = {
	name: "myName",
	role: "Web Developer",
	contacts: {mobile: "+3932974...", email: "...@...com", github: "qrob", location: "location"},
	welcomeMsg: "Work it harder, make it better Do it faster, makes us stronger More than ever, hour after hour Work is never over!",
	skills: ["aaa","bbb","ccc","ddd"],
	bioPic: "images/197x148.gif"
}

var headerName = HTMLheaderName.replace("%data%", bio.name);
var headerRole = HTMLheaderRole.replace("%data%", bio.role);
$('#header').prepend(headerRole);
$('#header').prepend(headerName);

var mobile   = HTMLmobile.replace("%data%", bio.contacts.mobile);
var email    = HTMLemail.replace("%data%", bio.contacts.email);
var github   = HTMLgithub.replace("%data%", bio.contacts.github);
//var location = HTMLlocation.replace("%data%", bio.contacts.location);
$('#topContacts').append(mobile);
$('#topContacts').append(email);
$('#topContacts').append(github);
//$('#topContacts').append(location);

var bioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var welcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
$('#header').append(bioPic);
$('#header').append(welcomeMsg);

$('#header').append(HTMLskillsStart);
$.each(bio.skills, function(idx, skill) {
	$('#skills').append(HTMLskills.replace("%data%", skill));
});

var work = {employer: "employer", title: "title", location: "location", dates: "dates", description: "description"};

var HTMLprojectStart = "<div class='project-entry'></div>";
var HTMLprojectTitle = "<a href='#'>%data%</a>";
var HTMLprojectDates = "<div class='date-text'>%data%</div>";
var HTMLprojectDescription = "<p><br>%data%</p>";
var HTMLprojectImage = "<img src='%data%'>";

var education = {name: "schoolName", degree: "degree", dates: "dates", location: "location", major: "major"};

var HTMLschoolStart = "<div class='education-entry'></div>";
var HTMLschoolName = "<a href='#'>%data%";
var HTMLschoolDegree = " -- %data%</a>";
var HTMLschoolDates = "<div class='date-text'>%data%</div>";
var HTMLschoolLocation = "<div class='location-text'>%data%</div>";
var HTMLschoolMajor = "<em><br>Major: %data%</em>"

//var work = [{employer: 'aaa', title: 'bbb', location: 'jijij'}];

//var bio = {name: 'Roberto Rizzo', role: 'Web Developer', welcomeMessage: 'sadsd', contacts: {mobile: '', email: '', github: '', location: ''}, skills: []};

//$(document).ready(function(){

//});
