import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Forums from "../Forums/Forums";
import Navbar from "../Navbar/Navbar";
import Standings from "../Standings/Standings";
import Home from "../Home/Home";
import About from "../About/About";

function Layout() {
    const navLinks = [
        { route: '/home', label: 'Home', Component: Home },
        { route: '/standings', label: 'Standings', Component: Standings },
        { route: '/forums', label: 'Forums', Component: Forums },
        { route: '/about', label: 'About', Component: About },
    ]

    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<Navbar navProps={navLinks} />}>
                    {navLinks.map((elt) => {
                        return <Route key={elt.route} path={elt.route} Component={elt.Component} />
                    })}
                </Route>
            </Routes>
        </Fragment>

    )


}

export default Layout;