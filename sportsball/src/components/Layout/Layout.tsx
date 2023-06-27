import { Route, Routes } from "react-router-dom";
import Forums from "../Forums/Forums";
import Navbar from "../Navbar/Navbar";
import Predictions from "../Predictions/Predictions";
import Home from "../Home/Home";
import About from "../About/About";
import viewOne from "../Forums/ViewOne/ViewOne";
import viewAll from "../Forums/ViewAll/ViewAll";


function Layout() {
    const navLinks = [
        { route: '/predictions', label: 'Predictions', Component: Predictions },
        { route: '/forums', label: 'Forums', Component: Forums },
        { route: '/about', label: 'About', Component: About },
    ]

    return (
        <>
            <Routes>
                <Route path="/" element={<Navbar navProps={navLinks} />}>
                    <Route index Component={Home} />
                    <Route path='home' Component={Home} />
                    <Route path="predictions" Component={Predictions} />
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