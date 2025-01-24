import React from "react";
import { Link } from "react-router-dom";
import cartHandler from "./Shop";

const RelatedProduct = ({ items }) => {
  <div className="flex flex-wrap gap-12 p-2 mx-10  ">
    {items.map((product) => (
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
  </div>;
};

export default RelatedProduct;

// {
//   show === "furniture" && (
//     <div className="flex flex-wrap gap-12 p-2 mx-10  ">
//       {items.map((product) => (
//         <div
//           key={product.id}
//           className="w-1/6 p-4 shadow-lg rounded-lg bg-white hover:bg-sky-300 hover:scale-110 "
//         >
//           <img
//             src={product.image5}
//             alt={product.name}
//             className="h-26 w-full object-cover rounded-md"
//           />
//           <h3 className="text-center mt-2">lays</h3>
//           <button
//             onClick={cartHandler}
//             className="bg-yellow-400 p-1 mt-2 text-sm rounded"
//           >
//             Add to cart
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }
// {
//   show === "fashion" && (
//     <div className="flex flex-wrap gap-12 p-2 mx-10  ">
//       {items.map((product) => (
//         <div
//           key={product.id}
//           className="w-1/6 p-4 shadow-lg rounded-lg bg-white hover:bg-sky-300 hover:scale-110 "
//         >
//           <img
//             src={product.image6}
//             alt={product.name}
//             className="h-26 w-full object-cover rounded-md"
//           />
//           <h3 className="text-center mt-2">shirts</h3>
//           <button
//             onClick={cartHandler}
//             className="bg-yellow-400 p-1 mt-2 text-sm rounded"
//           >
//             Add to cart
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }
// {
//   show === "handbags" && (
//     <div className="flex flex-wrap gap-12 p-2 mx-10  ">
//       {items.map((product) => (
//         <div
//           key={product.id}
//           className="w-1/6 p-4 shadow-lg rounded-lg bg-white hover:bg-sky-300 hover:scale-110 "
//         >
//           <img
//             src={product.image7}
//             alt={product.name}
//             className="h-26 w-full object-cover rounded-md"
//           />
//           <h3 className="text-center mt-2">pants</h3>
//           <button
//             onClick={cartHandler}
//             className="bg-yellow-400 p-1 mt-2 text-sm rounded"
//           >
//             Add to cart
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }
// {
//   show === "baby" && (
//     <div className="flex flex-wrap gap-12 p-2 mx-10  ">
//       {items.map((product) => (
//         <div
//           key={product.id}
//           className="w-1/6 p-4 shadow-lg rounded-lg bg-white hover:bg-sky-300 hover:scale-110 "
//         >
//           <img
//             src={product.image3}
//             alt={product.name}
//             className="h-26 w-full object-cover rounded-md"
//           />
//           <h3 className="text-center mt-2">baby</h3>
//           <button
//             onClick={cartHandler}
//             className="bg-yellow-400 p-1 mt-2 text-sm rounded"
//           >
//             Add to cart
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }
