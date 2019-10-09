import db from "./firestore";

export function getAllUsers() {
    const users = db.collection("user").get().then(users => users.docs.map(value => value.data()));
    return users;
}