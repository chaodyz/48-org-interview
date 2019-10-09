import db from "./firestore";

export function getAllUsers() {
    const users = db.collection("user").get().then(users => users.docs.map(value => value.data()));
    return users;
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
      result.push(Object.assign(answerArrayWithSelectedUserId[value.id],value.data()));
    });
  });
  return result;
};
