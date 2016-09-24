//global variables that will contain the pictures and web pages
var pictureArr = [
	{
	url:'images/gallery/1sm.svg',
	name:"Los manglares",
	},{
	url:'images/gallery/2sm.svg',
	name:"Magical Forest",
	},{
	url:'images/gallery/3sm.svg',
	name:"Dark Forest",
	},{
	url:'images/gallery/4sm.svg',
	name:"number one",
	},{		
	url:'images/gallery/5sm.svg',
	name:"zombie love",
	},{
	url:'images/gallery/6sm.svg',
	name:"octopus skull",
	},{
	url:'images/gallery/7sm.svg',
	name:"inked Buddy",
	},{
	url: 'images/gallery/8sm.svg',
	name:"colombian Passion",
	},{
	url: 'images/gallery/9sm.svg',
	name:"Tea Tox",
	},{
	url: 'images/gallery/10sm.svg',
	name:"Tea Time",
	},{
	url: 'images/gallery/11sm.svg',
	name:"Classical Music Festival",
	},{
	url: 'images/gallery/12sm.svg',
	name:"poster",
	}];





var webPages = ['images/gallery/1wsm.svg','images/gallery/2wsm.svg','images/gallery/3wsm.svg','images/gallery/4wsm.svg','images/gallery/5wsm.svg','images/gallery/6wsm.svg'];


//on click function that will display the pictures
$("#graphicButton").on("click", function() {

			$("#webgallery").hide();
			$("#picgallery").show();
			//console.log('here');

			for (var i = 0; i < pictureArr.length; i++){
			
			var pictureDiv=$("<div>");//create a new div
			pictureDiv.addClass('col-lg-3 col-md-4 col-xs-6 thumb')//add respective boostrap class


			var a = $("<a>");//create a <a> tag
			a.addClass('thumbnail');//class added
			a.attr("href","#");//add attribute that will make this <a> responsive

			var p = $('<p>');
			p.text(pictureArr[i].name);

			var picture = $("<img>");
		    picture.addClass('img-responsive'); // Added a class 
		    picture.attr("src",pictureArr[i].url); // Added a data-attribute

		    a.append(picture);
		    pictureDiv.append(p)
		    pictureDiv.append(a)
		    $('#picgallery').prepend(pictureDiv); // Added the button to the HTML


	}
});

//on click function that will display the pictures
$("#webButton").on("click", function() {

			$("#webgallery").show();
			$("#picgallery").hide();

			
			//console.log('here');

			for (var j = 0; j < webPages.length; j++){
			
			var webDiv=$("<div>");//create a new div
			webDiv.addClass('col-lg-3 col-md-4 col-xs-6 thumb')//add respective boostrap class


			var b = $("<a>");//create a <a> tag
			b.addClass('thumbnail');//class added
			b.attr("href","#");//add attribute that will make this <a> responsive

			var webP = $("<img>");
		    webP.addClass('img-responsive'); // Added a class 
		   webP.text(webPages[j]);
		    webP.attr("src",webPages[j]); // Added a data-attribute

		    b.append(webP);
		    webDiv.append(b)
		    $('#webgallery').prepend(webDiv); // Added the button to the HTML

		    

	}
});




//will create a function that will allow the user click on the picture and pop up a modal
//grab the array with the pictures and make a for loop to be able to display those in the modal
//create configuration for the contact form
//grab values and send and ajax to be able to grab those
//maybe tray to send thos out to an actual email


 