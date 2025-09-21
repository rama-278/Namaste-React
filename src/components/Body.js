import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";







const Body = () => {

    const [listOfRestaurant, setlistOfRestaurant] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);

    const [searchText, setsearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.3091997&lng=83.8932746&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
setlistOfRestaurant(
  json?.data?.cards?.find(
    (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
  )?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
);
        setfilteredRestaurant(
  json?.data?.cards?.find(
    (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
  )?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
);

    }
    // if (listOfRestaurant.length === 0) {
    //     return <Shimmer/>;
    // }

    return (listOfRestaurant.length === 0)? <Shimmer/> :(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setsearchText(e.target.value);
                        
                    }} />
                    <button
                        onClick={() => {
                        const filteredRestaurant = listOfRestaurant.filter((res) =>
                            res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()) );
                           setfilteredRestaurant(filteredRestaurant)
                       
                        }}
                        
                    >
                        search
                    </button>
                </div>
                <button className="filter-btn" onClick={() => 
                {
                    const filteredList = listOfRestaurant.filter(
                        (res)=>res?.info?.avgRating>4.5
                    );
                setfilteredRestaurant(filteredList);
                }
                }>
                Top Rated Restaurants

                </button>
            </div>

         <div className="res-container">
  {
    filteredRestaurant.map((restaurant) => (
      <RestaurantCard key={restaurant.info.id} resData={restaurant} />
    ))}
</div>

        </div>
        
    )
};
export default Body;