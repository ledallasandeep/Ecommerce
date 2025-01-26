import React from "react";
import { useParams } from "react-router-dom";
import items from "./Data";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtoCart } from "./Redux/CartSlice";

const Searchitem = ({ items }) => {
  const disPatch = useDispatch();

  const { item } = useParams();

  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filteredData = () => {
      const data = items.filter((p) =>
        p.description.toLowerCase().includes(item.toLowerCase())
      );
      //   console.log(data);
      setFilterData(data);
    };

    filteredData();
  }, [item]);

  return (
    <div>
      {" "}
      <div className="flex flex-wrap gap-12  p-2 m-auto justify-center ">
        {filterData.map((item) => (
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
              onClick={() => disPatch(addtoCart({ items }))}
              className="bg-yellow-300 p-1.5 px-4 font-semibold mt-2 text-[13px] rounded"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>{" "}
    </div>
  );
};
export default Searchitem;
