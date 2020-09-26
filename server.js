var express = require( 'express' );
var app = express();
var path = require( 'path' );


app.get( '/404', function( req, res, next ) {
	// trigger a generic (500) error
	next( new Error( 'That\'s a 404 Internal Server Error!' ) );
} );

app.get( '/403', function( req, res, next ) {
	// trigger a 403 error
	var err = new Error( 'not allowed!' );
	err.status = 403;
	next( err );
} );

app.get( '/500', function( req, res, next ) {
	// trigger a generic (500) error
	next( new Error( 'That\'s a 500 Internal Server Error!' ) );
} );


//Set the static files to be servered up with express.static.
app.use( express.static( path.join( __dirname, './' ) ) );

//Expose the main index.html file.
app.get(
	'/',
	function( req, res ) {
		res.sendFile( path.join( __dirname, './index.html' ) );
	}
);

if ( ! module.parent ) {
	//Default port
	//cdc_app.listen( 8080, () => console.log( 'CDC express app listening on port 8080!' ) );

	//use this port instead if port 8080 is taken by something else on your machine
	app.listen( 3000, () => console.log( 'express app listening on port 3000!' ) );
}
