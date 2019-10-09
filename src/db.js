import db from "./firestore";

export function getAllUsers() {
    return db.collection("user").get().then(users => users.docs.map(value => value.data()));
};

export function getUserInfo(userId) {
    //get user, return all questions, score for each question, answers, weights, attributes
  let result = [];
  let answerQuery = db.collection("answer").where("user_id", "==", userId);
  let answerArrayWithSelectedUserId = [];
  answerQuery.get().then(snap => {
    snap.docs.forEach(value => {
      answerArrayWithSelectedUserId[value.data()["question_id"]] = value.data();
    });
  });
  db.collection("question").get().then(snap => {
    snap.docs.forEach(value => {
      result.push(Object.assign(answerArrayWithSelectedUserId.hasOwnProperty(value.id), value.data()));
    });
  });
  return result;
};

// ObjectArray: [{questionString, { {teamwork:4},{communication:6} } }  , ...]
export function addQuestionToDb(questions) {
  let ref = db.collection("question");
  let ids = [];
  questions.forEach(value => {
    ids.push(ref.doc().id);
    ref.add(value);
  });
  return ids;
};