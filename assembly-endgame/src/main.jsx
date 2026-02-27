import Game from "./components/Game.jsx";
import {createRoot} from "react-dom/client";
import './index.css'


const root = createRoot(document.getElementById("root"));

root.render(
    <Game/>
)