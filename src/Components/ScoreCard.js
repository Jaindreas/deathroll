import React from 'react';
import './NumberGenerator';
import './ScoreCard.css';


class ScoreCard extends React.Component  {
    render() {
    return (
      <div className = "scoreboard">
       <h3><u>Scores</u> </h3>
       <h4> Player 1 </h4> 
       <ol>
        <li>{this.props.scoreplayer1} </li>
       </ol>
       <h4> Computer  </h4>
       <ol>
        <li>{this.props.scoreplayer2} </li>
       </ol>
      </div>
    )
   }
}

export default ScoreCard;