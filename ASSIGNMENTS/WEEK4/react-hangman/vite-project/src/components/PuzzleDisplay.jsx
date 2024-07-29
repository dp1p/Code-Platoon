// components/PuzzleDisplay.js

import { useEffect, useState } from "react";
import React from "react";
import data from "../data/words"

function PuzzleDisplay() {

  const [puzzle, setPuzzle] = useState("")
  // useState for everchanging variables 

  const dataToWords = () => { /* to convert data.json to a usable array  */
    const wordListArr = data.map((word) => [word])  /* maps each word from the list to an array */ 
    console.log(wordListArr)
    return (wordListArr)
  }


  /* THIS IS FOR GENERATING THE PUZZLE WORD */
  const wordListArr = dataToWords(); /* we are calling the function to get the list of words*/ 

  let wordToBeGuessed = wordListArr [Math.floor(Math.random() * wordListArr.length)] /* this math.floor(math.random) will give us a random number respective of the arr length */
  console.log("WORD TO BE GUSSSED IS" + wordToBeGuessed)
  let correctLetters = (wordToBeGuessed.toString().split('')) /* converts the puzzle (which is originally an arr) to a string, and then splits it again to become an arr so we can check each individual letter */
  
  const removeDuplicate = () => { /* this func is to remove duplicate letters, instead of keeping track of how many x number of letters are in the puzzle, we only keep track of one letter*/
    return correctLetters.filter((letter, index) => correctLetters.indexOf(letter) === index) /* keeps only the first occurrence of each letter, if it is not the first occurance, it will filter it */
  } //************use set method func ************************************

  console.log('BEFORE DUPLICATES REMOVED: ' + correctLetters);

  correctLetters = (removeDuplicate())

  console.log('AFTER DUPLICATE LETTERS REM: ' + correctLetters)
  wordToBeGuessed = wordToBeGuessed.toString(); /*converts wordToBeGussed what it was originally to string*/

  
  useEffect(() => {
  console.log("USE EFFECT RUNNING") 
  setPuzzle(wordToBeGuessed); /*sets the puzzle word to wordToBeGussed*/
  console.log("PUZZLE WORD:" + wordToBeGuessed);
  }, []);

  /*THIS WILL HANDLE USER GUESSES!*/
  

  console.log("LETTER ARR " , correctLetters);

  let guessedLetter = [];

  const guessingWord = (event) => { /* getting the argrument letter */
    event.preventDefault() //prevents the page from refreshing
    console.log("GUESSING WORD FUNC ACTIVATED")
    let letter = document.getElementById('userInput')
    guessedLetter.push(letter.value)
    console.log(guessedLetter);
    
    /* to show the guessed letters in the array */
    let lettersGuessed = document.getElementById('lettersGuessed')
    lettersGuessed.innerText = guessedLetter


    if (correctLetters.every(letter => guessedLetter.includes(letter))) { /* checks if there is every letter in correctLetters is in the gussedLetter*/
      
      console.log("Congratulations! You've guessed the word correctly!");
      let win = document.getElementById('win')
      win.innerText = "WIN"
    }

    /* how do i clear the input value? */
    /* use 'useState' to clear input */
    /* Controlled Component for using input*/
  }

  return (
    <>
      <div>
        <p>{puzzle}</p>
      </div>

      <form onSubmit={guessingWord}>
        <div>
          <input id="userInput" placeholder="Enter A Letter" maxLength={1} />
          <br></br>
          <button type="submit">Submit</button>
        </div>
      </form>

      <div id="win">
        <p></p>
      </div>

      <div id="lettersGuessed">
        <p></p>
      </div>
    </>
  );
}

export default PuzzleDisplay;
