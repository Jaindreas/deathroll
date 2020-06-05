import React from 'react';
import NumberGenerator from './Components/NumberGenerator';
import ScoreCard from './Components/ScoreCard';
import './App.css';

class App extends React.Component {
   state = {
      score1: 0,
      score2: 0,
      scoreboardplayer1: [],
      scoreboardplayer2: [],
      gamemessage: "Who goes first? Roll!",
      playermessage: "",
      buttonToggle1: "enabled",
      roll: 100,
      hasCheckedWhoGoesFirst: false
  } 

  gamesSequence  = () => {
    
    if (this.state.hasCheckedWhoGoesFirst) {
      console.log(this.state.score1)
      console.log(this.state.score2)
      this.decideWinner()
      this.addScoreBoard();
      setTimeout(() => this.defaultMessage(), 1500)
    } else {
    this.whoGoesFirst()
    setTimeout(() => this.defaultMessage(), 1500)
    }
  }

  whoGoesFirst = () => {
    switch (true) {
      case this.state.score1 < this.state.score2: 
        this.setState({
        gamemessage: "Player 1 Goes first"
      });
      break;
      case this.state.score2 < this.state.score1:
         this.setState({
          gamemessage: "Computer Goes first"
         });
       break;
      default: 
      this.setState({
        gamemessage: "Draw Game"
      })
   }
  }

  generateRandomNumber = (player, roll) => {
    let randomNumber = Math.round(Math.random() * (roll - 1) + 1);
    let randomNumber2 = Math.round(Math.random() * (roll - 1) + 1);
    this.setState({
      score1: randomNumber,
      score2: randomNumber2,
        //buttonToggle1: ''
    }, () => this.gamesSequence()) 
}

decideWinner = () => {
 
  switch (true) {
    case this.state.score1 > this.state.score2:
    this.setState({
      gamemessage: "Computer Rolls First",
      playermessage: "Next role is out of " + this.state.score2,
      roll: this.state.score2
  })
  break;
    case ((this.state.score2) > (this.state.score1)):
    this.setState({
      gamemessage: "Player 1 Rolls First",
      playermessage: "Next role is out of " + this.state.score1,
      roll: this.state.score1
  })
  break;
    case this.state.score1 === 1: 
    this.setState({
      playermessage: "Player 1 Loses"
    })
  break;
    case this.state.score2 === 1: 
    this.setState({
      playermessage: "Computer Loses"
    })
  break;
    default:
    this.setState({
      gamemessage: "Computer Encountered an Error"
    })  
  }
 }


 defaultMessage = () => {
  this.setState({
    score1: [0],
    score2: 0,
    //gamemessage: "Roll!",
    hasCheckedWhoGoesFirst: true
  });
}

addScoreBoard = () => {
  let newArray = this.state.scoreboardplayer1.concat(this.state.score1 + ",")
  let newArray2 = this.state.scoreboardplayer2.concat(this.state.score2 + ",")
  console.log(newArray)
  this.setState({
    scoreboardplayer1: [newArray],
    scoreboardplayer2: [newArray2]
  })
}

resetGame = () => {
  this.setState({
    score1: [0],
    score2: [0],
    scoreboardplayer1: [],
    scoreboardplayer2: [],
    gamemessage: "Who goes first? Roll!",
    buttonToggle1: "enabled",
    roll: 100,
    hasCheckedWhoGoesFirst: false
})

}

  render() {
    const style = {
      color: "royalblue"
    }
  return (
    <div className="App">
      <h1> <u> Death Roll</u> </h1>
      <h4> {this.state.gamemessage}</h4>
      <h3> {this.state.playermessage} </h3>
      
      <h4> Computer </h4>
      <h1 style = {style}>{this.state.score2}</h1>
     
      <h4> Player 1 </h4>
      <NumberGenerator style = {style} userscores = {this.state.score1} generate = {() => this.generateRandomNumber(1, this.state.roll)} buttontoggle = {this.state.buttonToggle1}  />
  
     <button onClick = {this.resetGame}>Reset Game</button>
      
      
      {/* <NumberGenerator style = {style} userscores = {this.state.score2} generate = {() => this.generateRandomNumber(2, this.state.roll)} buttontoggle = {this.state.buttonToggle2}  />  */}
      <div className = "scorecard">
      <ScoreCard scoreplayer1 = {this.state.scoreboardplayer1} scoreplayer2 = {this.state.scoreboardplayer2}  />
    
      </div>
     
    </div>
  );
  }
}

export default App;
