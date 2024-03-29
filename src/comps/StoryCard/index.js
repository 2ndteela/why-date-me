import React, { Component } from 'react';
import './style.css'

class StoryCard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selected: false
         }
    }

    selectOption(idx, clicked) {
        if(idx === -1) this.props.message(this.props.question.answers[clicked].errorMsg)
        else if(idx === 0) this.props.clear()

        else if(!this.state.selected) {
            this.setState({
                selected: clicked
            })
            this.props.callback(idx)
        }
    }

    render() { 
        console.log(this.props.question)
        if(!this.props.question) return null
        return ( 
            <div className='card-body'>
                <h2>{this.props.question.text}</h2>
                <div className='card-options'>
                    {this.props.question.answers.map((o, i) => {
                        return ( 
                            <button
                                onClick={() => this.selectOption(o.idx, i)} 
                                className={this.state.selected === i ? "selected-option" : ""} 
                            >{o.text}</button>
                        )
                    })}
                </div>
            </div>

         );
    }
}
 
export default StoryCard