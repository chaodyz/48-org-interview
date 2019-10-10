import React from 'react';
import { Question } from '../../model';
import { TextField, Button } from '@material-ui/core';
import QuestionCard from '../../components/questionCard';
import './surveyPage.css';
import { questions } from '../../mock';
import '../App.css';
import { withRouter } from 'react-router-dom';


interface MyState {
  questions: Question[];
  currentIndex: number;
  response: string[];

}
class SurveyPage extends React.Component<any, MyState> {
  handleNext = () => {
    this.setState((prevState, _props) => {
      return { currentIndex: prevState.currentIndex + 1 };
    })
    if ((this.state.currentIndex + 1) === this.state.questions.length) {
      this.props.history.push('/management-portal');
    }
  }
  constructor(props) {
    super(props);

    this.state = {
      questions,
      currentIndex: 0,
      response: []
    }
  }

  getSurveyView = (question) => {
    return (
      <div className="survey-mat">
        {/* <QuestionCard className="questionCard" title={'Question: ' + (this.state.currentIndex + 1)} content={question.question}></QuestionCard> */}

        <div className="card-main">
          <div className="card grey lighten-5">
            <div className="question-card-content black-text">
              <span className="card-title">{'Question: ' + (this.state.currentIndex + 1)}</span>
              <p> {question.question}</p>
            </div>
          </div>
        </div>

        <TextField
          id="outlined-full-width"
          label="Answer"
          style={{ margin: 20, width: 600 }}
          placeholder="Placeholder"
          helperText="Type your response here"
          fullWidth
          margin="normal"
          variant="outlined"
          multiline
          rows="5"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div >
    )
  }

  render() {
    return (
      <div className="survey-main">
        {this.getSurveyView(this.state.questions[this.state.currentIndex])}
        <Button variant="contained" color="primary" className="submit-button" onClick={this.handleNext}>
          {(this.state.currentIndex + 1) === this.state.questions.length ? 'Finish' : 'Next'}
        </Button>
      </div>
    );
  }
}

export default withRouter(SurveyPage);



