import {alphabet} from "../js/data.js";
import "../css/letters.css";
export default function Letters({clicked, guessedLetters,randomWord}) {

    return <div className="keyboard">
            {alphabet.split("").map((letter, index) => {
                const isGuessed = guessedLetters.includes(letter);
                const isRight = randomWord.split("").includes(letter);
                return (
                    <button
                        style={{backgroundColor: isGuessed && isRight ?( "#10a95b"): isGuessed && !isRight ? "#ec5d49" : "#fcba29"}}
                        key={index}
                        onClick={() => {clicked(letter)}}
                        disabled={isGuessed}>
                    {letter.toUpperCase()}</button>
                )
            })}
    </div>
}
// (
//
// )