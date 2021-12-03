var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'company'
});
 
connection.connect();

connection.query('SELECT * from products', function (error, results, fields) {
  if (error) throw error;
  console.log(results[0].nombre);
  console.log(fields);
});
 
connection.end();