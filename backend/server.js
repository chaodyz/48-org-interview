const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const logger = require('morgan');
const db = require('./db.js');

const API_PORT = 3001;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const router = express.Router();

app.use(express.static(__dirname + '/../dist'));

// var express = require('express')
// var cors = require('cors')
// var app = express()

// const users = db.getAllUsers();
// users.then(res => console.log(res));
// const scores = db.addAnswers();
// console.log(scores);

app.get('/saveQuestions', (req, res) => {
  // res.send('Hello World!', res, req);
  db.addQuestionToDb();
});

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
