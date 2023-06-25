import { Link } from "react-router-dom";
import { NavProps } from "./types"
import football from "../../static/football.png"

function Navbar({ navProps }: { navProps: NavProps }) {

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div style={{ position: "fixed", left: 20 }}>
                <Link className="nav-link" to='/home'>
                    <img src={football} alt="Fodebull" width="50" />
                </Link>
            </div>
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {navProps.links.map((elt, index) => (
                            <li className="nav-item" key={index}>
                                <Link className="nav-link" to={elt.route}>{elt.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;