import {getRandomWord} from "../js/logic.js";
import {useState} from "react";

export default function Word() {
    const [currentWord, setCurrentWord] = useState(getRandomWord());

    return <ul>
        {currentWord}
    </ul>
}