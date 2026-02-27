//random word generator
import {words} from "./data.js"

export function getRandomWord(){
    const index = Math.floor(Math.random()*words.length);
    return words[index];
}

//