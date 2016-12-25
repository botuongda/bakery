new WOW().init();
$( function() {
	var state = true;
	$( "#button" ).on( "click", function() {
		if ( state ) {
			$( "#effect" ).animate({
				backgroundColor: "#aa0000",
				color: "#fff",
				width: 250,
				right:0
			}, 1000 );
			$( ".infosp" ).switchClass( "infosp", "newClass", 1000 );// thay đổi class
		} else {
			$( "#effect" ).animate({
				backgroundColor: "#fff",
				color: "#000",
				width: 500,
				right:0
			}, 1000 );
			$( ".newClass" ).switchClass( "newClass", "infosp", 1000 );// thay đổi class

		}
		state = !state;


	});
} );


function bunglua(n) {
		var vitri=$(n).parent().attr('class')
		$("."+ vitri).effect( "explode", "slow").hide( "explode", { direction: "down" }, "slow" );

}


$('.button-collapse').sideNav({
		menuWidth: 300, // Default is 240
		edge: 'left', // Choose the horizontal origin
		closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
		draggable: true // Choose whether you can drag to open on touch screens
	}
);
// hide sideNav
$('.button-collapse').sideNav('hide');
