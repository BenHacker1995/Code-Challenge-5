const pg = require( 'pg' );

const config = {
    database: 'message_board',
    host: 'localhost',
    port: '5432',
    max: 10,
    idleTimeoutMillis: 30000,
    multipleStatements: true
};

module.exports = new pg.Pool( config );