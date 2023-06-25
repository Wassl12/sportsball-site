import Navbar from "../Navbar/Navbar";
import { NavProps } from "../Navbar/types";

function Layout() {
    const navLinks: NavProps = {
        links: [
            { route: '/', label: 'Home' },
            { route: '/standings', label: 'Standings' },
        ]
    };

    return (
        <Navbar navProps={navLinks} />

    )


}

export default Layout;