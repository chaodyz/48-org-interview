const helper = require('q');

const db = require('./firestore');
const request = require('request');

function getAllUsers() {
  const users = db
    .collection('user')
    .get()
    .then(users => users.docs.map(value => {
      user = value.data();
      user.id = value.id;
      return user;
    }));
  return users;
}

function createXanderJob(user_answers) {
  const url = 'http://staging-crane.eu-west6.per.dev.gcp.ulti.io/documents';
  const body = {
    documents: user_answers.map(answer => {
      return {"id": "", "text": answer.answer}
    }),
    methods: [{ method: 'emotions' }, { method: 'workplace_themes' }]
  };

  request.post(url, { json: body }, async function(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
      await helper.delay(2000);
      let job_id = body['job_id'];
      return getXanderData(user_answers, job_id);
      // return body["job_id"];
    } else {
      console.log("no xander job")
      return null;
    }
  });
}

function getXanderData(user_answers, job_id) {
  const url = 'http://staging-crane.eu-west6.per.dev.gcp.ulti.io/status/' + job_id;
  // console.log("Anas is the best"); // by Glen

  request.get(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      let res = JSON.parse(body);
      console.log(res['status']);
      addAnswersToDb(user_answers, res['message']['document_scores']);
      return res['message']['document_scores'];
    } else {
      console.log('no xander scores');
      return null;
    }
  });
}

function addAnswersToDb(user_answers, scores) {
  // user_answers = [
  //     {user_id: 1,
  //     question_id: 1,
  //     answer: "helloooooooooooo",
  //     weights: {Management: 1, Teamwork:7, "Remote Sites":2}},
  //     {user_id: 1,
  //     question_id: 2,
  //     answer: "heyyyyyyyyyyyy",
  //     weights: {Management: 1, Teamwork:7, "Remote Sites":2}}
  // ]

  let answers = [];
  for (let i = 0; i < user_answers.length; i++) {
    const user_answer = user_answers[i];
    const answer_scores = scores[i];
    const answer = {
      question_id: user_answer.question_id,
      user_id: user_answer.user_id,
      score: calculateAnswerScore(
        answer_scores['workplace_themes']['workplace_theme_scores'],
        user_answer.weights,
      ), // calc this calculateScore(scores, weights)
      answer: user_answer.answer,
      emotions: answer_scores['emotions'],
      attributes: answer_scores['workplace_themes']['workplace_theme_scores'],
    };
    answers.push(answer);
  }

  answers.forEach(answer => db.collection('answer').add(answer));
  calculateUserScore(answers);
}

function calculateUserScore(answers) {
  let sum = 0;
  answers.forEach(answer => (sum += answer.score));
  sum = sum / answers.length;
  db.collection('user')
    .doc(String(answers[0].user_id))
    .update({ score: sum });
}

function calculateAnswerScore(scores, weights) {
  let sum = 0;
  scores
    .filter(score => weights.hasOwnProperty(score['label']))
    .map(score => (sum += score['score'] * weights[score['label']]));
  return sum * 10;
}

async function getAnswers() {
  const answers = db
    .collection('answer')
    .get()
    .then(as => as.docs.map(value => {
      answer = value.data();
      answer.id = value.id;
      return answer;
    }));
  return answers;
}

async function addAnswers(user_answers) {
  const scores = createXanderJob(user_answers);
}

async function getUserInfo(userId) {
  //get user, return all questions, score for each question, answers, weights, attributes
  let answerQuery = db.collection('answer').where('user_id', '==', userId);

  const questions = await db.collection("question").get()
  .then(qs => qs.docs.map(value => {
    question = value.data();
    question.id = value.id;
    return question;
  }));

  const answers = await answerQuery.get()
  .then(as => as.docs.map(value => {
    answer = value.data();
    answer.id = value.id;
    answer.question = questions.find(question => question.id == answer.question_id)
    return answer;
  }));

  return answers;
}

// ObjectArray: [{questionString, { {teamwork:4},{communication:6} } }  , ...]
// more like: { "questions": [ {"question": "a?", "weights": { "a1": 2, "a2": 5 }}, {"question": "b?", "weights":  { "b1": 3, "b2": 7 }} ] }
async function addQuestionToDb(questions) {
  const promises = questions.map(async question => {
    const res = await db.collection("question").add(question)
    question.id = res.id;
    return question;
  }
    );
  await promises
  return Promise.all(promises);
}
module.exports = {
  getAllUsers,
  addAnswers,
  addQuestionToDb,
  getUserInfo,
  addAnswersToDb,
  createXanderJob,
  getAnswers,
};
