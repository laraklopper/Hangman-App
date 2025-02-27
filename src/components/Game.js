import React, {  useState } from 'react';// Import the React module to use react functionalities
import { randomWord } from './Words'; //Import the randomWord function
import Button from 'react-bootstrap/Button';// Import the Bootstrap Button component
import './CSS stylesheets/game.css';//Import Css stylesheet
import Hangman from './Hangman';//Import the Hangman function

export default function Game() {
    const maxWrong = 6;    // Maximum number of wrong guesses allowed 
    const [mistake, setMistake] = useState(0); // State to keep track of the number of mistakes made by the player
    const [guessed, setGuessed] = useState(new Set([]));    // State to store the guessed letters as a Set
    const [answer, setAnswer] = useState(randomWord());//State used to store the randomly chosen word
 


    // Handler for the letter buttons
    const handleGuess = (event) => {
        let letter = event.target.value.toLowerCase();
        // Add the guessed letter to the guessed Set
        setGuessed((prevGuessed) => new Set(prevGuessed.add(letter)));
        // Increase mistake count if the letter is not in the answer
        setMistake((prevMistake) => prevMistake + (answer.includes(letter) ? 0 : 1));
    };

    // Function to generate the letter buttons
    const generateButtons = () => {
        return 'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => (
            <Button
                variant='primary'
                className='letter-btn'
                key={letter}
                value={letter}
                onClick={handleGuess}
                disabled={guessed.has(letter)}
            >
                {letter}
            </Button>
        ));
    };

    // Check if player exceeded maximum mistakes
    const gameOver = mistake >= maxWrong;

    // Function to display the guessed word with underscores for unguessed letters
    const guessedWord = () => {
        return answer.split('').map((letter) => (guessed.has(letter) ? letter : ' _ '));
    };

    // Function to restart the game
    const resetButton = () => {
        setMistake(0);
        setGuessed(new Set([]));
        setAnswer(randomWord());
        // setTimer(120);
    };

    // Function to determine whether the player won or lost
    const gameStatus = () => {
        if (guessedWord().join("") === answer) {
            return <h3 className='message'>YOU WON!</h3>;
        } else if (gameOver) {
            return <h3 className='message'>YOU LOST!</h3>;
        }
    }; 


    console.log(answer); // Log the answer to the console for debugging purposes
//=====================JSX RENDERING=============================
    return (
        <>              
                <div id='game'>
                    <div id='text-container'>
                        <div id='word'>
                            <h5 id='guess-heading'>GUESS THE WORD:</h5>
                            {/*display the guessed word with underscores for unguessed letters*/}
                            <h6 className='h6' id='hidden-word'>{!gameOver ? guessedWord() : answer}</h6>
                        </div>
                        <div id='wrong-guess'>
                        {/*Display the number of wrong guesses*/}
                            <h5 id='head5'>Wrong guesses: {mistake} of {maxWrong}</h5>
                        </div>
                    </div>
                    <div id='game-container'>
                        <div id='defeat'>
                            {/* Display the Hangman component based on the number of mistakes */}
                            <Hangman mistake={mistake} maxWrong={maxWrong} />
                        </div>
                     {/* Letter Buttons */}
                        <div id='keyboard'>{generateButtons()}</div>
                        <div id='reset'>
                             {/*Button to reset/restart the game*/}
                            <Button variant='primary' type='submit' onClick={resetButton} id='reset-button'>
                                RESTART
                            </Button>
                        </div>
                    </div>
                    {/*State whether the player has won or lost*/}
                    <div id='gamestatus'>
                        {gameStatus()}
                    </div>
                </div>
       
        </>
    );
}
