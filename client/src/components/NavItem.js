import React, {Component} from 'react';

class NavItem extends Component {
    render() {
        return (
            <div>
                <li>
                    <a href={this.props.href}>{this.props.children}</a>
                </li>
            </div>
        );
    }
}

export default NavItem;