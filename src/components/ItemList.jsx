import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../store/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
      dispatch(addItem(item));
  };


  return (
    <div>
      {items.map((item) => (
        <div
          className="m-2 p-2 border-gray-200 border-b-2 text-left flex justify-between"
          key={item.card.info.id}
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4">
            <div className="absolute">
              <button onClick={() => handleAddItem(item)} className="bg-black text-white p-1 mx-10 rounded-md shadow-lg absolute hover:bg-red-700 text-white">
                Add+
              </button>
            </div>
            <img
              className="rounded-lg"
              src={CDN_URL + item.card.info.imageId}
              alt="category dish image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
