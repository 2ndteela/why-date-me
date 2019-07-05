import React, { Component } from 'react';
import './style.css'


class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        if(!this.props.showDialog) return null
        return ( 
        <div id="dialog-container">
            <div id="dialog-screen"></div>
            <div id="dialog-body">
                {this.props.children}
            </div>
        </div> 
        );
    }
}
 
export default Dialog;