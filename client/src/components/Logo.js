import React, {Component} from 'react';
import handRock from "../assets/hand_rock.svg";
import handPaper from "../assets/hand_paper.svg";
import handScissors from "../assets/hand_scissors.svg";

class Logo extends Component {
    render() {
        return (
            <div className="logo_main">
                <div className="rock_wrap">
                    <img className="rock flip" src={handRock} alt="rock" onClick={(e) => this.props.onClick(e, 0)}/>
                </div>
                <div className="paper_wrap">
                    <img className="paper flip" src={handPaper} alt="paper" onClick={(e) => this.props.onClick(e, 1)}/>
                </div>
                <div className="scissors_wrap">
                    <img className="scissors flip" src={handScissors} alt="scissors" onClick={(e) => this.props.onClick(e, 2)}/>
                </div>
            </div>
        );
    }
}

export default Logo;