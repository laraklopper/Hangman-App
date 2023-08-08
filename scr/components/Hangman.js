import React from 'react';// Import the React module to use react functionalities
import Defeat from './images/state11.GIF'; // Import the image file named "state11.GIF" as Defeat
import initial from './images/state5.GIF'; // Import the image file named "state5.GIF" as initial
import state1 from './images/state6.GIF'; // Import the image file named "state6.GIF" as state1
import state2 from './images/state7.GIF'; // Import the image file named "state7.GIF" as state2
import state3 from './images/state8.GIF'; // Import the image file named "state8.GIF" as state3
import state4 from './images/state9.GIF'; // Import the image file named "state9.GIF" as state4
import state5 from './images/state10.gif'; // Import the image file named "state10.gif" as state5
import Figure from 'react-bootstrap/Figure';//Import Bootstrap Figure component
import './CSS stylesheets/game.css'

// Function to change the image depending on the number of correct or incorrect answers and correct answer when the game is over
export default function Hangman({ mistake, maxWrong }) {//Export the Hangman function used to display different images at different stages of the game 
  //Function takes in the mistake and maxWrong props
  //The props are used to determine the current number of mistakes made by the player and the maximum allowed wrong answers in the game.
  return (
    <div>
      {/* Conditional rendering for different stages of the game */}
      {mistake === 0 && (//Initial image displayed when the game starts     
        <Figure className='hangman-img' style={{ backgroundColor: "green" }}> {/* style the background colour based on mistakes made*/}
          <Figure.Image className='image' alt="initial-state" src={initial} />
        </Figure>
      )}
      {mistake === 1 && (//Image displayed after one mistake/wrong letter
        <Figure className='hangman-img' style={{ backgroundColor: "green" }}>
          <Figure.Image className='image' alt="state1" src={state1} />
        </Figure>
      )}
      {mistake === 2 && (//Image displayed after two mistakes/wrong letters
        <Figure className='hangman-img' style={{ backgroundColor: "green" }}>
          <Figure.Image className='image' alt="state2" src={state2} />
        </Figure>
      )}
      {mistake === 3 && (//Image displayed after three mistakes/wrong letters
        <Figure className='hangman-img' style={{ backgroundColor: "orange" }}>
          <Figure.Image className='image' alt="state3" src={state3} />
        </Figure>
      )}
      {mistake === 4 && (//Image displayed after four mistakess/wrong letters
        <Figure className='hangman-img' style={{ backgroundColor: "orange" }}>
          <Figure.Image className='image' alt="state4" src={state4} />
        </Figure>
      )}
      {mistake === 5 && (//Image displayed after five mistakes/wrong letters
        <Figure className='hangman-img' style={{ backgroundColor: "orange" }}>
          <Figure.Image className='image' alt="state5" src={state5} />
        </Figure>
      )}
      {mistake >= maxWrong && (//Image returned if the player reaches or exceeds the maximum amount of incorrect answers
        <Figure className='hangman-img' style={{ backgroundColor: "red" }}>
          <Figure.Image className='image' alt="defeat" src={Defeat} />
        </Figure>
      )}
    </div>
  );
}