import {createRoot} from "react-dom/client";
import './index.css'
import Header from "./components/Header";
import Languages from "./components/Languages.jsx";
import Word from "./components/Word.jsx";
const root = createRoot(document.getElementById("root"));

root.render(

    <section className="game-section">
        <Header/>
        <Languages/>
        <Word/>
    </section>
)