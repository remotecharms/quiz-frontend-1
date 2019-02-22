import React from 'react';

class Quiz extends React.Component {

   
    render() {

        return (
        <div className = "container">

            <div className = "row">
            <p style = {styles.question} >{this.props.question}</p>
            </div>
            <div className = "row">
            <button type = "button" style = {styles.button}>{this.props.answer}</button>
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