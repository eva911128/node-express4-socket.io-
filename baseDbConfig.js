var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'yd123456',
	database: 'test'
})

connection.connect();
exports.connect = function(){
	return connection;
}

