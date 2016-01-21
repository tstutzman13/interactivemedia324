console.log("My Java Is Working!");

console.log( 2 * 5 );

console.log( "A beautiful dog" );

console.log( "A beautiful dog".length );

console.log( 8 * 2 === 16);

var myCountry = "India";
console.log( myCountry.length );

myCountry = "United States";
console.log( myCountry.length );

var password = "abc123";
var userEntered = "abc123";

if ( password === userEntered){
	console.log("user entered correct pw.");
}

if(password.length < userEntered.length ){
	console.log( "Too many characters." );
}

var name = "debraj";
var school = "wou";
if( name == "garmim" && school == "wou"){
	console.log("come on in");
}

var oversixteen = true;
var parentspresent = false;
if (oversixteen || parentspresent){
	console.log("you can go to an R-rated movie.");

}


var teacherInfo = ["garima", "wou", 2015];
console.log ( teacherInfo[0]);
