import React from 'react';
import { Question } from '../../model';
import QuestionCard from '../../components/questionCard';
import { questions } from '../../mock';
import { withRouter } from 'react-router-dom';


interface MyState {
  questions: Question[];
}
class QuestionsPage extends React.Component<any, MyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      questions
    };

  }

  // componentDidMount() {
  //   fetch("http://localhost:3001/getQuestions")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         console.log(result)
  //         // this.setState({
  //         //   isLoaded: true,
  //         //   items: result.items
  //         // });
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         console.error(error)
  //         // this.setState({
  //         //   isLoaded: true,
  //         //   error
  //         // });
  //       }
  //     )
  // }
  handleClick = () => {
    this.props.history.push('/survey-page');
  }

  getQuestionListView = (questions: Question[]) => {
    return questions.map((question, index) => <QuestionCard title={'Question ' + (index + 1)} content={question.question}></QuestionCard>)
  }

  render() {
    return (
      <div>
        <div className="simpleCards">       {this.getQuestionListView(this.state.questions)}</div>

        <button className=" submit-button btn waves-effect waves-light" type="submit" name="action" onClick={this.handleClick}>Start Survey
              <i className="material-icons right">send</i>
        </button>

      </div>
    );
  }
}

export default withRouter(QuestionsPage);



