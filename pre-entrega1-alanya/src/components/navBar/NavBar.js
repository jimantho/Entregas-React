import { CartWidget } from "../cartWidget/CartWidget"
import "./Navbar.css"


export const Navbar = () => {
    return (
        <div className="navbar-container">
            <ul>
                <li>Inicio</li>
                <li>Nosotros</li>
                <li>Coleccion</li>
            </ul>
            <div className="container-logo">
               <img className="logo-navbar" src="https://res.cloudinary.com/dmhmok9ot/image/upload/v1669579136/Anyela/logo_web_n9ots3.png" alt=""/>
            </div>
            <ul className="navbar">
                <li className="navbar-item">Ofertas</li>
                <li className="navbar-item">Contactanos</li>
            </ul>

            <CartWidget />
            
        </div>
    )

}

