import React, {Component} from 'react';

class Score extends Component {
    render() {
        return (
            <div className="score">
                <h2 className="score_left">{this.props.score}</h2>
                <h2 className="score_right">{this.props.enemyScore}</h2>
            </div>
        );
    }
}

export default Score;