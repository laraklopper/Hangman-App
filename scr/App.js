import React, { useState } from 'react';// Import the React module to use react functionalities
import Display from './components/Display';//Import Display component
import Heading from './components/Heading';//Import Heading component
import Container from 'react-bootstrap/Container';//Import Bootstrap Container 
import Row from 'react-bootstrap/Row';//Import Bootstrap Row
import Col from 'react-bootstrap/Col';//Import Bootstrap Coloumn
import Button from 'react-bootstrap/Button';//Import Bootstrap Button component

// Define the heading content as an array of objects
const heading = [
  {
    mainheading: "HANGMAN GAME",//props.main
    instructions: "INSTRUCTIONS:",//props.instruct
    id: "headingId",//key
  }
]

// The main App component
export default function App() {
  const [play, setPlay] = useState(false);  // State to track whether the game is being played or not
  //The playGame function is used to determine whether or not the game is currently being played

  // Toggle function to display the Hangman game play state between true and false
  const playGame = () => {
    setPlay(!play);
  };

  //==================Styling objects for various elements=====================
  const appbody = {
    backgroundColor: '#6E8080',
    width: '98%',
    margin: '0px',
    padding: '0px',
  }

  const row1 = {
    width: '100%',
    margin: '5px',
    padding: '10px',
  }

  const appheading = {
    backgroundColor: '#6E8080',
    width: '100%',
  }

  const playOpt = {
    display: 'flex',
    textAlign: 'center',
    marginTop: '5px',
    marginBottom: "10px",
    backgroundColor: '#00A3D9',
    justifyContent: 'center',
    padding: '5px',
    alignItems: 'center'
  }

  const appContainer = {
    backgroundColor: "#6E8080",
    display: 'block',
    margin: '10px',
    padding: '0px',
    width: '100%',
  }

  const playBtn = {
    display: 'inline',
    marginTop: '0px',
    marginBottom: '0px',
    marginLeft: '5px',
    marginRight: '2px'
  }

  const playBtnLabel = {
    display: 'block',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Bree Serif, serif',
  }

  const row2 = {
    margin: '0',
    display: 'flex',
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignitems: 'center',
  }

  const row3 = {
    width: '100%',
    marginTop: '5px',
    marginBottom: '5px',
    marginLeft: '15px',
    marginRight: '15px',
    padding: '10px',
    margin: '0px',
  }

  const gameDisplay = {
    marginTop: '5px',
    marginBottom: '10px',
    marginLeft: '15px',
    marginRight: '0px',
    backgroundColor: '#006080 ',
    padding: '10px',
    height: 'fit-content',
  }


  return (
    <div style={appbody}>
      <Container style={appContainer}>
        {/* Row 1: Heading */}
        <Row style={row1}>
          <Col xs={12} md={8} style={appheading}>
            {/* Mapping through the 'heading' array to display the Heading component */}
            {heading.map((headingItem) => {
              return (
                <Heading
                  key={headingItem.id}
                  instruct={headingItem.instructions}
                  main={headingItem.mainheading}
                />
              )
            })}
          </Col>
        </Row>
        {/* Row 2: Play Button */}
        <Row style={row2}>
          <Col xs={6} md={4}>
          </Col>
          <Col xs={6} md={4} style={playOpt}>
            {/* Button to start/exit the game, onClick calls the 'playGame' function */}
            <label style={playBtnLabel}>CLICK HERE TO </label>
            <Button variant="primary" style={playBtn} onClick={playGame}>
              {/* The button text changes based on the 'play' state */}
              {play ? 'EXIT' : 'PLAY'}
            </Button>
          </Col>
          <Col xs={6} md={4}>
          </Col>
        </Row>
        {/* Row 3: Game Display */}
        <Row style={row3}>
          <Col style={gameDisplay}>
            {/* The 'Display' component is rendered only when 'play' is true */}
            {play && <Display />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
