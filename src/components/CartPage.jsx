import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart } from "../store/cartSlice";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-2">
      <h1 className="text-2xl font-bold">Cart</h1>

      <div className="w-6/12 m-auto">
        <button
          onClick={handleClearCart}
          className="m-2 p-2 bg-black text-white rounded-xl hover:bg-red-800"
        >
          Clear Cart
        </button>
        {cartItems.length == 0 && <h1 className="text-3xl font-bold text-red-700 mt-4">Cart is Empty. Add more items to the cart.</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default CartPage;
