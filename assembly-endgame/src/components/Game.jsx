import Header from "../components/Header";
import Languages from "../components/Languages.jsx";
import Word from "../components/Word.jsx";
import {getRandomWord, getFarewellText} from "../js/logic.js";
import Letters from "../components/Letters.jsx";
import {languages} from "../js/data.js";
import {useState} from "react";
import ReactConfetti from "react-confetti";
import{useWindowSize} from "react-use";


export default function Game(){
    //
    const [randomWord,setRandomWord]= useState(getRandomWord())
    const [guessedLetters, setGuessedLetters] = useState([])
    const wrongGuesses = guessedLetters.filter(
        letter => !randomWord.includes(letter)
    )

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
    const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
    const isWrong = lastGuessedLetter && !randomWord.includes(lastGuessedLetter);
    const eliminatedLanguage = languages[wrongGuesses.length - 1]?.title;
    let statusMessage = isWrong && eliminatedLanguage ? getFarewellText(eliminatedLanguage) : null


    //Game status
    const isWin = randomWord.split("").every(letter => guessedLetters.includes(letter))
    const isLose = wrongGuesses.length >= 8;
    const gameOver = isLose || isWin;
    console.log(isLose);
    console.log(gameOver)
        const {width, height} = useWindowSize();


    return  <section className="game-section">
        {
            isWin ? <ReactConfetti width={width} height={height}/> :null
        }
        <Header statusMessage = {statusMessage} guessedLetters={guessedLetters} isLose={isLose} isWin={isWin}/>
        <Languages languages={languages} wrongGuesses={wrongGuesses} />
        <Word randomWord={randomWord} guessedLetter={guessedLetters} />
        <Letters clicked={clicked} guessedLetters={guessedLetters} randomWord={randomWord} />
        {gameOver ? <button className="new-game" onClick={newGame}>New Game</button> : null }


    </section>
}