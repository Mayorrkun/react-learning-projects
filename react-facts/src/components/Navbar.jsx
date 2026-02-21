import '../css/Navbar.css'
import ReactLogo from "../assets/react.svg"
function Navbar(){
const navbar = <nav className='navbar'>
    <div>
        <img src={ReactLogo} alt="try again" />
        <span>ReactFacts</span>
    </div>
</nav>

return navbar;
}

export default Navbar;