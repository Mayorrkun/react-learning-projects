import "../css/Main.css";
import Entry from "./Entry.jsx";
import getTravelData from "../js/Entry.js";
function Main(){
    const travelData = getTravelData();
    console.log("Travel data: ",travelData)
    const Main = <main className="mainComponent">
        {
            travelData.map((item,index) =>(
                <Entry key={index} data={item}/>
            ))
        }
        
        
    </main> 

return Main;
}

export default Main;