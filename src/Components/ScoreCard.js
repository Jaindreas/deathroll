import React from 'react';
import './NumberGenerator';


class ScoreCard extends React.Component  {
    render() {
    return (
      <div>
       <h3>Scores: {this.props.number} </h3>
      </div>
    )
   }
}

export default ScoreCard;