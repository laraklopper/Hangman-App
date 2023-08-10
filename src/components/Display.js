import React from 'react'// Import the React module to use react functionalities
import Game from './Game';//Import the Game component


//Display function component
export default function Display() {//Export display function component

  //==================Styling objects for various elements=====================

  const display = {
    marginTop: '10px',
    marginBottom: '10px',
    marginLeft: '0px',
    marginRight: '0px',
    padding: '0px',
    display: 'block',
    width: '100%',
  }

 const gameContainer = {
   marginTop: '10px',
   marginBottom: '10px',
   marginLeft: '0px',
   marginRight: '0px',
 }
 

  return (              
  <div id='display' style={display}>
    <div style={gameContainer}>       
      <Game/>     
    </div>    
                 
  </div>
       
  )
}
