import '../css/Main.css'
import Dice from "./Dice.jsx";
import {useState,} from "react";
import{rng} from "../js/rng.js";
import Confetti from "react-confetti";
import{useWindowSize} from "react-use";

export default function Main(){
    const [die,setDie]
        = useState([{id:1 ,value:rng(),isFrozen:false},{id:2 ,value:rng(),isFrozen:false},{id:3 ,value:rng(),isFrozen:false},{id:4 ,value:rng(),isFrozen:false},{id:5 ,value:rng(),isFrozen:false},{id:6 ,value:rng(),isFrozen:false},{id:7 ,value:rng(),isFrozen:false},{id:8 ,value:rng(),isFrozen:false},{id:9 ,value:rng(),isFrozen:false},{id:10 ,value:rng(),isFrozen:false}]);

    const [value, setValue] = useState()
    const [count,setCount] = useState(0)
    const {width, height} = useWindowSize();

    function freeze(event, id){

        if(value){

           let newValue = parseInt(event.currentTarget.innerHTML)
            if(newValue === value){
                setDie(prevDie =>
                    prevDie.map(dice =>
                        dice.id === id
                            ? {...dice, isFrozen: true} : dice))
            }else{
                console.log("nope");
            }}
            else {
            setValue(parseInt(event.currentTarget.innerHTML))
            setDie(prevDie =>
                prevDie.map(dice =>
                    dice.id === id
                        ? {...dice, isFrozen: true} : dice))
        }
    }
    //

    function rollDie(){
        setCount(count+1);
        setDie(prevDie => prevDie.map(
            dice => dice.isFrozen ? {...dice}: {...dice, value:rng()}
        ) )
    }
    //
    function newGame(){
        setDie(prevDie => prevDie.map(
            dice =>({...dice, isFrozen:false, value:rng()})
        ))
        setValue(null)
        setCount(0);
    }

    //
    const sameValue = die.every(dice => dice.value === die[0].value);
    const allFrozen = die.every(dice => dice.isFrozen);
    const gameWon = sameValue && allFrozen;
    console.log(gameWon)
    return <main className="tenzies-main">
        {gameWon && <Confetti width={width} height={height}/>}
        <h1>Tenzies </h1>

        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <p>Attempts: {count}</p>
        <div className="dice-area">
            {
                die.map((dice)=>{
                    return <Dice isFrozen={dice.isFrozen} onClick={freeze} key={dice.id} id={dice.id} dice={dice.value} />
                })
            }
        </div>
        <div className="roll-area">
            {gameWon ? <button className="roll" onClick={newGame}>New Game</button>:<button className="roll" onClick={rollDie}>Roll</button>}
        </div>
    </main>
}