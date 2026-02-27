import "../css/languages.css";

export default function Languages({languages, wrongGuesses}) {

    return <ul className="language-list">
        {languages.map((language, index) => (
            <li key={index} style={{backgroundColor:language.backgroundColor,
                color:language.color ,
                opacity: index <= wrongGuesses.length-1 ? 0.5 : 1} } >
                {language.title}
            </li>
        ))}
    </ul>
};