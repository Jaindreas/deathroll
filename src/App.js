import React from 'react';
import NumberGenerator from './Components/NumberGenerator';
import ScoreCard from './Components/ScoreCard';
import './App.css';

class App extends React.Component {
   state = {
      score1: 0,
      score2: 0,
      winner: "Not Declared",
      buttonToggle1: "enabled",
      buttonToggle2: '',
      roll: 100
  }
  generateRandomNumber = (player, roll) => {
    let randomNumber = Math.round(Math.random() * (roll - 1) + 1);
    console.log(roll);
    if (player === 1) {
    this.setState({
      score1: randomNumber,
        buttonToggle1: '',
        buttonToggle2: "enabled"
    })  
  } else if (player === 2) {
    this.setState({
      score2: randomNumber,
        buttonToggle2: '' 
    } , () => this.decideWinner())
  }
}
 decideWinner = () => {
  if (this.state.score1 === 1) {
    this.setState({
      winner: "Player 1 Loses"
    })
  } else if ((this.state.score1) > (this.state.score2)) {
       this.setState({
           winner: "Next role is out of " + this.state.score2,
           buttonToggle1: "enabled",
           buttonToggle2: "enabled",
           roll: this.state.score2
       })
   } else if ((this.state.score2) > (this.state.score1)) {
      this.setState({
           winner: "Next role is out of " + this.state.score1,
           buttonToggle1: "enabled",
           buttonToggle2: "enabled",
           roll: this.state.score1
      })
      
   } 
 }

 


  render() {

    const style = {
      color: "royalblue"
    }
  return (
    <div className="App">
      <h1> <u> Death Roll</u> </h1>
      <h4> Player 1 </h4>
      <NumberGenerator style = {style} userscores = {this.state.score1} generate = {() => this.generateRandomNumber(1, this.state.roll)} buttontoggle = {this.state.buttonToggle1}  />
      <h4> Player 2 </h4>
      <NumberGenerator style = {style} userscores = {this.state.score2} generate = {() => this.generateRandomNumber(2, this.state.roll)} buttontoggle = {this.state.buttonToggle2}  /> 
      <ScoreCard number = {this.state.score1} />
      <h4> {this.state.winner}</h4>
    </div>
  );
  }
}

export default App;
