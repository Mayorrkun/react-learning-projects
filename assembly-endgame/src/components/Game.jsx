import Header from "../components/Header";
import Languages from "../components/Languages.jsx";
import Word from "../components/Word.jsx";
import {getRandomWord, getFarewellText} from "../js/logic.js";
import Letters from "../components/Letters.jsx";
import {languages} from "../js/data.js";
import {useState} from "react";

export default function Game(){
    //
    const [randomWord,setRandomWord]= useState(getRandomWord())
    const [guessedLetters, setGuessedLetters] = useState([])
    const wrongGuesses = guessedLetters.filter(
        letter => !randomWord.includes(letter)
    )

  //Game status
  const isWin = randomWord.split("").every(letter => guessedLetters.includes(letter))
  const isLose = wrongGuesses.length >= 8;
    const gameOver = isLose || isWin;

  //new Game

  function newGame(){
      setRandomWord(getRandomWord())
      setGuessedLetters([])
  }

//clicked
    function clicked(letter){
        setGuessedLetters((prevLetters => prevLetters.includes(letter) ? prevLetters:[...prevLetters, letter]));
    }

// eliminated
    const eliminatedLanguage = languages[wrongGuesses.length - 1]?.title;
    const statusMessage = getFarewellText(eliminatedLanguage)

    return  <section className="game-section">
        <Header statusMessage = {statusMessage} isLose={isLose} isWin={isWin} gameOver={gameOver}/>
        <Languages languages={languages}/>
        <Word randomWord={randomWord} guessedLetter={guessedLetters} />
        <Letters clicked={clicked} guessedLetters={guessedLetters} />
        {gameOver ?  <button className="new-game" onClick={newGame}></button> : null }


    </section>
}