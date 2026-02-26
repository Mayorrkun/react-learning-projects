
import '../css/dice.css'
export default function Dice({dice,isFrozen, onClick,id}) {


    return <button className={isFrozen ? "dice-rolled":"dice"} onClick={(event)=> onClick(event, id)} >
        {dice}
    </button>
}