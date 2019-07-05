import React, { Component } from 'react';
import './style.css'

class Bubble extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            expanded: false
        }
    }

    toggle() {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    render() { 
        return ( 
            <div onClick={() => this.toggle()} 
            className={ this.state.expanded ? "bubble-body bubble-header" : "bubble-body"}
            style={{minHeight: this.props.width + "px", width: this.props.width + 'px', borderRadius: this.props.width + "px", left: this.props.left, top: this.props.top}}>
                
                <h2 className="bubble-label" style={{top: (this.props.width / 2) - 16 + 'px' }} >{this.props.label}</h2>
                <div className={this.state.expanded ? 'bubble-dialog expanded-bubble' : 'bubble-dialog'}>
                    {this.props.children}
                </div>

            </div>
         );
    }
}
 
export default Bubble;