import { GrocerGridCard } from "../utils/Grocery";
import Grocerycard from "./Grocerycard";

export default function GroceryOption(){

    return(
        <div className="mt-20 w-[80%] container mx-auto">  
            <h1 className="font-bold text-2xl">Shop Groceries on Instamart</h1>
        <div className="overflow-x-auto mt-10 ">
         <div className="flex gap-8 w-max ">
          {GrocerGridCard.map((foodData) => (
          <Grocerycard
          key={foodData.id}
           foodData={foodData}/>
              ))}
            </div>
          </div>
        </div>
    )
}