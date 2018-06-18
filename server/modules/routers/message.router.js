const router = require( 'express' ).Router();
const pool = require( '../pools/pool' );

router.get( '/', ( req, res ) => {
    console.log( 'In GET request for messages' );
    const queryText = `SELECT * from messages;`
    pool.query( queryText )
    .then( ( result ) => {
        console.log( `Back from the database with ${ result }`);
        res.send( result.rows );
    }).catch( ( error ) => {
        console.log( `Error getting entries: ${ error }` );
        res.sendStatus( 500 );
    });
})

router.post( '/', ( req, res ) => {
    console.log( 'In POST request for messages' );
    const queryText = `INSERT INTO messages ( name, message ) VALUES ( $1, $2 );`;
    pool.query( queryText, [ req.body.name, req.body.message ] )
    .then( ( result ) => {
        console.log( `Successfully posted to database with ${ result }` );
        res.sendStatus( 201 );
    }).catch( ( error ) => {
        console.log( `Error posting: ${ error }` );
        res.sendStatus( 500 );
    })
})

module.exports = router;