import { CartWidget } from "../cartWidget/CartWidget"
import "./Navbar.css"
import Nav from "react-bootstrap/Nav"


export const Navbar = () => {

    return (
        // <div className="navbar-container">
        //     <ul>
        //         <li>Inicio</li>
        //         <li>Nosotros</li>
        //         <li>Coleccion</li>
        //     </ul>
        //     <div className="container-logo">
        //        <img className="logo-navbar" src="https://res.cloudinary.com/dmhmok9ot/image/upload/v1669579136/Anyela/logo_web_n9ots3.png" alt=""/>
        //     </div>
        //     <ul className="navbar">
        //         <li className="navbar-item">Ofertas</li>
        //         <li className="navbar-item">Contactanos</li>
        //     </ul>

        //     <CartWidget />

        // </div>
        <>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Inicio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Nosotros</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Coleccion</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <div className="container-logo">
                        <img className="logo-navbar" src="https://res.cloudinary.com/dmhmok9ot/image/upload/v1669579136/Anyela/logo_web_n9ots3.png" alt="" />
                    </div>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" >
                        Ofertas
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" >
                        Contactanos
                    </Nav.Link>
                </Nav.Item>
                <CartWidget />
            </Nav>

        </>

    )

}

