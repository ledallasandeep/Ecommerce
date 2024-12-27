import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { LuLamp } from "react-icons/lu";
import { PiTShirt } from "react-icons/pi";
import { BsHandbag } from "react-icons/bs";
import { LiaBabySolid } from "react-icons/lia";
import { Navbar } from "./Navbar";
import { useDispatch } from "react-redux";
import { increment } from "./Redux/CartSlice";

const Shop = () => {
  const disPatch = useDispatch();
  const cartHandler = () => {
    disPatch(increment());
  };

  const [show, setShow] = useState(1);
  const showHandler = (id) => {
    setShow(id);
  };

  const products = [
    {
      id: 1,
      image: "./trending.jpg",
      image2: "./child.png",
      image3: "./child2.jpg",
      image4: "./electronics.png",
      image5: "./furniture.jpg",
      image6: "./fashion.jpg",
      image7: "./handbag.jpg",
      name: " camera",
    },
    {
      id: 2,
      image: "./trending.jpg",
      image2: "./child.png",
      image3: "./child2.jpg",
      image4: "./electronics.png",
      image5: "./furniture.jpg",
      image6: "./fashion.jpg",
      image7: "./handbag.jpg",
      name: " camera2",
    },
    {
      id: 3,
      image: "./trending.jpg",
      image2: "./child.png",
      image3: "./child2.jpg",
      image4: "./electronics.png",
      image5: "./furniture.jpg",
      image6: "./fashion.jpg",
      image7: "./handbag.jpg",
      name: " camera",
    },
    {
      id: 4,
      image: "./trending.jpg",
      image2: "./child.png",
      image3: "./child2.jpg",
      image4: "./electronics.png",
      image5: "./furniture.jpg",
      image6: "./fashion.jpg",
      image7: "./handbag.jpg",
      name: " camera",
    },
    {
      id: 5,
      image: "./trending.jpg",
      image2: "./child.png",
      image3: "./child2.jpg",
      image4: "./electronics.png",
      image5: "./furniture.jpg",
      image6: "./fashion.jpg",
      image7: "./handbag.jpg",
      name: " camera",
    },
    {
      id: 6,
      image: "./trending.jpg",
      image2: "./child.png",
      image3: "./child2.jpg",
      image4: "./electronics.png",
      image5: "./furniture.jpg",
      image6: "./fashion.jpg",
      image7: "./handbag.jpg",
      name: " camera",
    },
    {
      id: 7,
      image: "./trending.jpg",
      image2: "./child.png",
      image3: "./child2.jpg",
      image4: "./electronics.png",
      image5: "./furniture.jpg",
      image6: "./fashion.jpg",
      image7: "./handbag.jpg",
      name: " camera",
    },
    {
      id: 8,
      image: "./trending.jpg",
      image2: "./child.png",
      image3: "./child2.jpg",
      image4: "./electronics.png",
      image5: "./furniture.jpg",
      image6: "./fashion.jpg",
      image7: "./handbag.jpg",
      name: " camera",
    },
    {
      id: 9,
      image: "./trending.jpg",
      image2: "./child.png",
      image3: "./child2.jpg",
      image4: "./electronics.png",
      image5: "./furniture.jpg",
      image6: "./fashion.jpg",
      image7: "./handbag.jpg",
      name: " camera",
    },
    {
      id: 10,
      image: "./trending.jpg",
      image2: "./child.png",
      image3: "./child2.jpg",
      image4: "./electronics.png",
      image5: "./furniture.jpg",
      image6: "./fashion.jpg",
      image7: "./handbag.jpg",
      name: " camera",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="w-[100%] h-[300px] bg-blue-300 flex justify-between  ">
        <div className="flex flex-col gap-5 justify-start text-start  h-[60%] w-[30%] p-10 my-5 mx-20">
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
              show === 1
                ? "border-b-2 border-solid border-blue-500 pb-2  "
                : " border-none"
            }  flex flex-col  items-center  `}
          >
            <FaRegStar onClick={() => showHandler(1)} className="text-2xl" />
            <h1>Hot Trending</h1>
          </div>
          <div
            className={`${
              show === 2
                ? "border-b-2 border-solid border-blue-500 pb-2 "
                : "border-none"
            }  flex flex-col  items-center  `}
          >
            <FaTv
              onClick={() => showHandler(2)}
              className=" text-2xl  text-black-500 "
            />
            <h1>Electronics</h1>
          </div>
          <div
            className={`${
              show === 3
                ? "border-b-2 border-solid border-blue-500 pb-2 "
                : "border-none"
            }  flex flex-col  items-center  `}
          >
            <LuLamp
              onClick={() => showHandler(3)}
              className=" text-2xl  text-black-500 "
            />
            <h1>Furniture</h1>
          </div>
          <div
            className={`${
              show === 4
                ? "border-b-2 border-solid border-blue-500 pb-2 "
                : "border-none"
            }  flex flex-col  items-center  `}
          >
            <PiTShirt
              onClick={() => showHandler(4)}
              className=" text-2xl  text-black-500 "
            />
            <h1>Fashion</h1>
          </div>
          <div
            className={`${
              show === 5
                ? "border-b-2 border-solid border-blue-500 pb-2 "
                : "border-none"
            }  flex flex-col  items-center  `}
          >
            <BsHandbag
              onClick={() => showHandler(5)}
              className=" text-2xl  text-black-500 "
            />
            <h1>Handbags</h1>
          </div>
          <div
            className={`${
              show === 6
                ? "border-b-2 border-solid border-blue-500 pb-2 "
                : "border-none"
            }  flex flex-col  items-center  `}
          >
            <LiaBabySolid
              onClick={() => showHandler(6)}
              className=" text-2xl  text-black-500"
            />
            <h1>BabyStore</h1>
          </div>
        </div>
      </div>
      {show === 1 && (
        <div className="flex flex-wrap gap-11 p-2 mx-20 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-1/6 p-4 shadow-lg rounded-lg bg-white"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-26 w-full object-cover rounded-md"
              />
              <h3 className="text-center mt-2">{product.name}</h3>
              <button
                onClick={cartHandler}
                className="bg-yellow-300 p-1.5 px-4 font-semibold mt-2 text-[13px] rounded"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      )}
      {show === 2 && (
        <div className="flex flex-wrap gap-11 p-2 mx-20  ">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-1/6 p-4 shadow-lg rounded-lg bg-white"
            >
              <img
                src={product.image4}
                alt={product.name}
                className="h-26 w-full object-cover rounded-md"
              />
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
      )}
      {show === 3 && (
        <div className="flex flex-wrap gap-11 p-2 mx-20  ">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-1/6 p-4 shadow-lg rounded-lg bg-white"
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
      {show === 4 && (
        <div className="flex flex-wrap gap-11 p-2 mx-20  ">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-1/6 p-4 shadow-lg rounded-lg bg-white"
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
      {show === 5 && (
        <div className="flex flex-wrap gap-11 p-2 mx-20  ">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-1/6 p-4 shadow-lg rounded-lg bg-white"
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
      {show === 6 && (
        <div className="flex flex-wrap gap-11 p-2 mx-20  ">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-1/6 p-4 shadow-lg rounded-lg bg-white"
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
      )}
    </div>
  );
};
export default Shop;
