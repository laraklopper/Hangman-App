import React, { useState } from 'react';// Import the React module to use react functionalities
import Button from 'react-bootstrap/Button'; // Import the Bootstrap Button component
import Rules from './Rules';//Import the rules compoment
import './CSS stylesheets/header.css';//Import CSS stylesheet

//Instructions for the game as an array of objects
const instructions = [
    {
        heading: "How to play",//head.props
        rule1: "Click play",//rule1.props
        rule2: "Enter a letter",//rule2.props
        rule3: "You have six guesses",//rule3.props
        id: "rulesId"//key
    }
]

//Heading function component
export default function Heading(props) {//Export the Heading function component
    const [showRules, setShowRules] = useState(false);//State variable 'showRules' and a function to update it 'setShowRules'


    //Toggle function to display instructions
    const displayHelp = () => {
        setShowRules(!showRules)
    }

    return (
        // The main container for the Heading component
        <div id='heading-container'>
            <header id='header'>
                <div id='heading'>
                    <h1 className='h1'>{props.main}</h1>
                </div>
                <div id='instructions'>
                    <label id='instructions-label' ><h3 id='head3'>{props.instruct} </h3> {/* The heading text received as a prop */}
                        <Button variant='primary' className='btn' id='help-btn' onClick={displayHelp}>
                            {showRules ? 'EXIT': "HELP"}
                        </Button>
                    </label>
                                {/* Conditional rendering of the instructions when 'showRules' is true */}
                                {showRules && instructions.map((instruction) => {
                                    return (
                                        <Rules
                                            key={instruction.id} // Unique key for the "Rules" component
                                            head={instruction.heading} // Heading text for the instructions
                                            rule1={instruction.rule1} // First instruction
                                            rule2={instruction.rule2} // Second instruction
                                            rule3={instruction.rule3} // Third instruction
                                        />
                                    )
                                    
                                })}
                </div>
            </header>
        </div>
    )
}
