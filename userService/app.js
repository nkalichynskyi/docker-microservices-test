const app = require('express')();
const config = require('config').get('user');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use('/users', userRoutes);

app.listen(config.port);