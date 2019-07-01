import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import './style.css'

class Bio extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            stats: [
                {
                    name: 'Humor',
                    rating: 90
                },
                {
                    name: 'Random Facts',
                    rating: 80
                }, 
                {
                    name: 'Cooking',
                    rating: 90
                },
                {
                    name: 'Singing',
                    rating: 50
                },
                {
                    name: 'Car / Shower Singing',
                    rating: 80
                },
                {
                    name: 'SVG Drawing',
                    rating: 70
                },
                {
                    name: 'Romanticism',
                    rating: 120
                },
                {
                    name: 'Cuddling',
                    rating: 100
                },
                {
                    name: 'Forgetting Your Birthday',
                    rating: 0
                },
                {
                    name: 'Making Graphs',
                    rating: 90
                },

            ]
        }
    }
    render() { 
        return ( 
            <div style={{overflowX: 'hidden'}}>
                <h1 className="header" >Biography</h1>
                <div className="page-content">
                    <h1 className="sub-header" >Overview</h1>
                    <div id="bio-graph">
                        {
                            this.state.stats.map((r, i) => {
                                if(i === this.state.stats.length - 1) 
                                    return (
                                    <div className="graph-bar" style={{paddingBottom: '0px'}}>
                                        <span className="rating-tag">{r.name}</span>
                                        <div className="rating-bar" style={{ width: `${r.rating}%` }}></div>
                                    </div>
                                    )
                                return (
                                    <div className="graph-bar">
                                        <span className="rating-tag">{r.name}</span>
                                        <div className="rating-bar" style={{ width: `${r.rating}%` }}></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>

                    <h1 className='sub-header'>Where are you from?</h1>
                    <p>Strangely hard question for me to answer. I was born in American Fork, Utah, but moved Iowa when I was around 4. From there it was a lot of moving, but I spent most my childhood in Wyoming, moved to Missouri for my teenage years and spent some time in SoCal. I'm back in Utah for school at BYU.</p>

                    <h1 className='sub-header'>What do you like to do?</h1>
                    <p>Cooking is one of passions.</p>
                    <p>I play Ultimate frisbee... like, a lot.</p>
                    <p>I'm really into fitness, that's how I got into frisbee.</p>
                    <p>I love going pretty much anywhere.</p>
                    <p>Puzzles and making stuff is cool.</p>
                    <p>Animals... just anything and everything fluffy. Especailly dogs.</p>
                    <p>Martial arts, but I haven't done it in a while.</p>

                    <h1 className='sub-header'>Why are you making this site?</h1>
                    <p>I was pretty one afternoon bored, I love making stuff and I'm single, so why not?</p>

                    <h1 className='sub-header'>What are your plans?</h1>
                    <p>Right now I am studying Computer Science at BYU looking to go into web development or software engineering. I've been to Brazil on a religious mission and German for an intership but I really want to do some more traveling. A few places I want to go are:</p>
                    <p>Japan</p>
                    <p>Jerusalem</p>
                    <p>Hawai'i</p>
                    <p>France</p>
                    <p>Anywhere with the right person</p>

                    <h1 className='sub-header'>More</h1>
                    <NavLink to='/Adventure'>
                        <div className="link-to" >What will our date be like?</div>
                    </NavLink>
                    <NavLink to='/pick-ups' >
                        <div className="link-to" >Hear some pick-up lines</div>
                    </NavLink>
                    <NavLink to="/">
                        <div className="link-to" >Home</div>
                    </NavLink>
                </div>
            </div>
         );
    }
}
 
export default Bio;