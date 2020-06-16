// Requires
var express = require('express');
var mongoose = require('mongoose');

// Inicializar variables
var app = express();

// Db Connection
mongoose.connection.openUri(
	'mongodb://localhost:27017/hospitalDB',
	(err, resp) => {
		if (err) {
			console.log('Error ---------------->:  \x1b[31m%s\x1b[0m ', err);
			//throw err;
			return
		}
		 console.log('Database  \x1b[32m%s\x1b[0m ', 'online');
	}
);

// Rutas
app.get('/', (req, res, next) => {
	res.status(200).json({
		ok: true,
		message: 'Request performed correctly.',
	});
});

// Escuchar peticiones
app.listen(3000, () => {
	console.log('Express server port 3000: \x1b[32m%s\x1b[0m ', 'online');
});
