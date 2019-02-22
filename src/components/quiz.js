import React from 'react';
import quizData from './quizData';


class Quiz extends React.Component {

    render() {


        return (
        <div className = "container">

            <div className = "row">
            <p style = {styles.question} >Question 1: some text goes here</p>
            </div>
            <div className = "row">
            <button type = "button" style = {styles.button}>Answer 1 The first answer goes here and the button might need to be bigger</button>
            </div>
            
            <div className = "row">
            <button type = "button" style = {styles.button}>Answer 2 </button>
            </div>

            <div className = "row">
            <button type = "button" style = {styles.button} >Answer 3 </button>
            </div>

            <div className = "row">
            <button type = "button" style = {styles.button} >Answer 4</button>
            </div>

        </div>
        )
    }
}

const styles = {
    button: {
       margin: "10px",
       width: "400px",
       height: "50px"
    },

    question: {
        fontSize: 30
    }

};
export default Quiz;