import React, { useState } from "react";
import { FaRecycle, FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { IoIosMenu } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { h1 } from "react-router-dom";
import Shop from "./Shop";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const [change, setChange] = useState(false);
  const handlerChange = () => {
    setChange(!change);
  };
  const updatedCart = useSelector((state) => state.shopCart.value);

  return (
    <div>
      <div className="py-[10px] px-[30px] bg-green-300 flex items-center justify-between">
        <h1 className="text-[25px] font-bold ">letsbuy.</h1>
        <div className="flex justify-between w-[50%] text-sm font-bold">
          <h1>Home</h1>
          <h1>Shop</h1>
          <h1>Pages</h1>
          <h1>Blog</h1>
          <h1>About</h1>
          <h1>Contact</h1>
          <h1>Become A Vender</h1>
        </div>
        <div className="flex w-[15%] p-2 justify-around relative ">
          <FaRecycle className="text-[20px]" />
          <FaRegHeart className="text-[20px] font-bold" />
          <GrCart className="text-[20px] font-bold" />
          <h1 className="bg-red-500 rounded-full text-white text-[8px] font-bold  px-1.5 py-0.5 absolute right-[12px] top-[1px] ">
            {updatedCart}
          </h1>
        </div>
      </div>
      <div className="flex h-[40px] justify-center bg-red-200 gap-[20px]">
        <div
          className="flex gap-[15px] items-center p-[10px] bg-blue-200 h-[100%] relative"
          onClick={handlerChange}
        >
          <IoIosMenu className="text-xl" />
          <p className="text-sm  font-semibold">ALL CATEGORIES</p>
          <p>
            {change ? (
              <RiArrowDownSLine />
            ) : (
              <MdKeyboardArrowRight value={change} className="" />
            )}{" "}
          </p>
        </div>
        <div className="flex h-[100%] items-center relative w-[600px] ">
          <IoSearchOutline className="absolute left-[10px]" />
          <input
            placeholder="search for  products"
            className="pt-[3px] outline-none pl-[40px] pb-[5px] h-[80%] w-[600px]"
          />
          <p className="absolute bg-red-400 py-[2.5px] px-[6px] text-white right-[5px] rounded-sm cursor-pointer">
            Search
          </p>
        </div>
      </div>
    </div>
  );
};
