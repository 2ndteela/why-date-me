import React, { Component } from 'react';
import StoryCard from '../../comps/StoryCard'

import './style.css'

class Adventure extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            story: [],
            fullStory: [
                {
                    text: 'What should we do on our date?',
                    answers: [
                        {
                            text: 'Dinner and a movie',
                            idx: 1
                        },
                        // {
                        //     text: 'Cook dinner and cookies',
                        //     idx: -1
                        // }, 
                        // {
                        //     text: 'Hike',
                        //     idx: -1
                        // },
                        // {
                        //     text: 'Stand me up',
                        //     idx: -1
                        // }
                    ]
                },
                {
                    text: 'Where do we go for dinner?',
                    answers: [
                        {
                            text: "Zupa's",
                            idx: 2
                        },
                        // {
                        //     text: 'Cafe Rio',
                        //     idx: 3
                        // },
                        // {
                        //     text: 'Mcdonalds',
                        //     idx: 4
                        // },
                        // {
                        //     text: 'Red Lobster',
                        //     idx: 5
                        // }
                    ]
                },
                {
                    text: "We go to dinner and at first it's pretty awkward, but we start to get some banter going. I start laughing at your jokes, you start laughing at mine and things start looking good. You even get me to almost spit out my drink, but I instead make a weird noise and keep it in. We make our way back to my car and start talking about what movie we should see. Which kind of film do you like?",
                    answers: [
                        {
                            text: 'Marvel Moive',
                            idx: 3
                        },
                        // {
                        //     text: 'Cute Pixar Movie',
                        //     idx: 4
                        // },
                        // {
                        //     text: 'Rom-Com',
                        //     idx: 5
                        // }, 
                        // {
                        //     text: 'Horror',
                        //     idx: 6
                        // }
                    ]
                }, 
                {
                    text: "Wow, that's acutally really cool. I love the Marvel Movies! I admit I have a real nerdy side and tell you a cool fact or two about the movie, but hold back the other 500 I want to tell you because that would be annoying. I'll even get popcorn if you want.",
                    answers: [
                        {
                            text: 'Head back home',
                            idx: 4
                        }
                    ]
                },
                {
                    text: "After a fun night together I drive you back to your aparment and we talk for a minute in the car, awkwardly deciding when you would like to leave. Finally I have to let you go and I walk you back to your door. There's a little moment and I go for a friendly hug that lasts a little longer than normal; Just long enough to show I feel a little spark. I go back home and stare at my phone for a little while... hoping for a post-date text. I roll over and try to go to sleep, but then my phone buzzes and my heart leaps. Your name is on my phone, and I can't help but smile.",
                    answers: [
                        {
                            text: 'Start Over',
                            idx: -1
                        }
                    ]
                }
            ]
        }
        this.goNext = this.goNext.bind(this)
    }

    goNext(idx) {
        const temp = {...this.state.fullStory[idx]}
        let arr = [...this.state.story]
        arr.push(temp)

        this.setState({
            story: arr
        })
    }

    render() { 
        return ( 
            <div>
                <h1 className="header">Our Date</h1>
                <div className="page-content">
                    <StoryCard question={this.state.fullStory[0]} callback={this.goNext} />
                    {
                        this.state.story.map((s, i) => {
                            return(
                                <div className="card-holder">
                                    <div className="linker"></div>
                                    <StoryCard question={s} callback={this.goNext} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
         );
    }
}
 
export default Adventure;