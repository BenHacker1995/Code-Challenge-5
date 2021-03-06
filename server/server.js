const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const messageRouter = require( './modules/routers/message.router' );

const PORT = process.env.PORT || 5000;

const app = express();

app.use( express.static( 'server/public' ) );
app.use( bodyParser.json() );

app.use( '/message', messageRouter );

app.listen( PORT, () => {
    console.log( `Listening on port ${ PORT }` );
});