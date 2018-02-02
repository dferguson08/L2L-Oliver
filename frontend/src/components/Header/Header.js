import React, { Component } from 'react';

class Header extends Component {
render() {
    return (
        // inside here, using jsx you can add any basic HTML element or react components
        <header>
            <h2>{this.props.text}</h2>
         
        </header>
        // ^ in a js expression, can do anything in js that has an output
    );
}
}

export default Header;
