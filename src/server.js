import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
require('dotenv').config()
const { readFileSync } = require('fs');

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const { createServer } = require('https');
const ssl_port = 443;

dev ? runLocalServer() : runProductionServer();

function runProductionServer() {
	polka() // You can also use Express
		.use(compression({ threshold: 0 }), sirv('static', { dev }), sapper.middleware())
		.listen(PORT, (err) => {
			if (err) console.log('error', err);
		});
}

async function runLocalServer() {
	try {
		if (!process.env.KEYPATH || !process.env.CERTPATH) {
			console.error('You must install certs prior to running a local build. Run "npm run certs" to install locally. See the README for more info.');
			throw 'Missing local certs';
		}
		let options = {
			key: readFileSync(process.env.KEYPATH),
			cert: readFileSync(process.env.CERTPATH),
		};
	
		const { handler } = polka().use(
			compression({ threshold: 0 }),
			sirv('static', { dev }),
			sapper.middleware()
		);
	
		createServer(options, handler).listen(ssl_port, (_) => {
			console.log(`> Running on https://localhost:${ssl_port}. Server should not listen on port 3000, ignore error`);
		});
	} catch (error) {
		
	}
}
