import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';
// import * as db from "../backend/db";

// const users = db.getAllUsers();
// console.log(users);
// const job_id = db.createXanderJob();
// console.log(job_id);

// db.getUserInfo("zHNglO26hPuC58e331tG");


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
