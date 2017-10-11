const express = require('express');
const router = express.Router();
const client = require('../dataAccess/dataBase');

/* GET home page. */
router.get('/GetList', (req, res, next) => {
  let results = []; 
  // Get a Postgres client from the connection pool 
  client.query("SELECT * FROM company", function (err, result) {
    if (err) {
      console.log(err)
    }
    result.rows.forEach(row=>{
      results.push(row)
    });
   res.json(results);
  })
});

module.exports = router;
