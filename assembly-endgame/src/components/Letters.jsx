import {alphabet} from "../js/data.js";
import "../css/letters.css";
export default function Letters({clicked, guessedLetters}) {

    return <div className="keyboard">
            {alphabet.split("").map((letter, index) => {
                const isGuessed = guessedLetters.includes(letter);
                return (
                    <button
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