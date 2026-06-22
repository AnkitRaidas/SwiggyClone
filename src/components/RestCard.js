export default function RestCard({restInfo}){

    return(
        <div className="max-w-[280px] mb-2 transform transition duration-200 hover:scale-95">
        <img className="w-70 h-45 object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + restInfo.info.cloudinaryImageId}></img>
        <div className="w-[95%] mx-auto mt-3">
        <div className="font-bold text-xl truncate">{restInfo?.info?.name}</div>
        <div className="flex items-center gap-1">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 20 20"
           fill="currentColor"
           className="w-6 h-6 text-white bg-green-600 rounded-full p-1" >
       <path
      fillRule="evenodd"
      d="M10 1l2.59 5.26L18 7.27l-4 3.9.94 5.48L10 13.77l-4.94 2.88.94-5.48-4-3.9 5.41-.79L10 1z"
      clipRule="evenodd"
       />
     </svg>
     <span className="text-lg">{restInfo?.info?.avgRating}</span>
     <span>•</span>
     <span className="text-lg font-semibold">{restInfo?.info?.sla?.slaString}</span>
        </div>

        <div className="text-gray-500 text-xl font-semibold  h-7 overflow-hidden truncate">{restInfo?.info?.cuisines.join(", ")}</div>
        </div>

        </div>
    )
}