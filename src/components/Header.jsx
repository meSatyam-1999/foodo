import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header flex justify-between border border-black bg-[#F2FF9B]">
      <div className="logo w-[160px] ml-3">
        <img src="./logo2.png" alt="App logo" />
      </div>

      <div className="nav-items">
        <ul className="flex mt-10 cursor-pointer text-2xl py-6 space-x-8">
          <li className="hover:underline">Home</li>
          <li className="hover:underline">About Us</li>
          <li className="hover:underline">Offers</li>
          <li className="hover:underline">Contact Us</li>
          
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

      <div className="cart w-[60px] mr-16 mt-10 cursor-pointer">
        <img src="./cart2.png" alt="cart logo" />
      </div>
    </div>
  );
};

export default Header;
