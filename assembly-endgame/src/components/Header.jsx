
import "../css/Header.css"
export default function Header({statusMessage, isWin, isLose, guessedLetters}) {
    return <div className="header">
        <div className="header-description">
            <span>Assembly: Endgame</span>
            <p>Guess the word in under 8 attempts to keep the programming world safe from assembly</p>
        </div>
        {
            isWin ? (<div className="status-won"> <span> You win!</span> <p>Well done</p></div>)
                : isLose ? (<div className="status-lost"> <span>Game over!</span> <p>You lose! Better start learning assembly</p></div>)
                        :   statusMessage ? (<div className="status-farewell">{ statusMessage} </div>) : <div className="status"></div>

        }
    </div>
}
// { while(!isWin || !isLose){
//     statusMessage ? <div className="status .farewell">
//         { statusMessage}
//     </div> :  <div className="status"> </div> }
//     {console.log("statusMessage: ", statusMessage)}
// } }
