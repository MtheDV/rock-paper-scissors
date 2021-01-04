import React, {Component} from 'react';

class Button extends Component {
    render() {
        return (
            <div>
                <button type="button" onClick={this.props.onClick} className={"btn font-3 " + this.props.className}>{this.props.children}</button>
            </div>
        );
    }
}

export default Button;