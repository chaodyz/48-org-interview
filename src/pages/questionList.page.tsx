import React from 'react';
import './App.css';
import {  Question } from '../model';


interface QuestionListPageState {
  question: Question[];
}

class QuestionListPage extends React.Component<any, QuestionListPageState> {
  constructor(props: any) {
    super(props);
    this.state = {
      question: []
    };
  }

  render() {
    return <div className="QuestionListPage">
    </div>
  }
}

export default QuestionListPage;
