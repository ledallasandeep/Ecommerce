import React, { useState, useEffect } from "react";
import ProductInfo from "./Store2.js";

const Practice = () => {
  const [product, getproduct] = useState(0);
  const producthandler = () => {
    getproduct();
  };

  return (
    <div className="w-[100%]">
      {ProductInfo.map((item) => (
        <div className=" flex gap-[45px] w-[70%] h-auto rounded-lg shadow-xl items-center m-[60px] px-[60px] py-[50px] bg-blue-100">
          <div className="flex flex-col gap-[15px]  w-[80px]  h-auto">
            <img
              src={item.images.baby}
              alt=""
              className="h-[60px] w-[45px] object-cover rounded-md mx-[20px]"
            />
            <img
              src={item.images.baby}
              alt=""
              className="h-[60px] w-[45px] object-cover rounded-md mx-[20px]"
            />
            <img
              src={item.images.baby}
              alt=""
              className="h-[60px] w-[45px] object-cover rounded-md mx-[20px]"
            />
            <img
              src={item.images.baby}
              alt=""
              className="h-[60px] w-[45px] object-cover rounded-md mx-[20px]"
            />
          </div>
          <img
            src={item.images.baby}
            alt=""
            className="h-[300px] w-[200px] object-cover rounded-md "
          />
          <div className="flex flex-col text-start gap-[10px] px-[15px] rounded shadow-xl w-[50%] p-[10px] bg-white">
            <h1 className="font-bold"> {item.name}</h1>
            <h1 className="text-sm my-2"> {item.description}</h1>
            <hr />
            <div className="flex items-center gap-[5px]">
              <h1 className="font-bold"> ${item.price}</h1>
              <h1 className="text-sm"> {item.currency}</h1>
            </div>
            <h1 className="text-sm text-green-600 font-bold">
              {item.availability}
            </h1>
            <h1> {item.ratings.average_rating}* Rating</h1>
            <h1> {item.ratings.total_reviews}.... +Reviews</h1>
            <h1> {item.images.alt_text}</h1>
            <div className="rounded-2xl  p-[5px] px-[45px] bg-yellow-400 w-[50%]">
              <h1 className="text-sm font-semibold">Add To Cart</h1>
            </div>
            <div className="rounded-2xl  p-[5px] px-[45px] bg-pink-400 w-[50%]">
              <h1 className="text-sm font-semibold">WishList</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Practice;
