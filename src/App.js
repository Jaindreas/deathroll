import React from 'react';
import NumberGenerator from './Components/NumberGenerator';
import ScoreCard from './Components/ScoreCard';
import './App.css';

class App extends React.Component {
   state = {
      userScores : [
        {score: 0},
      ],
      winner: "No Winner ",
      buttonToggle: "enabled"
  }
  generateRandomNumber = () => {
    let randomNumber = Math.round(Math.random() * 100);
    this.setState({
      userScores : [
        {score: randomNumber}
      ],
        buttonToggle: '' 
    }) 
}
  
  render() {
  return (
    <div className="App">
      <h1> <u> Death Roll</u> </h1>
      <h4> Player 1 </h4>
      <NumberGenerator userscores = {this.state.userScores[0].score} buttontoggle = {this.state.buttonToggle} generate = {this.generateRandomNumber} />
      <h4> Player 2 </h4>
      <NumberGenerator userscores = {this.state.userScores[0].score} buttontoggle = {this.state.buttonToggle} generate = {this.generateRandomNumber} />
      <ScoreCard number = {this.state.userScores[0].score} />
    </div>
  );
  }
}

export default App;
