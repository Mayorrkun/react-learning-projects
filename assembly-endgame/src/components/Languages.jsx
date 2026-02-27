import "../css/languages.css";

export default function Languages({languages}) {

    return <ul className="language-list">
        {languages.map((language, index) => (
            <li key={index} style={{backgroundColor:language.backgroundColor, color:language.color} } >
                {language.title}
            </li>
        ))}
    </ul>
};