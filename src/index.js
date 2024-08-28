const express = require('express');
require('dotenv/config');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const { PORT } = require('./config/variables.js');
const { responseHandler } = require('./helper/responseHandler.js');
require('./config/db.js');
 
const app = express();
app.use(express.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(responseHandler());
app.options('*', cors());
app.use(cookieParser());
app.use(morgan('dev'));
app.use('/v1', routes);

const server = app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at ${PORT}`);
});
module.exports = server;