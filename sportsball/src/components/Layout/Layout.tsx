import { Fragment } from "react";
import { Route, Routes, RouteProps } from "react-router-dom";
import { NavProps } from "../Navbar/types";
import Forums from "../Forums/Forums";
import Navbar from "../Navbar/Navbar";
import Standings from "../Standings/Standings";
import Home from "../Home/Home";
import About from "../About/About";

function Layout() {
    const navLinks: NavProps = {
        links: [
            { route: '/home', label: 'Home' },
            { route: '/standings', label: 'Standings' },
            { route: '/forums', label: 'Forums' },
            { route: '/about', label: 'About' },
        ]
    };

    const routes: RouteProps[] = [
        { path: 'standings', Component: Standings },
        { path: 'forums', Component: Forums },
    ];

    return (
        <Fragment>
            <Navbar navProps={navLinks} />
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path='about' Component={About} />
                    {routes.map((elt) => {
                        return <Route key={elt.path} path={elt.path} Component={elt.Component} />
                    })}
                </Route>
            </Routes>
        </Fragment>

    )


}

export default Layout;