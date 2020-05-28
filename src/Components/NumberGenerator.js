import React from 'react';

class NumberGenerator extends React.Component {
  state = {
      userScore : 0 
  }
    // Generate Random Number Method
    generateRandomNumber = () => {
        let randomNumber = Math.round(Math.random() * 100);
        this.setState({userScore: randomNumber});   
    }

    render () {
        return (
            <div class = "numberGenerator">
            <h1>{this.state.userScore}</h1>
            <button onClick = {this.generateRandomNumber}> Death Roll </button>
            </div>
        )
        
    }
}
export default NumberGenerator;