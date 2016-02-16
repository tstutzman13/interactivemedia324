$(document).ready( function () {



	function myFunction() {
    	var x = Math.floor((Math.random() * rathers.length));
    	document.getElementById("demo").innerHTML = x;
	}

	var rathers = [
    	"eat top ramen for 100 days",
    	"write a 10 page research paper",
    	"code a 15 page website",
  	]

	$(function() {
	    while( $('#right div').height() > $('#right').height() ) {
	        $('#right div').css('font-size', (parseInt($('#right div').css('font-size')) - 1) + "px" );
	    }
	});

  //$('#left').click(function(){
    //myFunction();

  //});

  //$('#red').click(function(){
    //$('#yellow').toggle();

  //});

//DO NOT DELEATE BLEOW THIS POINT
});