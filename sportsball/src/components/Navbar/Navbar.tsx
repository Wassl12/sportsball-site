import { NavProps } from "./types"

function Navbar({ navProps }: { navProps: NavProps }) {

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">My Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;