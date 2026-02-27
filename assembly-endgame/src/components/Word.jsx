;
import "../css/words.css"
export default function Word({randomWord, guessedLetter}) {
    const letters = randomWord.split("").map((letter, index)=>(
        <li key={index}>
            {guessedLetter.includes(letter) ? letter.toUpperCase() : ""}
        </li>
    ))

    return <ul className="current-word">
        {letters}
    </ul>

}