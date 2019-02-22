import React from 'react'

class Quiz extends React.Component {

    render() {
        return (
        <div className = "container">

            <div className = "row">
            <p>Question 1 some text goes here</p>
            </div>
            <div className = "row">
            <button type = "button" style = {styles.button}>Answer 1</button>
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
       margin: "10px"
    }

};
export default Quiz;