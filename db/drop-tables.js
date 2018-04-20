/* eslint no-console: off, quotes: off */

const client = require('../lib/db-client');

client.query(`
DROP TABLE dogs
`
)
    .then(
        () => console.log('drop successful'),
        err => console.error(err)

    )
    .then(() => {
        client.end();
    }); 