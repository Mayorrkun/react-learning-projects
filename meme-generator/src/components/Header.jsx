import Troll from "../assets/Troll-Face.png";

export default function Header(){

    const navBar = <nav className="NavBar">
        <img src={Troll} alt="Try Again"/>Meme Generator
    </nav>

    return navBar
}