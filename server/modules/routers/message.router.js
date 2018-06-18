const router = require( 'express' ).Router();
const pool = require( '../pools/pool' );

router.get( '/', ( req, res ) => {
    console.log( 'In GET request for entry' );
    const queryText = `SELECT * from entry;`
    pool.query( queryText )
    .then(  ( result ) => {
        console.log( `Back from the database with ${ result }`);
        res.send( result.rows );
    }).catch( ( error ) => {
        console.log( `Error getting entries: ${ error }` );
        res.sendStatus( 500 );
    });
})

router.post( '/', ( req, res ) => {
    console.log( 'In POST request for entry' );
    const queryEntryText = `INSERT INTO entry ( entrytext, projectname, dateof, starttime, endtime, entryhours ) VALUES ( $1, $2, $3, $4, $5, $6 );`;
    pool.query( queryEntryText, [ newEntry.entrytext, newEntry.projectname, newEntry.dateof, then, now, hours ] )
    .then( ( result ) => {
        console.log( `Successfully posted to database with ${ result }` );
        res.sendStatus( 201 );
    }).catch( ( error ) => {
        console.log( `Error posting: ${ error }` );
        res.sendStatus( 500 );
    })
})

module.exports = router;