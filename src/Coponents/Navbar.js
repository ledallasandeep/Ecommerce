import React, { useState } from "react";
import { FaRecycle, FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { IoIosMenu } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchItem}`);
    searchItem("");
  };

  const [change, setChange] = useState(false);
  const handlerChange = () => {
    setChange(!change);
  };

  const cartItems = useSelector((state) => state.cart.cart.length); // Fallback to 0 if undefined

  return (
    <div className="">
      {/* Navbar */}
      <div className="py-3 px-5 bg-green-300 flex items-center justify-between md:px-5 lg:px-10">
        <h1 className="text-[25px] font-bold">letsbuy.</h1>
        <div className="flex justify-between w-[50%] text-sm font-bold cursor-pointer">
          <h1 className="hover:text-blue-500">Home</h1>
          <h1 className="hover:text-blue-500">Shop</h1>
          <h1 className="hover:text-blue-500">Pages</h1>
          <h1 className="hover:text-blue-500">Blog</h1>
          <h1 className="hover:text-blue-500">About</h1>
          <h1 className="hover:text-blue-500">Contact</h1>
          <h1 className="hover:text-blue-500">Become A Vendor</h1>
        </div>
        <div className="flex w-[15%] p-2 justify-around relative">
          <FaRecycle className="text-[20px]" />
          <FaRegHeart className="text-[20px] font-bold" />
          <h1 className="bg-red-500 rounded-full text-white text-[8px] font-bold px-1.5 py-0.5 absolute right-[70px] top-[1px]">
            0
          </h1>
          <Link to={"/cart"}>
            <GrCart className="text-[20px] font-bold" />
            <h1 className="bg-red-500 rounded-full text-white text-[8px] font-bold px-1.5 py-0.5 absolute right-[12px] top-[1px]">
              {cartItems}
            </h1>
          </Link>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex h-[40px] justify-center bg-red-200 gap-[20px]">
        <div className="flex gap-[15px] items-center p-[10px] bg-blue-200 h-[100%] relative">
          <IoIosMenu className="text-xl" />
          <p className="text-sm font-semibold">ALL CATEGORIES</p>
          <p onClick={handlerChange}>
            {change ? (
              <RiArrowDownSLine />
            ) : (
              <MdKeyboardArrowRight value={change} className="" />
            )}
          </p>
        </div>
        <div className="flex h-[100%] items-center relative w-[600px]">
          <IoSearchOutline className="absolute left-[10px]" />

          <form onSubmit={handleSubmit}>
            <input
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              placeholder="Search for products"
              className="pt-[3px] outline-none pl-[40px] pb-[5px] h-[80%] w-[600px]"
            ></input>
          </form>
          <Link to="/search/">
            <button className="absolute bottom-[6px] bg-red-400  py-[1px] px-[6px] text-white right-[5px] rounded-sm cursor-pointer">
              Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
