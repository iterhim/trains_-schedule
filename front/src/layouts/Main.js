import React, {useEffect, useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

function Layout(props) {
    const [newTrain, setNewTrain] = useState({})

    useEffect(() => {
        document.title = newTrain?.name || 'title'

    }, [newTrain])
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);


    return (

        <>
            <div>
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="me-auto">
                        Trains
                    </NavbarBrand>
                    <NavbarToggler onClick={toggleNavbar} className="me-2"/>
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <Link to="/">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/creator">Create train</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/editing">Edit train</Link>

                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
            <Outlet/>
        </>
    );
}

export default Layout;