import { Link, Outlet } from "react-router-dom";
import { NavProp } from "./types"
import football from "../../static/football.png"

function LogFunctionButton() {
    let userLoggedIn = false;
    return (
        <Link className="nav-link" to={userLoggedIn ? "/logout" : "/login"}>{userLoggedIn ? "Logout" : "Login"}</Link>
    )
}

function Navbar({ navProps }: { navProps: NavProp[] }) {

    return (
        <>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div style={{ position: "fixed", left: 20 }}>
                    <Link className="nav-link" to='/home'>
                        <img src={football} alt="Fodebull" width="50" />
                    </Link>
                </div>
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div style={{ position: "fixed", left: 100 }}>
                            <ul className="navbar-nav me-auto">
                                {navProps.map((elt, index) => (
                                    <li className="nav-item" key={index}>
                                        <Link className="nav-link" to={elt.route}>{elt.label}</Link>
                                    </li>
                                ))}
                            </ul>
                            </div>
                        <ul className="navbar-nav ms-auto">
                            <li>
                                <LogFunctionButton/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
            <Outlet />
        </>
    )
}

export default Navbar;