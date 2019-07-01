import React, { Component } from 'react';
import './style.css'
import { NavLink } from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1 className="header">Home</h1>
                <div className="page-content">
                    <h1 id="hello-msg" >Hi, I'm Jeremy :)</h1>
                    <NavLink to="/Bio">
                        <div className="link-to" >Who is Jeremy?</div>
                    </NavLink>
                    <NavLink to='/Adventure'>
                        <div className="link-to" >What will our date be like?</div>
                    </NavLink>
                    <NavLink to='/pick-ups' >
                        <div className="link-to" >Hear some pick-up lines</div>
                    </NavLink>
                </div>
            </div>
         );
    }
}
 
export default Home;