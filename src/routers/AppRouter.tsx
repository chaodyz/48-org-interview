import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ManagementPortal from '../pages/management-portal.page';
import InputQuestionPage from '../pages/input-question/Input-question.page';
import Welcome from '../examples/Welcome';
import InterviewResultPage from '../pages/Interview-results.page'
import QuestionsPage from '../pages/question-list/questions.page';
import SurveyPage from '../pages/survey/surveyPage';
import logo from '../assets/logo_1977_hd.png';


export default function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <div className="blue darken-3 nav-wrapper">
            <Link to="/">    <img src={logo} className="brand-logo" style={{
              width: 100, marginLeft: 50
            }} /></Link>

            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>

              </li>
              <li>
                <Link to="/management-portal">Management Portal</Link>
              </li>
              <li>
                <Link to="/input-question">Input Questions</Link>
              </li>
              <li>
                <Link to="/question-list">Question Lists</Link>
              </li>
              <li>
                <Link to="/survey-page">Start Survey</Link>
              </li>
              <li>
                <Link to="/interview-result">Interview Result</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/management-portal">
            <ManagementPortal></ManagementPortal>
          </Route>
          <Route path="/input-question">
            <InputQuestionPage></InputQuestionPage>
          </Route>
          <Route path="/interview-result">
            <InterviewResultPage></InterviewResultPage>
          </Route>
          <Route path="/question-list">
            <QuestionsPage></QuestionsPage>
          </Route>
          <Route path="/survey-page">
            <SurveyPage></SurveyPage>
          </Route>
          <Route path="/">
            <Welcome name="User" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
