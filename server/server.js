const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 5000 ;

//settings
app.set('port', process.env.PORT || port);
app.set('json spaces', 2)

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const fetch = require('node-fetch');

// By importing the /routes directory that the index.js file is located in,
// our backend sever will have access to every API route we create
require('./routes')(app);

// console.log that your server is up and running
app.listen(port, (err) => {
	if(err) { console.log(err) };
	console.log('Listening on port ' + port);
});
