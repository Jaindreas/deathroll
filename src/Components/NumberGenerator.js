import React from 'react';

class NumberGenerator extends React.Component {
  state = {
      userScores : [
        {score: 0},
        {score: 0}
      ],
      winner: "No Winner "
  }

    // Generate Random Number Method
    generateRandomNumber = () => {
        let randomNumber = Math.round(Math.random() * 100);
        let randomNumber2 = Math.round(Math.random() * 100);
        this.setState({
            userScores: [
            {score: randomNumber},
            {score: randomNumber2} 
            ]
        }, () => this.decideWinner())
        
    }

     decideWinner = () => {
        if ((this.state.userScores[0].score) > (this.state.userScores[1].score)) {
            this.setState({
                winner: "Player 1"
            })
        } else {
            this.setState({
                winner: "Player 2"
            })
        }
    }
    render () {
        return (
            <div className = "numberGenerator">
            <h1>{this.state.userScores[0].score}</h1>
            <h1>{this.state.userScores[1].score}</h1>
            <h2>{this.state.winner + " Wins!"}</h2>
            <button onClick = {this.generateRandomNumber}> Death Roll </button>
            <button onClick = {this.generateRandomNumber}> Death Roll </button>
            </div>
        )
        
    }
}
export default NumberGenerator;