import React, {Component} from 'react';
import Logo from "./Logo";

class SelectHand extends Component {
    render() {
        return (
            <div className="flex_container">
                <Logo onClick={this.props.onClick}/>
            </div>
        );
    }
}

export default SelectHand;