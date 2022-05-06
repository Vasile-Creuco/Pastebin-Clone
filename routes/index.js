var express = require('express');
var router = express.Router();
var path = require('path');
var database_connect = require(path.resolve('database/connect_db'));
var database_operation = require(path.resolve('database/operation_db'));

/* GET home page. */
/* GET home page. */
router.get('/', function (req, res, next) {
  var sql = 'SELECT * FROM pastebin';
  database_connect.connection.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('index', {
      title: 'Pastebin Clone',
      contains: data
    });
  });
});

/* POST from home page. */
router.post('/', function (req, res, next) {
  console.log('User has inserted: ${req.body.addInput}');
  database_operation.insertContent(req.body.addInput);
  var sql = 'SELECT * FROM pastebin';
  database_connect.connection.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('index', {
      title: 'Pastebin Clone',
      contains: data
    }, (err, result) => {
      res.redirect('/');
  });
});
});

module.exports = router;
