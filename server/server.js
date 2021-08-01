const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const fs = require('fs');
const path = require('path');

const http = require('http');
const https = require('https');

// load local environment variables

const { PORT = 8080, NODE_ENV = 'development' } = process.env;
console.log(`NODE_ENV=${NODE_ENV}\nPORT=${PORT}`);

// set up express app
let app = express();

// set up middleware
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(cors());

// initialization point for server
// this is loaded as an https server if in development environment
// else just use whatever the host environment uses
let server;

// set up https on dev environment
if (NODE_ENV === 'development') {
	require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

	const key = fs.readFileSync(process.env.SSL_KEY_FILE);
	const cert = fs.readFileSync(process.env.SSL_CRT_FILE);
	const options = { key, cert };

	server = https.createServer(options, app);
} else {
	server = http.createServer(app);
}

// routing
app.get('/test', (_req, res) => {
	res.send('Server is up and running 👍');
});

app.get('/', (_req, res) => {
	res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

// launch server
server.listen(PORT, () => console.log(`Running server on port ${PORT}`));
