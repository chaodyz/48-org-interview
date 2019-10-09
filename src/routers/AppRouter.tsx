import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ManagementPortal from '../pages/management-portal.page';
import InputQuestionPage from '../pages/input-question/Input-question.page';
import Welcome from '../examples/Welcome';
import InterviewResultPage from '../pages/Interview-results.page'

export default function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/management-portal">Management Portal</Link>
            </li>
            <li>
              <Link to="/input-question">Input Questions</Link>
            </li>
            <li>
              <Link to="/interview-result">Interview Result</Link>
            </li>
          </ul>
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
          <Route path="/">
            <Welcome name="Diz" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
