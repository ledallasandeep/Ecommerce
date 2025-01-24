import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { LuLamp } from "react-icons/lu";
import { PiTShirtBold } from "react-icons/pi";
import { PiHandbagBold } from "react-icons/pi";
import { FaBaby } from "react-icons/fa";
import { Navbar } from "./Navbar";
import { useDispatch } from "react-redux";
import { increment } from "./Redux/CartSlice";
import { Link } from "react-router-dom";
import RelatedProduct from "./Relatedproduct";

const Shop = ({ items }) => {
  const disPatch = useDispatch();
  const cartHandler = () => {
    disPatch(increment());
  };

  const [show, setShow] = useState("all");

  const filterByProduct = (category) => {
    setShow(category);
  };

  // Filter items based on the selected category
  const filteredItems =
    show === "all"
      ? items
      : items.filter((product) => product.category === show);

  return (
    <div>
      <div className="w-[100%] h-[300px] bg-blue-300 flex justify-between  ">
        <div className="flex flex-col gap-5 justify-start text-start  h-[60%] w-[30%] p-10 my-5 mx-10">
          <h1 className="text-xl font-bold">
            PlayStation VR Mega Pack Bundle 3
          </h1>
          <p className="text-sm font-semi-bold">
            There are many variations passages of available, but the majority
            have suffered alteration some form, by injected humour
          </p>
          <button className="w-[40%] h-auto text-white bg-red-600 rounded-md p-1">
            Shop Now
          </button>
        </div>
        <img src="vr.png" className="w-[45%] h-[100%] mx-[8%]" />
      </div>
      <div className="bg-gray-200 p-5 m-2">
        <div className="flex items-center justify-between ">
          <h1 className="text-xl font-bold">Search Trending</h1>
          <div
            className={`${
              show === "trending"
                ? "border-b-2 border-solid border-blue-500 pb-2  "
                : " border-none"
            }  flex flex-col  items-center hover:scale-110 hover:scale-110 `}
          >
            <FaRegStar
              onClick={() => filterByProduct("all")}
              className="text-2xl"
            />
            <h1>Hot Trending</h1>
          </div>
          <div
            className={`${
              show === "electronics"
                ? "border-b-2 border-solid border-blue-500 pb-2 "
                : "border-none"
            }  flex flex-col  items-center hover:scale-110  `}
          >
            <FaTv
              onClick={() => filterByProduct("Electronics")}
              className=" text-2xl  text-black-500 "
            />
            <h1>Electronics</h1>
          </div>
          <div
            className={`${
              show === "furniture"
                ? "border-b-2 border-solid border-blue-500 pb-2 "
                : "border-none"
            }  flex flex-col  items-center hover:scale-110  `}
          >
            <LuLamp
              onClick={() => filterByProduct("Furniture")}
              className=" text-2xl  text-black-500 "
            />
            <h1>Furniture</h1>
          </div>
          <div
            className={`${
              show === "fashion"
                ? "border-b-2 border-solid border-blue-500 pb-2 "
                : "border-none"
            }  flex flex-col  items-center hover:scale-110  `}
          >
            <PiTShirtBold
              onClick={() => filterByProduct("Clothing")}
              className=" text-2xl font-bold text-black-500 "
            />

            <h1>Fashion</h1>
          </div>
          <div
            className={`${
              show === "handbags"
                ? "border-b-2 border-solid border-blue-500 pb-2 "
                : "border-none"
            }  flex flex-col  items-center hover:scale-110  `}
          >
            <PiHandbagBold
              onClick={() => filterByProduct("Accessories")}
              className=" text-2xl font-bold text-black-500 "
            />

            <h1>Handbags</h1>
          </div>
          <div
            className={`${
              show === "baby"
                ? "border-b-2 border-solid border-blue-500 pb-2 "
                : "border-none"
            }  flex flex-col  items-center hover:scale-110  `}
          >
            <FaBaby
              onClick={() => filterByProduct("Baby Clothing")}
              className=" text-2xl  text-black-500"
            />

            <h1>BabyStore</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-12  p-2 mx-10 justify-center ">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="w-1/6 p-4 shadow-lg rounded-lg bg-white hover:bg-sky-300 hover:scale-110  hover:scale-110 "
          >
            <Link to={`/Productpage/${item.id}`}>
              <img
                src={item.image}
                alt={item.name}
                className="h-26 w-full object-cover rounded-md"
              />
            </Link>

            <h3 className="text-center mt-2">{item.name}</h3>
            <button
              onClick={cartHandler}
              className="bg-yellow-300 p-1.5 px-4 font-semibold mt-2 text-[13px] rounded"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>

      {/* {filterByProduct === "Electronics" && (
        <div className="flex flex-wrap gap-12 p-2 mx-10  ">
          {filterByProduct.map((product) => (
            <div
              key={product.id}
              className="w-1/6 p-4 shadow-lg rounded-lg bg-white hover:bg-sky-300 hover:scale-110 "
            >
              <Link to={`/Productpage/${product.id}`}>
                <img
                  src={product.image2}
                  alt={product.name}
                  className="h-26 w-full object-cover rounded-md"
                />
              </Link>
              <h3 className="text-center mt-2">biscuit</h3>
              <button
                onClick={cartHandler}
                className="bg-yellow-400 p-1 mt-2 text-sm rounded"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      )} */}
      {/* {show === "furniture" && (
        <div className="flex flex-wrap gap-12 p-2 mx-10  ">
          {items.map((product) => (
            <div
              key={product.id}
              className="w-1/6 p-4 shadow-lg rounded-lg bg-white hover:bg-sky-300 hover:scale-110 "
            >
              <img
                src={product.image5}
                alt={product.name}
                className="h-26 w-full object-cover rounded-md"
              />
              <h3 className="text-center mt-2">lays</h3>
              <button
                onClick={cartHandler}
                className="bg-yellow-400 p-1 mt-2 text-sm rounded"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      )}
      {show === "fashion" && (
        <div className="flex flex-wrap gap-12 p-2 mx-10  ">
          {items.map((product) => (
            <div
              key={product.id}
              className="w-1/6 p-4 shadow-lg rounded-lg bg-white hover:bg-sky-300 hover:scale-110 "
            >
              <img
                src={product.image6}
                alt={product.name}
                className="h-26 w-full object-cover rounded-md"
              />
              <h3 className="text-center mt-2">shirts</h3>
              <button
                onClick={cartHandler}
                className="bg-yellow-400 p-1 mt-2 text-sm rounded"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      )}
      {show === "handbags" && (
        <div className="flex flex-wrap gap-12 p-2 mx-10  ">
          {items.map((product) => (
            <div
              key={product.id}
              className="w-1/6 p-4 shadow-lg rounded-lg bg-white hover:bg-sky-300 hover:scale-110 "
            >
              <img
                src={product.image7}
                alt={product.name}
                className="h-26 w-full object-cover rounded-md"
              />
              <h3 className="text-center mt-2">pants</h3>
              <button
                onClick={cartHandler}
                className="bg-yellow-400 p-1 mt-2 text-sm rounded"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      )}
      {show === "baby" && (
        <div className="flex flex-wrap gap-12 p-2 mx-10  ">
          {items.map((product) => (
            <div
              key={product.id}
              className="w-1/6 p-4 shadow-lg rounded-lg bg-white hover:bg-sky-300 hover:scale-110 "
            >
              <img
                src={product.image3}
                alt={product.name}
                className="h-26 w-full object-cover rounded-md"
              />
              <h3 className="text-center mt-2">baby</h3>
              <button
                onClick={cartHandler}
                className="bg-yellow-400 p-1 mt-2 text-sm rounded"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      )}  */}
      {/* <img src={trend1} alt="" /> */}
    </div>
  );
};
export default Shop;
