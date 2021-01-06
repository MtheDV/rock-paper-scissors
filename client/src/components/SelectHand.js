import React, {Component} from 'react';
import Logo from "./Logo";

class SelectHand extends Component {

    render() {
        return (
            <div className="home">
                <Logo onClick={this.props.onClick}/>
            </div>
        );
    }
}

export default SelectHand;