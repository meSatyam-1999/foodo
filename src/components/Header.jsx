import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header flex justify-between border border-black bg-[#F2FF9B]">
      <div className="logo w-[160px] ml-3">
        <img src="./logo2.png" alt="App logo" />
      </div>

      <div className="nav-items">
        <ul className="flex mt-10 cursor-pointer text-2xl py-6 space-x-8">
          <li className="hover:underline"><Link to="/">Home</Link></li>
          <li className="hover:underline"><Link to="/aboutus">About Us</Link></li>
          <li className="hover:underline"><Link to="/offers">Offers</Link></li>
          <li className="hover:underline"><Link to="/contactus">Contact Us</Link></li>
          
          <button
            className="border border-black bg-slate-300 p-2 rounded-md"
            onClick={() => {
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
           {btnName}
          </button>
        </ul>
      </div>

      <div className="cart w-[150px] mr-16 mt-16 cursor-pointer">
        {/* <img src="./cart2.png" alt="cart logo" /> */}
        <h1 className="text-lg font-bold"><Link to="/cart">Cart - ({cartItems.length} items)</Link></h1>
      </div>
    </div>
  );
};

export default Header;
