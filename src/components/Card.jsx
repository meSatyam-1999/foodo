/* eslint-disable react/display-name */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { CDN_URL } from "../utils/constant";

const Card = ({ resData }) => {
  const { name, areaName, avgRating, cuisines, sla, cloudinaryImageId } =
    resData.info;

  return (
    <div className="restaurant-card bg-[#F2EFE5]  rounded-lg w-[200px] h-[380px] m-8 p-3 hover:border border-black hover:cursor-pointer">
      <div className="res-img">
        <img
          className="h-[150px] w-[200px]"
          src={CDN_URL + cloudinaryImageId}
          alt="Restaurant Card"
        />
      </div>

      <div className="res-info">
        <h2 className="text-xl mb-2 mt-2">{name}</h2>

        <div>
          <h3>{areaName}</h3>
          <p>{avgRating} ★</p>
          <p>{cuisines.join(", ")}</p>
          <p>{sla.deliveryTime}Min ⏱</p>
        </div>
      </div>
    </div>
  );
};

// Higher Order Component
// input - RestaurantCard => RestaurantCardPromoted


export const withPromotedLabel = (Card) => {
  return (props) => {
    return (
      <div>
        <label className="absolute text-white bg-black m-2 p-2 rounded-lg">
          Promoted
        </label>
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
