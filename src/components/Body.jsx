import Card from "./Card";
import { withPromotedLabel } from "./Card";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANTLIST_URL } from "./../utils/constant";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [fileteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(Card);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTLIST_URL);

    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );


    setFilteredRestaurant(
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
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn border border-black p-3 bg-black rounded-lg m-2 text-white hover:bg-red-700"
          onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredRestaurant(filteredRestaurant);
          }}
        >
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

        {fileteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <Card resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
