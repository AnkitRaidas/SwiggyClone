import React ,{useState} from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import FoodOption from "./components/FoodOption";
import FoodCard from "./components/FoodCard";
import GroceryOption from "./components/GroceryOptions";
import Grocerycard from "./components/Grocerycard";
import DineOption from "./components/DineOptions";
import DineCard from "./components/DineCard";


function App(){

    return (
        <>
        <Header></Header>
        <FoodOption></FoodOption>
        <GroceryOption></GroceryOption>
        <DineOption></DineOption>
        
        </>
    )
}

ReactDom.createRoot(document.getElementById('root')).render(<App/>)