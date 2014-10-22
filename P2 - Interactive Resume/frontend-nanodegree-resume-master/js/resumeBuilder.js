var work = [{employer: 'aaa', title: 'bbb', location: 'jijij'}];

var bio = {name: 'Roberto Rizzo', role: 'Web Developer', welcomeMessage: 'sadsd', contacts: {mobile: '', email: '', github: '', location: ''}, skills: []};

$(document).ready(function(){
	var headerName = HTMLheaderName.replace("%data%", bio.name);
	var headerRole = HTMLheaderRole.replace("%data%", bio.role);

	$('#header').prepend(headerRole);
	$('#header').prepend(headerName);
	
});
