//global variables that will contain the pictures and web pages
var pictureArr = [
	{
	url:'images/gallery/1sm.svg',
	name:"Los manglares",
	id: "pic1"
	},{
	url:'images/gallery/2sm.svg',
	name:"Magical Forest",
	id: "pic2"
	},{
	url:'images/gallery/3sm.svg',
	name:"Dark Forest",
	id: "pic3"
	},{
	url:'images/gallery/4sm.svg',
	name:"number one",
	id: "pic4"
	},{		
	url:'images/gallery/5sm.svg',
	name:"zombie love",
	id: "pic5"
	},{
	url:'images/gallery/6sm.svg',
	name:"octopus skull",
	id: "pic6"
	},{
	url:'images/gallery/7sm.svg',
	name:"inked Buddy",
	id: "pic7"
	},{
	url: 'images/gallery/8sm.svg',
	name:"colombian Passion",
	id: "pic8"
	},{
	url: 'images/gallery/9sm.svg',
	name:"Tea Tox",
	id: "pic9"
	},{
	url: 'images/gallery/10sm.svg',
	name:"Tea Time",
	id: "pic10"
	},{
	url: 'images/gallery/11sm.svg',
	name:"Classical Music Festival",
	id: "pic11"
	},{
	url: 'images/gallery/12sm.svg',
	name:"poster",
	id: "pic12"
	}];





var webPages = [{
	url:'images/gallery/3wsm.svg',
	name:'Bamazon',
	href:'https://github.com/nataliagarkcia/Bamazon'
	
},{
	url:'images/gallery/6wsm.svg',
	name:'Total Trivia',
	href:'https://github.com/nataliagarkcia/TriviaGame'
},{
	url:'images/gallery/4wsm.svg',
	name:'Train Scheduler',
	href:'https://github.com/nataliagarkcia/Train-Scheduler'
},{
	url:'images/gallery/1wsm.svg',
	name:'Friend Finder',
	href:'https://friendsfinder123.herokuapp.com/'
	
},{
	url:'images/gallery/5wsm.svg',
	name:'Classic Movies',
	href:'http://classicmovies.herokuapp.com/'

},{
	url:'images/gallery/2wsm.svg',
	name:'Crystal Collector',
	href:'http://crystal-game.herokuapp.com/'
}];

$( document ).ready(function() {
   $("#picgallery").show();
});

//on click function that will display the pictures
$("#graphicButton").on("click", function() {

			$("#webgallery").hide();
			$("#picgallery").show();
			//console.log('here');

			$('#picgallery').html('');
			for (var i = 0; i < pictureArr.length; i++){
			
			var pictureDiv=$("<div>");//create a new div
			pictureDiv.addClass('col-lg-3 col-md-4 col-xs-6 thumb')//add respective boostrap class


			var a = $("<a>");//create a <a> tag
			a.addClass('thumbnail');//class added
			//a.attr("href","#");//add attribute that will make this <a> responsive

			var p = $('<p>');
			p.text(pictureArr[i].name);

			var picture = $("<img>");
		    picture.addClass('img-responsive'); // Added a class 
		    picture.attr("id", pictureArr[i].id);
		    picture.attr("src",pictureArr[i].url); // Added a data-attribute

		    a.append(picture);
		    pictureDiv.prepend(p)
		    pictureDiv.append(a)

		    $('#picgallery').prepend(pictureDiv); // Added the button to the HTML

		


	}
});

//on click function that will display the pictures
$("#webButton").on("click", function() {

			$("#webgallery").show();
			$("#picgallery").hide();

			$('#webgallery').html('');
			//console.log('here');

			for (var j = 0; j < webPages.length; j++){
			
			var webDiv=$("<div>");//create a new div
			webDiv.addClass('col-lg-3 col-md-4 col-xs-6 thumb')//add respective boostrap class


			var b = $("<a>");//create a <a> tag
			b.addClass('thumbnail');//class added
			b.attr("href", webPages[j].href).attr('target','_blank');//add attribute that will make this <a> responsive

			var t = $('<p>');
			t.addClass('imageTitle');
			t.text(webPages[j].name);

			var webP = $("<img>");
		    webP.addClass('img-responsive'); // Added a class 
		   	webP.text(webPages[j].name);
		    webP.attr("src",webPages[j].url); // Added a data-attribute

		    b.append(t)
		    b.append(webP);
		    //webDiv.prepend(t)
		    webDiv.append(b)
		    $('#webgallery').prepend(webDiv); // Added the button to the HTML

		    

	}
});

