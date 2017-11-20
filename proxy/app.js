const app = require('express')();
const httpProxy = require('http-proxy');
const config = require('config');
const morgan = require('morgan');

app.use(morgan('combined'));

const apiProxy = httpProxy.createProxyServer();

const mapping = [
	{
		endpoint: '/users',
		serviceUrl: `http://userService:${config.user.port}`
	},
	{
		endpoint: '/books',
		serviceUrl: `http://bookService:${config.book.port}`
	}
];

mapping.forEach((val) => {
	app.all(`${val.endpoint}`, (req, res) => {
		apiProxy.web(req, res, {target: val.serviceUrl})
	});

	app.all(`${val.endpoint}/*`, (req, res) => {
		apiProxy.web(req, res, {target: val.serviceUrl})
	});
});

app.listen(config.proxy.port);
