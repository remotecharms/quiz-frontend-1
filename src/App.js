import React, { Component } from 'react';
import Header from './components/header';
import QuestionCounter from './components/questionCounter';
import Score from './components/score';
import Quiz from './components/quiz';
import quizData from './components/quizData';


console.log(quizData);

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Quiz />
        <QuestionCounter />
        <Score />
      </div>
    );
  }
}

export default App;
