import React from 'react';

import { Routes, Route } from "react-router-dom";
import AllTrains from "./allTrains/AllTrains";
import Creator from "./creator/Creator";
import Editing from "./editing/Editing";
import Layout from "./../layouts/Main";

function Navbar(props) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<AllTrains/>}/>
                    <Route path="creator" element={<Creator/>}/>
                    <Route path="editing" element={<Editing/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default Navbar;