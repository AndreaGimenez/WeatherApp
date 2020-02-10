const express = require('express');
const app = express();
const port = 5000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const fetch = require('node-fetch');
// By importing the /routes directory that the index.js file is located in,
// our backend sever will have access to every API route we create
require('./routes')(app);

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT :)' });
});

// console.log that your server is up and running
app.listen(port, (err) => {
	if(err) { console.log(err) };
	console.log('Listening on port ' + port);
});
