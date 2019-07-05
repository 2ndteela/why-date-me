import React, { Component } from 'react';
import StoryCard from '../../comps/StoryCard'
import Dialog from '../../comps/Dialog'
import Data from '../../assets/data.json'

import './style.css'

class Adventure extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            story: [],
            dialogMessage: '',
            showDialog: false,
            fullStory: Data.data
        }
        this.goNext = this.goNext.bind(this)
        this.clearStory = this.clearStory.bind(this)
        this.message = this.message.bind(this)
    }

    goNext(idx) {
        const temp = {...this.state.fullStory[idx]}
        let arr = [...this.state.story]
        arr.push(temp)

        this.setState({
            story: arr
        })
    }

    message(m) {
        console.log(m)
        this.setState({ dialogMessage: m, showDialog: true})
    }

    clearStory() {
        this.setState({ story: [] }, () => this.goNext(0))
    }

    componentDidMount() {
        this.goNext(0)
    }

    render() { 
        return ( 
            <div>
                <h1 className="header">Our Date</h1>
                <div className="page-content">
                    {
                        this.state.story.map((s, i) => {
                            if(i === 0)
                                return(
                                        <StoryCard question={s} callback={this.goNext} clear={this.clearStory} message={this.message} />
                                )
                            return(
                                <div className="card-holder">
                                    <div className="linker"></div>
                                    <StoryCard question={s} callback={this.goNext} clear={this.clearStory} message={this.message} />
                                </div>
                            )
                        })
                    }
                </div>
                <Dialog showDialog={this.state.showDialog} >
                    <div id='dialog-message' >{this.state.dialogMessage}</div>
                    <button onClick={() => this.setState({showDialog: false})} >Okay, Great!</button>
                </Dialog>
            </div>
         );
    }
}
 
export default Adventure;