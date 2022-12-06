import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./layouts/Main";
import AllTrains from "./components/allTrains/AllTrains";
import Creator from "./components/creator/Creator";
import Editing from "./components/editing/Editing";


import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<AllTrains/>} />
                    <Route path="creator" element={<Creator/>}/>
                    <Route path="editing" element={<Editing/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
     </React.StrictMode>
);

reportWebVitals();
