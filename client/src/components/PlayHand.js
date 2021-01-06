import React, {Component} from 'react';
import handRock from "../assets/hand_rock.svg";
import handPaper from "../assets/hand_paper.svg";
import handScissors from "../assets/hand_scissors.svg";

/*
    0 -> Rock
    1 -> Paper
    2 -> Scissors
 */

class PlayHand extends Component {
    Hand = (props) => {
        return <img className={props.type + props.flip ? " flip" : ""} src={props.src} alt={props.type}/>
    }

    render() {
        return (
            <div className="">
                {
                    this.props.handId === 0 ?
                        <Hand type="rock" flip src={handRock}/>
                        :
                        this.props.handId === 1 ?
                            <Hand type="paper" flip src={handPaper}/>
                            :
                            <Hand type="scissors" flip src={handScissors}/>
                }
                {
                    this.props.enemyHandId === 0 ?
                        <Hand type="scissors" flip={false} src={handScissors}/>
                        :
                        this.props.enemyHandId === 1 ?
                            <Hand type="paper" flip={false} src={handPaper}/>
                            :
                            <Hand type="scissors" flip={false} src={handScissors}/>
                }
            </div>
        );
    }
}

export default PlayHand;