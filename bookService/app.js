const app = require('express')();
const config = require('config').get('book');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/books');

app.use(morgan('combined'));
app.use(bodyParser.json());

app.use('/books', bookRoutes);

app.listen(config.port);