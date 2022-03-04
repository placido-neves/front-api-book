
import logo from '../../img/logo.png'
import './styled.scss'


export default function Navbar() {

    return (
        <nav>
            <img src={logo} alt="" />
            <ul >
                <li className='strong'>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Features
                </li>
                <li>
                    Princing
                </li>
                <li>
                    Galery
                </li>
                <li>
                    Team
                </li>
                <li>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </li>
            </ul>
        </nav >
    );
}