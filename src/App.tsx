import {Route, Routes, Navigate, useLocation} from 'react-router-dom';
import './App.css';
import React from "react";
import {NotFound} from "./Pages/NotFound/NotFound";
import {Paths} from "./Utils/RoutesUtils/Paths";
import {Login} from "./Pages/Login/Login";
import {Register} from "./Pages/Register/Register";



export default function App() {

    let paths: Array<any> = [];
    Paths.forEach((path) => {
        paths.push(<Route path={path.pathname} element={
            <AuthRequired>
                {path.element}
            </AuthRequired>

        } key={Math.random()}/>)
    });

    return (
        <div className="App">
            <Routes>
                {/* 404 rounte */}
                <Route path="*" element={<NotFound/>}/>
                <Route path={"/login"} element={<Login />}/>
                <Route path={"/register"} element={<Register />}/>
                {paths.map((path) => path)}
            </Routes>
        </div>
    );
}




function AuthRequired(props: any){
    const location = useLocation();
    let token;
    try {
        token =  window.sessionStorage.getItem('e-token')
    }catch {
        token = ''
    }

    if(!token){
        return <>
            <Navigate to={'/login'} state={{from: location}} replace  />
        </>
    }

    return props.children;
}
