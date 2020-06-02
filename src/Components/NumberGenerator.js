import React from 'react';
import './NumberGenerator.css';
import './ScoreCard';

class NumberGenerator extends React.Component {
    render () {
        
        return (
            <div className = "numberGenerator">
            <button disabled={!this.props.buttontoggle} className = "buttons" onClick = {this.props.generate}> Death Roll </button>
            <div className = "ScoresTogether">
            <h1 style = {this.props.style} className = "score1">{this.props.userscores}</h1>
            </div>
            </div>
           
        )   
    }
}
export default NumberGenerator;