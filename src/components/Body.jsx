import Card from "./Card";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants == 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-white m-8">
      <div className="search-bar p-5">
        <input
          type="text"
          placeholder="Search favourite food"
          className="search-bar border border-black p-3 px-16 rounded-lg"
        />
        <button className="search-btn border border-black p-3 bg-black rounded-lg m-2 text-white hover:bg-red-700" onClick={() => {
          
        }}>
          Search
        </button>
      </div>

      <div className="filter">
        <button
          className="border border-black bg-[#B5D5C5] hover:bg-[#FFC4C4] rounded-lg p-1 m-5"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>

        <button
          className="border border-black bg-[#B5D5C5] hover:bg-[#FFC4C4] rounded-lg p-1 m-5"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.sla.deliveryTime < 40
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Under 40 mins
        </button>
      </div>

      <div className="res-container flex flex-wrap ml-10 mr-10">
        {/* Mapping the data to the card component */}

        {listOfRestaurants.map((restaurant, index) => (
          <Card resData={restaurant} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Body;
