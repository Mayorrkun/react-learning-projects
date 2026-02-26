import {useState, useEffect} from 'react'
import '../css/Main.css';
export default function Main() {

    const [meme, setMeme] = useState({
        "img":null, "topText":null,"bottomText":null

    });
    const [allMemes, setAllMemes] = useState([]);

//http://i.imgflip.com/1bij.jpg

    const [num,setNum] = useState(random());

    useEffect(() => {


        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data =>
            {
                const memes = data.data.memes;

                setAllMemes( memes);

                const newImg = memes[num].url;
                console.log(newImg);

                setMeme(prevMeme => ({
                    ...prevMeme,img:newImg
                }));
            });
    }, [num]);

    function random(){

      return Math.floor(Math.random() * 101)
    }


    function handleSubmit(formData){
        setNum(prevNum =>(random()));
        console.log(num)
    }

    // function top(){
    //     const text = document.getElementById("topText").value;
    //     newMeme(prevMeme => ({...prevMeme , topText: text }));
    // }

    function handleChange(event){
        const {value, name} = event.currentTarget;
        setMeme(prevMeme => ({...prevMeme , [name]: value }));
        console.log(value)
    }



    const body = <section className="Main">

        <form className="meme-form" action={handleSubmit}>
            <div>
                <p>
                    <label htmlFor="topText">Top text</label>
                    <input id="topText" type="text" onChange={handleChange} name="topText" placeholder="Top text"/>
                </p>

                <p>
                    <label htmlFor="bottomText">Bottom text</label>
                    <input id="bottomText" onChange={handleChange} name="bottomText" type="text" placeholder="Bottom text"/>
                </p>

            </div>

            <button> Get a new meme image  🖼</button>

        </form>

        <div id="meme" className="meme">
            <img src={meme.img} />
            <span className="top">{meme.topText}</span>
            <span className="bottom">{meme.bottomText}</span>

        </div>

    </section>

    return body;
}