import React, { Component } from 'react';
import Header from './components/header';
import QuestionCounter from './components/questionCounter';
import Score from './components/score';
import Quiz from './components/quiz';
import quizData from './components/quizData';


console.log(quizData);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      total: quizData.length,
      score: 0
    }

  }

  render() {
    return (
      <div className="container">
        <Header />
        <Quiz question = "Question 1 passed as a prop" answer = "The first answer passed as a prop" />
        <QuestionCounter />
        <Score />
      </div>
    );
  };
}


export default App;
