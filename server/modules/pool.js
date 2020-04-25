const pg = require('pg');

const config = {
    database: 'weekend-to-do-app',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
}

const pool = new pg.Pool(config);

pool.on('connect', () => {
    console.log('postgres connected');
});
pool.on('error', (error) => {
    console.log('eror with postgres pool', error);
});

module.exports = pool;