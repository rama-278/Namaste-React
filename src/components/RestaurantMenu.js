import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setresInfo] = useState(null);
    const { resId } = useParams();
    useEffect(() => { 
        fetchMenu();
    }, []);
    const fetchMenu = async() => {
        const data = await fetch(
             MENU_API+resId
        );
        const json = await data.json();
            console.log(json);
        setresInfo(json.data);
    };
    if (resInfo === null) return <Shimmer />;
const { name, cuisines, costForTwoMessage } =
  resInfo?.cards?.[2]?.card?.card?.info || {};


const itemCards =
  resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

return (
  <div>
    <h1>{name}</h1>
    <p>Cuisines: {cuisines?.join(", ")}</p>
    <p>Cost for Two: {costForTwoMessage}</p>

    <h3>Menu</h3>
    <ul>
      {itemCards.length > 0 ? (
        itemCards.map((item) => (
          <li key={item.card?.info?.id}>
            {item.card?.info?.name} - Rs.
            {(item.card?.info?.price || item.card?.info?.defaultPrice) / 100}
          </li>
        ))
      ) : (
        <li>No items found</li>
      )}
    </ul>
  </div>
);

    
};
export default RestaurantMenu;
