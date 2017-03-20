/*
This is empty on purpose! Your code to build the resume will go here.
 */

//var awesomeThoughts = "I am Zachary and I am AWESOME!";

//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

//$("#main").append(funThoughts);



var skills = ["HTML", "CSS", "JavaScript", "WordPress"];

var bio = {
	"name" : "Zachary Hickson",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "0431198746",
		"email" : "zacharyh96@gmail.com",
		"location" : "Sydney, Australia"
	},
	"welcomeMessage" : "Welcome to my resume!",
	"skills" : skills,
	"bioPic" : "images/fry.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[mobile]);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts[email]);

$("#header").prepend(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);