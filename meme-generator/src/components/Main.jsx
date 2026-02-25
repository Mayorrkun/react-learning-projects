import {useState, useEffect} from 'react'
import '../css/Main.css';
export default function Main() {

    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText ] = useState('');

    function handleTop() {
        setTopText(newtopText => (document.getElementById("topText").value ));
    }

    function handleBottom() {
        setBottomText(newbottomText => (document.getElementById("bottomText").value));
    }

    const body = <section className="Main">

        <form className="meme-form">
            <div>
                <p>
                    <label htmlFor="">Top text</label>
                    <input onInput={handleTop} id="topText" type="text" name="topText" placeholder="Top text"/>
                </p>

                <p>
                    <label htmlFor="">Bottom text</label>
                    <input onInput={handleBottom} id="bottomText" name="bottomText" type="text" placeholder="Bottom text"/>
                </p>

            </div>

            <button> Get a new meme image  🖼</button>

        </form>

        <div className="meme">
            <img src="http://i.imgflip.com/1bij.jpg" />
            <span className="top">{topText}</span>
            <span className="bottom">{bottomText}</span>

        </div>

    </section>

    return body;
}