import React ,{useState} from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";


function App(){

    return (
        <>
        <Header></Header>
        </>
    )
}

ReactDom.createRoot(document.getElementById('root')).render(<App/>)