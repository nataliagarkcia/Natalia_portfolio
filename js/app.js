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
	href:'http://crystal-game.herokuapp.com/'
	
},{
	url:'images/gallery/6wsm.svg',
	name:'Total Trivia',
	href:'http://crystal-game.herokuapp.com/'
},{
	url:'images/gallery/4wsm.svg',
	name:'Train Scheduler',
	href:'http://crystal-game.herokuapp.com/'
},{
	url:'images/gallery/1wsm.svg',
	name:'Friend Finder',
	href:'http://crystal-game.herokuapp.com/'
	
},{
	url:'images/gallery/5wsm.svg',
	name:'Classic Movies',
	href:'http://classicmovies.herokuapp.com/'

},{
	url:'images/gallery/2wsm.svg',
	name:'Crystal Collector',
	href:'http://crystal-game.herokuapp.com/'
}];


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

			
			//console.log('here');

			for (var j = 0; j < webPages.length; j++){
			
			var webDiv=$("<div>");//create a new div
			webDiv.addClass('col-lg-3 col-md-4 col-xs-6 thumb')//add respective boostrap class


			var b = $("<a>");//create a <a> tag
			b.addClass('thumbnail');//class added
			b.attr("href", webPages[j].href);//add attribute that will make this <a> responsive

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




//will create a function that will allow the user click on the picture and pop up a modal
//grab the array with the pictures and make a for loop to be able to display those in the modal
//create configuration for the contact form
//grab values and send and ajax to be able to grab those
//maybe tray to send thos out to an actual email


 $(document).ready(function(){

    loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current){
        $('#show-previous-image, #show-next-image').show();
        if(counter_max == counter_current){
            $('#show-next-image').hide();
        } else if (counter_current == 1){
            $('#show-previous-image').hide();
        }
    }

    /**
     *
     * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
     * @param setClickAttr  Sets the attribute for the click handler.
     */

    function loadGallery(setIDs, setClickAttr){
        var current_image,
            selector,
            counter = 0;

        $('#show-next-image, #show-previous-image').click(function(){
            if($(this).attr('id') == 'show-previous-image'){
                current_image--;
            } else {
                current_image++;
            }

            selector = $('[data-image-id="' + current_image + '"]');
            updateGallery(selector);
        });

        function updateGallery(selector) {
            var $sel = selector;
            current_image = $sel.data('image-id');
            $('#image-gallery-caption').text($sel.data('caption'));
            $('#image-gallery-title').text($sel.data('title'));
            $('#image-gallery-image').attr('src', $sel.data('image'));
            disableButtons(counter, $sel.data('image-id'));
        }

        if(setIDs == true){
            $('[data-image-id]').each(function(){
                counter++;
                $(this).attr('data-image-id',counter);
            });
        }
        $(setClickAttr).on('click',function(){
            updateGallery($(this));
        });
    }
});