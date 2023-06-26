import { Route, Routes } from "react-router-dom";
import Forums from "../Forums/Forums";
import Navbar from "../Navbar/Navbar";
import Standings from "../Standings/Standings";
import Home from "../Home/Home";
import About from "../About/About";
import viewOne from "../Forums/ViewOne/ViewOne";
import viewAll from "../Forums/ViewAll/ViewAll";

function Layout() {
    const navLinks = [
        { route: '/standings', label: 'Standings', Component: Standings },
        { route: '/forums', label: 'Forums', Component: Forums },
        { route: '/about', label: 'About', Component: About },
    ]

    return (
        <>
            <Routes>
                <Route path="/" element={<Navbar navProps={navLinks} />}>
                    <Route index Component={Home} />
                    <Route path='home' Component={Home} />
                    <Route path="standings" Component={Standings} />
                    <Route path="forums" Component={Forums}>
                        <Route index Component={viewAll} />
                        <Route path="view/:id" Component={viewOne} />
                    </Route>
                    <Route path="about" Component={About} />
                </Route>
            </Routes>
        </>

    )


}

export default Layout;