import React from "react";
import "../css/Header.css"
export default function Header({statusMessage, isWin, isLose}) {
    return <div className="header">
        <div className="header-description">
            <span>Assembly: Endgame</span>
            <p>Guess the word in under 8 attempts to keep the programming world safe from assembly</p>
        </div>
        {
            !isWin || !isLose ?
                statusMessage ? <div className="status .farewell">{ statusMessage} </div> :  <div className="status"> </div>
                : isWin ?<div className="status"> <h1> You win!</h1> <span>Well done</span></div>
                    : isLose ? <div className="status"> <h1>Game over!</h1> <span>You lose! Better start learning assembly</span></div> : null

        }
    </div>
}
// { while(!isWin || !isLose){
//     statusMessage ? <div className="status .farewell">
//         { statusMessage}
//     </div> :  <div className="status"> </div> }
//     {console.log("statusMessage: ", statusMessage)}
// } }
