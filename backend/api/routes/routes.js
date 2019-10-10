const express = require('express');
const router = express.Router();
const db = require('../../db.js');

router.get("/users", function(req, res, next) {
    console.log("1");
    db.getAllUsers().then(result => res.send(result));
  });
  
  router.get("/answers", function(req, res, next) {
    console.log("2.-1");
    db.getAnswers().then(result => res.send(result))
  });

  router.post("/answers", function(req, res, next) {
    console.log("2");
    console.log(req.body);
    db.addAnswers(req.body.user_answers).then(result => res.send(result))
  });
  
  router.post('/saveQuestions', (req, res) => {
    console.log("3");
    console.log(req.body);
    db.addQuestionToDb(req.body.questions).then(result => res.send(result));
  });
  
  router.post('/getQuestions', (req, res) => {
    console.log("4");
    console.log(req.body);
    db.getUserInfo(req.body.user_id).then(result => res.send(result));
  });

  module.exports = router;