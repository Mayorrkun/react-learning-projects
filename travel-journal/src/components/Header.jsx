import "../css/Header.css"
import Globe from "../assets/Globe.png";

function Header() {
const header = <nav className="header">
<div>
    <img src={Globe} alt="" />
    my travel journal
</div>
</nav> ;


return header
}

export default Header;