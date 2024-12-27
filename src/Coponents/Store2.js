const products = [
  {
    product_id: "12345",
    name: "Wireless Headphones",
    description:
      "High-quality over-ear wireless headphones with noise-canceling feature.",
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
      baby: "./headphone.jpg",
      alt_text: "Wireless Headphones",
    },
  },
];

export default products;
