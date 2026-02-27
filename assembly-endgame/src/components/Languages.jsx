import "../css/languages.css";
import {languages} from "../js/data.js";
export default function Languages() {

    return <ul className="language-list">
        {languages.map((language, index) => (
            <li key={index} style={{backgroundColor:language.backgroundColor, color:language.color} } >
                {language.title}
            </li>
        ))}
    </ul>
};