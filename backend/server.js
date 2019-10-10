const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const logger = require('morgan');
const db = require('./db.js');

const API_PORT = 3001;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
const router = express.Router();

// routes
const routes = require('./api/routes/routes');
app.use('/', routes);

app.use(express.static(__dirname + '/../dist'));

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
