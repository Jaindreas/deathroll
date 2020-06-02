import react from 'React';


decideWinner = () => {
    if ((this.state.userScores[0].score) > (this.state.userScores[1].score)) {
        this.setState({
            winner: "Red"
        })
    } else {
        this.setState({
            winner: "Blue"
        })
    }
}

export default decideWinner;