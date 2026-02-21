import "../css/Header.css"
import Globe from "../assets/Globe.png";

function Header() {
const header = <head className="header">
<div>
    <img src={Globe} alt="" />
    my travel journal
</div>
</head> ;


return header
}

export default Header;