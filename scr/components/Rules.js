import React from 'react';// Import the React module to use react functionalities
import './CSS stylesheets/header.css'; // Importing the custom CSS stylesheet for styling the component
import Card from 'react-bootstrap/Card'; // Import the Bootstrap Card component

// Rules function component
export default function Rules(props) {
    return (
        // The main container for the Rules component with the id 'rules-display'
        <div id='rules-display'>
            {/* Bootstrap Card to display the rules */}
            <Card id="rules">
                {/* Ordered list to display the rules as list items */}
                <ol id='rules-list'>
                    {/* Each rule is displayed as a list item with the class 'rule' */}
                    <li className='rule'>{props.rule1}</li> {/* Rule 1 */}
                    <li className='rule'>{props.rule2}</li> {/* Rule 2 */}
                    <li className='rule'>{props.rule3}</li> {/* Rule 3 */}
                </ol>
            </Card>
        </div>
    )
}
