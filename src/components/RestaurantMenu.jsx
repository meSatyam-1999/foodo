/* eslint-disable no-unsafe-optional-chaining */
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "./../utils/constant";
import { useParams } from "react-router-dom";
import { MENU_URL } from "./../utils/constant";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cloudinaryImageId, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  //restaurant card menu categories
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="menu p-6 text-center">
      <h1 className="text-3xl font-bold">{name}</h1>
      <img
        className="w-[300px] h-[200px] mt-4 mb-4"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant card image"
      />
      <h3 className="text-xl font-bold">{cuisines.join(" , ")}</h3>
      <h2>{costForTwoMessage}</h2>
      {/* categories accordion */}

      {categories.map((category,index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems = {index == showIndex ? true : false}
          setShowIndex = { () => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

{
  /* <h2 className="text-3xl mb-4 mt-4">Menu</h2>
<ul>
  {itemCards.map((item) => (
    <li key={item.card.info.id}>
      {item.card.info.name} - Rs.
      {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
    </li>
  ))}
</ul> */
}
