import React, {Component} from 'react';
import handRock from "../assets/hand_rock.svg";
import handPaper from "../assets/hand_paper.svg";
import handScissors from "../assets/hand_scissors.svg";

/*
    0 -> Rock
    1 -> Paper
    2 -> Scissors
 */
const Hand = (props) => {
    return <img className={props.type + (props.flip ? " flip" : "")} src={props.src} alt={props.type}/>
}

class PlayHand extends Component {
    render() {
        return (
            <div className="flex_container">
                <div className="play_hand">
                    <div className="hand_left">
                    {
                        this.props.handId === 0 ?
                            <Hand type="rock" flip={true} src={handRock}/>
                            :
                            this.props.handId === 1 ?
                                <Hand type="paper" flip={true} src={handPaper}/>
                                :
                                <Hand type="scissors" flip={true} src={handScissors}/>
                    }
                    </div>
                    <div className="hand_right">
                    {
                        this.props.enemyHandId === 0 ?
                            <Hand type="rock" flip={false} src={handRock}/>
                            :
                            this.props.enemyHandId === 1 ?
                                <Hand type="paper" flip={false} src={handPaper}/>
                                :
                                <Hand type="scissors" flip={false} src={handScissors}/>
                    }
                    </div>
                </div>
            </div>
        );
    }
}

export default PlayHand;