import { imageGridCards } from "../utils/FoodData";
import FoodCard from "./FoodCard"

export default function FoodOption(){

    return (
        <>

        <div className="w-[80%]  mx-auto flex  mt-20  overflow-x-auto ">
            <div className="grid grid-rows-2 grid-flow-col gap-4 w-max">
            
            {imageGridCards.map((foodData) => (
      <div key={foodData.id} className="w-44">
        <FoodCard foodData={foodData} />
      </div>
    ))}
            </div>

        </div>
        </>
    )
}