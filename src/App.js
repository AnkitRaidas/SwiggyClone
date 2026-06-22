import React ,{useState} from "react";
import ReactDom from "react-dom/client";
import Restaurant from "./components/Restaurant";
import Home from "./components/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";





function App(){

    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}

ReactDom.createRoot(document.getElementById('root')).render(<App/>)