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
  };

  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 399;
  const totalPrice = quantity * pricePerItem;

  const changeQuantity = (change) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };

  const [change, setChange] = useState(false);
  const handlerChange = () => {
    setChange(!change);
  };

  const updatedCart = useSelector((state) => state.shopCart?.value || 0); // Fallback to 0 if undefined

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
          <GrCart className="text-[20px] font-bold" onClick={toggleCart} />
          <h1 className="bg-red-500 rounded-full text-white text-[8px] font-bold px-1.5 py-0.5 absolute right-[12px] top-[1px]">
            {updatedCart}
          </h1>
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

      {isCartOpen && (
        <div className="fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center">
          <div className="p-10 w-[70%] bg-white rounded-lg shadow-xl">
            <div className="flex justify-between items-center w-[60%] m-auto">
              <div className="flex">
                <img
                  src="./trend1.jpg"
                  alt="Product Image"
                  className="w-[120px] h-[80px] rounded-lg shadow-xl"
                />
                <div className="flex flex-col gap-[2px] p-2 items-start mx-2">
                  <h1 className="text-xl font-semibold text-start w-full">
                    Hoodie
                  </h1>
                  <h1 className="text-sm font-semibold text-start w-full">
                    Rs {pricePerItem}
                  </h1>
                </div>
              </div>
              <div className="flex items-center gap-[15px]">
                <button
                  onClick={() => changeQuantity(-1)}
                  className="px-5 bg-transparent border-red-700 border-[1.5px] text-red-700 text-[19px] font-[900] rounded-lg hover:bg-red-600 focus:outline-none hover:text-white"
                >
                  -
                </button>

                <div className="flex items-center justify-center text-xl font-semibold">
                  {quantity}
                </div>

                <button
                  onClick={() => changeQuantity(1)}
                  className="px-5 bg-transparent border-red-700 border-[1.5px] text-red-700 text-xl font-[900] rounded-lg hover:bg-red-600 focus:outline-none hover:text-white"
                >
                  +
                </button>
              </div>
            </div>
            <hr className="border-b-1 border-gray-400 w-[60%] mx-auto my-5" />
            <div className="flex justify-between mx-auto w-[60%]">
              <h1 className="text-lg font-semibold">Total Amount</h1>
              <h1 className="text-lg font-semibold">Rs {totalPrice}</h1>
            </div>
            <div className="flex justify-end gap-3 my-2 w-[65%] m-auto">
              <button
                className="text-sm text-black font-semibold rounded-2xl p-[5px] px-[20px] border-red-500 border-[1.5px] hover:bg-red-600 focus:outline-none hover:text-white"
                onClick={toggleCart}
              >
                Close
              </button>
              <button className="text-sm text-white font-semibold rounded-2xl p-[5px] px-[20px] bg-green-600">
                Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
