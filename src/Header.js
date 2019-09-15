import React, {Component} from 'react';
import Background from './img/bg-masthead.jpeg';
import './Header.css';

const mystyles= {
    backgroundImage: `url( ${Background})`,
    height: '50vh',
    backgroundSize:'cover'
}

class Header extends Component {
    render() {
        return (
            <header style={mystyles}>
                <h1>{this.props.title}</h1>
                <p>A Portfolio Them</p>
                <a href="#button">{this.props.button}</a>
            </header>

        );
    }
};
export default Header;

