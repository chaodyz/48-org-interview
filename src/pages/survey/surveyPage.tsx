import React from 'react';
import { Question } from '../../model';
import { TextField, Button } from '@material-ui/core';
import QuestionCard from '../../components/questionCard';
import './surveyPage.css';
import { questions } from '../../mock';
interface Props { }

interface MyState {
  questions: Question[];
  currentIndex: number;
  response: string[];
}
class SurveyPage extends React.Component<Props, MyState> {
  handleNext = () => {
    this.setState((prevState, _props) => {
      return { currentIndex: prevState.currentIndex + 1 };
    })
  }
  constructor(props: Props) {
    super(props);

    this.state = {
      questions,
      currentIndex: 0,
      response: []
    }
  }

  getSurveyView = (question) => {
    return (
      <div>
        <QuestionCard className="questionCard" title={'Question: ' + (this.state.currentIndex + 1)} content={question.question}></QuestionCard>
        <TextField
          id="outlined-full-width"
          label="Answer"
          style={{ margin: 8 }}
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
      <div>
        {this.getSurveyView(this.state.questions[this.state.currentIndex])}
        <Button variant="contained" color="primary" className="addButton" onClick={this.handleNext}>
          {(this.state.currentIndex + 1) === this.state.questions.length ? 'Finish' : 'Next'}
        </Button>
      </div>
    );
  }
}

export default SurveyPage;



