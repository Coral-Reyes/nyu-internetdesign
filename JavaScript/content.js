$(document).ready(function(){

	  var header = $('header'),
			      btn    = $('button.toggle-nav');

	  btn.on('click', function(){
		    header.toggleClass('active');
	  });

});
  
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAGrv7Q2mJ7DBNHIOKMdVSS7-eo6muJ_uw",
    authDomain: "my-portfolio-studio.firebaseapp.com",
    databaseURL: "https://my-portfolio-studio.firebaseio.com",
    projectId: "my-portfolio-studio",
    storageBucket: "my-portfolio-studio.appspot.com",
    messagingSenderId: "458669713089"
  };
  firebase.initializeApp(config);
  var firstName = firebase.database().ref("fname");

firstName.on("value", function(snapshot) {
   console.log(snapshot.val());
});

$(".grid").masonry({
  // options...
  itemSelector: '.grid-item';
});
$('#container').imagesLoaded()
  .always( function( instance ) {
    console.log('all images loaded');
  })
  .done( function( instance ) {
    console.log('all images successfully loaded');
  })
  .fail( function() {
    console.log('all images loaded, at least one is broken');
  })
  .progress( function( instance, image ) {
    var result = image.isLoaded ? 'loaded' : 'broken';
    console.log( 'image is ' + result + ' for ' + image.img.src );
  });
var projects="#";
