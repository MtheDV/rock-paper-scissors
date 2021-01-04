import React, {Component} from 'react';
import logo from "../assets/logo.svg";

class Navbar extends Component {
    render() {
        return (
            <div className={"navbar"}>
                <nav>
                    <ul>
                        {this.props.children}
                        <li className={"f-l"}><img className={"logo"} src={logo} alt={"rock paper scissors logo"}/></li>
                        <li className={"f-r"}><a href={"#"}>Login</a></li>
                        <li className={"f-r"}><a href={"#"}>Play</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;