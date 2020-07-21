const { Pool } = require("pg");

const pool = new Pool({
  user: 'postgres',
  password: '123',
  host: 'localhost',
  database: 'scheduler'
});

pool.query(`SELECT *d FROM days;`)
  .then(res => {
    res.rows.forEach(record => {
      console.log(`${record.name} has an id of ${record.id} `);
    });
  })
  .catch(err => console.log(err))
  .finally(() => {


  });