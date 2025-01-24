import React, { useState, useEffect } from "react";
import ProductInfo from "./Store2.js";
import { useParams } from "react-router-dom";
import items from "./Data.js";
import { Navbar } from "./Navbar.js";
import Shop from "./Shop.js";
import RelatedProduct from "./Relatedproduct.js";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  useEffect(() => {
    const filterProduct = items.filter((prod) => prod.id == id);
    setProduct(filterProduct[0]);
    const filterrelatedproduct = items.filter(
      (RP) => RP.category === product.category
    );
    setRelatedProduct(filterrelatedproduct);
  }, [id, product.category]);

  return (
    <div className="w-[100%] flex flex-col gap-10 ">
      <div className=" flex gap-[45px] w-[70%] h-auto rounded-lg shadow-xl justify-center my-[30px] mx-auto  px-[100px] py-[50px] bg-blue-100">
        <div className="flex flex-col gap-[15px]  w-[80px]  h-auto">
          <img
            src={product.image}
            className="h-[60px] w-[45px] object-cover rounded-md mx-[20px]"
          />
          <img
            src={product.image}
            className="h-[60px] w-[45px] object-cover rounded-md mx-[20px]"
          />
          <img
            src={product.image}
            className="h-[60px] w-[45px] object-cover rounded-md mx-[20px]"
          />
          <img
            src={product.image}
            className="h-[60px] w-[45px] object-cover rounded-md mx-[20px]"
          />
        </div>
        <img
          src={product.image}
          className="h-[300px] w-[200px] object-cover rounded-md "
        />

        <div className="flex flex-col text-start gap-[10px] px-[15px] rounded-lg shadow-xl w-[50%] p-[10px] bg-white">
          <h1 className="font-bold"> {product.name}</h1>
          <h1 className="text-sm my-2"> {product.description}</h1>
          <hr />
          <div className="flex products-center gap-[5px]">
            <h1 className="font-bold"> ${product.price}</h1>
            <h1 className="text-sm"> {product.currency}</h1>
          </div>
          <h1 className="text-sm text-green-600 font-bold">
            {product.availability}
          </h1>
          <h1 className="font-semibold">
            {/* {product.ratings.average_rating}* Rating */}
          </h1>
          <h1 className="font-semibold">
            {" "}
            {/* {product.ratings.total_reviews}.... +Reviews */}
          </h1>
          <h1> {product.stock}</h1>
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
      <h1 className="text-center text-3xl font-bold"> Related Products</h1>
      <div className="flex  flex-wrap gap-12 p-2 mx-10   ">
        {relatedProduct.map((product) => (
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
              // onClick={cartHandler}
              className="bg-yellow-400 p-1 mt-2 text-sm rounded"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
      ;
    </div>
  );
};

export default ProductDetails;
