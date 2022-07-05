import {Route, Routes, useNavigate} from 'react-router-dom';
import './App.css';
import React from "react";
import {NotFound} from "./Pages/NotFound/NotFound";
import {Paths} from "./Utils/Routes/Paths";

function App() {

    let paths: Array<any> = [];
    Paths.forEach((path) => {
        paths.push(<Route path={path.pathname} element={path.element} key={Math.random()}/>)
    });

    return (
        <div className="App">
            <Routes>
                {/* 404 rounte */}
                <Route path="*" element={<NotFound/>}/>
                {paths.map((path) => path)}
            </Routes>
        </div>
    );
}

export default App;

