import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import Bubble from '../../comps/Bubble'
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
                    {/* <h1 className="sub-header" >Overview</h1>
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
                    </div> */} 
                    <h1 className="sub-header" >Hobbies</h1>
                    <div id="bubbles">
                        <Bubble width="100" label="Fitness" left="0px" top="0px">
                            <div>Test on the good stuff asdf oaneoi asdofij aiospdj faoisdjf opaiushf  iuawebisdf iuahsdfoui ahsiudf aoisdfi asjdoiweofihasjdfn oUIEHF AIUSDHF IUASDHFH ASDBFOISA DFOAISHF</div>
                        </Bubble>
                        <Bubble width="80" label="Travel" left="105px" top="-10px">
                            <div>
                                al;skdfjaoisdnfaiosdnf aoisndf ionasiodnf ioansdf ion aoisdnfoi asdf
                            </div>
                        </Bubble>
                        <Bubble width="100" label="Food" left="80px" top="75px">

                        </Bubble>
                        <Bubble width="100" label="Frisbee" left="180px" top="35px" >

                        </Bubble>
                        <Bubble width="120" label="Computers" left="35px" top="175px">

                        </Bubble>
                        <Bubble width="80" label="Movies" left="-5px" top='105px' >

                        </Bubble>
                    </div>

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