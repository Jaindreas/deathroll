import React from 'react';
import NumberGenerator from './Components/NumberGenerator';
import ScoreCard from './Components/ScoreCard';
import './App.css';

class App extends React.Component {
   state = {
      score1: 0,
      score2: 0,
      winner: "No Winner ",
      buttonToggle1: "enabled",
      buttonToggle2: "enabled"
  }
  generateRandomNumber = (player) => {
    let randomNumber = Math.round(Math.random() * 100);
    if (player === 1) {
    this.setState({
      score1: 1,
        buttonToggle1: '' 
    })
  } else {
    this.setState({
      score2: 2,
        buttonToggle2: '' 
    })
  }
}

// decideWinner = () => {
//   if ((this.state.userScores[0].score) > (this.state.userScores[0].score)) {
//       this.setState({
//           winner: "Player 1"
//       })
//   } else {
//       this.setState({
//           winner: "Player 2"
//       })
//   }
// }
  render() {
  return (
    <div className="App">
      <h1> <u> Death Roll</u> </h1>
      <h4> Player 1 </h4>
      <NumberGenerator userscores = {this.state.score1} generate = {() => this.generateRandomNumber(1)} buttontoggle = {this.state.buttonToggle1}  />
      <h4> Player 2 </h4>
      <NumberGenerator userscores = {this.state.score2} generate = {() => this.generateRandomNumber(2)} buttontoggle = {this.state.buttonToggle2}  /> 
      <ScoreCard number = {this.state.score1} />
      <h4> Winner is {this.state.winner}</h4>
    </div>
  );
  }
}

export default App;
