import React ,{useState} from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import FoodOption from "./components/FoodOption";
import FoodCard from "./components/FoodCard";


function App(){

    return (
        <>
        <Header></Header>
        <FoodOption></FoodOption>
        </>
    )
}

ReactDom.createRoot(document.getElementById('root')).render(<App/>)