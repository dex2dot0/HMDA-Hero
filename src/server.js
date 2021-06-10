import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
const devCerts = require('office-addin-dev-certs');

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
console.log(dev);

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
	const devCertOptions = await devCerts.getHttpsServerOptions();

	let options = {
		key: devCertOptions.key,
		cert: devCertOptions.cert,
	};

	const { handler } = polka().use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	);

	createServer(options, handler).listen(ssl_port, (_) => {
		console.log(`> Running on https://localhost:${ssl_port}`);
	});
}
