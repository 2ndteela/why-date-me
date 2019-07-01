import React, { Component } from 'react';

class PickUps extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            lines: [
                [
                    'Can you help me with this math problem? u + x = 25',
                    'I think x must be 15 becuase U are a 10'
                ],
                [
                    'E24',
                    'Sorry, thought this was a vending machine because you look like a snack'
                ], 
            ]
        }
    }
    render() { 
        return ( 
            <div>
                <h1 className="header">Pick-Ups</h1>
            </div>  
        );
    }
}
 
export default PickUps;