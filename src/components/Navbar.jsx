import '../styles/Navbar.css'

function Navbar() {
    return (
            <nav className="navbar">
                <div className="navbar-container container">
                    <span type="checkbox" name="" id=""/>
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu-items">
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Entrenamiento</a></li>
                        <li><a href="#">Contactanos</a></li>
                    </ul>
                    <img src="/icons/gimnasio.png" className='logo2' alt="" />
                </div>
            </nav>
    );
}

export default Navbar;