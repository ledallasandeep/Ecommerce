import React from "react";
const TrendInfo = [
  {
    product_id: "12345",
    name: "Pink Hoodie",
    description:
      "Stay cozy and stylish this winter with our pink women's hoodie and winter cap set.",
    price: 99.99,
    currency: "USD",
    availability: "in_stock",
    category: {
      category_id: "1",
      name: "Electronics",
    },
    ratings: {
      average_rating: 4.5,
      total_reviews: 120,
    },
    images: {
      baby: "./trending.jpg",
      alt_text: "Pick women's Hoodie",
    },
  },
];

const Jeevana = () => {
  return (
    <div className="w-[100%] py-[100px]">
      {TrendInfo.map((item) => (
        <div className=" flex gap-[45px] w-[70%] h-auto rounded-lg shadow-xl items-center m-auto  px-[60px] py-[50px] bg-blue-100">
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

          <div className="flex flex-col text-start gap-[10px] px-[15px] rounded-lg shadow-xl w-[50%] p-[10px] bg-white">
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
            <h1 className="font-semibold">
              {item.ratings.average_rating}* Rating
            </h1>
            <h1 className="font-semibold">
              {" "}
              {item.ratings.total_reviews}.... +Reviews
            </h1>
            <h1> {item.images.alt_text}</h1>
            <div className="flex gap-[10px]">
              <button className="text-sm text-white font-semibold rounded-2xl  p-[5px] px-[20px] bg-yellow-500">
                Add To Cart
              </button>
              <button className="text-sm text-white font-semibold rounded-2xl  p-[5px] px-[20px] bg-red-600">
                WishList
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Jeevana;
