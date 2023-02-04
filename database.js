const pg = require("pg")
const pool = new pg.Pool({
    connectionString:""
})

module.exports = pool