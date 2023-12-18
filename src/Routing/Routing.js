import React from 'react'
import '../assets/css/main.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AskLogin from '../components/Login/AskLogin';

function Routing() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<AskLogin/>} />
                </Routes>
            </Router>
        </>
    )
}

export default Routing
