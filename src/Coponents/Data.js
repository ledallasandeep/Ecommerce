const items = [
  {
    id: "1",
    name: "Wireless Headphones",
    description:
      "High-quality over-ear wireless headphones with noise-canceling feature.",
    price: 99.99,
    currency: "USD",
    availability: "in_stock",
    category: "Electronics",

    ratings: {
      average_rating: 4.5,
      total_reviews: 120,
    },
    image: "trend5.jpg",
  },
  {
    id: "2",
    name: "iPhone 11",
    description: "Apple iPhone 11 with 64GB storage and A13 Bionic chip.",
    price: 699.99,
    currency: "USD",
    availability: "in_stock",
    category: "Electronics",

    ratings: {
      average_rating: 4.8,
      total_reviews: 450,
    },
    image: "./elec2.jpg",
  },
  {
    id: "3",
    name: "Hoodie",
    description: "Comfortable cotton hoodie available in multiple sizes.",
    price: 29.99,
    currency: "USD",
    availability: "in_stock",
    category: "Clothing",
    ratings: {
      average_rating: 4.2,
      total_reviews: 89,
    },
    image: "./trend1.jpg",
  },
  {
    id: "4",
    name: "Makeup Kit",
    description: "Complete makeup kit with foundation, mascara, and more.",
    price: 49.99,
    currency: "USD",
    availability: "in_stock",
    category: "Beauty",

    ratings: {
      average_rating: 4.7,
      total_reviews: 210,
    },
    image: "./makeupkit.jpg",
  },
  {
    id: "5",
    name: "Winter Jacket",
    description: "Warm winter jacket for cold weather.",
    price: 79.99,
    currency: "USD",
    availability: "in_stock",
    category: "Clothing",

    ratings: {
      average_rating: 4.3,
      total_reviews: 130,
    },
    image: "./winterjacket.jpg",
  },
  {
    id: "6",
    name: "Shopping Bags Set",
    description: "Eco-friendly reusable shopping bags set of 5.",
    price: 19.99,
    currency: "USD",
    availability: "in_stock",
    category: "Accessories",

    ratings: {
      average_rating: 4.6,
      total_reviews: 56,
    },
    image: "./shoppingbags.jpg",
  },
  {
    id: "7",
    name: "Women Caps",
    description: "Stylish and comfortable women’s caps.",
    price: 14.99,
    currency: "USD",
    availability: "in_stock",
    category: {
      category_id: "2",
      name: "Clothing",
    },
    ratings: {
      average_rating: 4.4,
      total_reviews: 75,
    },
    image: "./womencaps.jpg",
  },
  {
    id: "8",
    name: "Yellow Ladies T-shirt",
    description: "Bright yellow t-shirt for women, soft cotton material.",
    price: 24.99,
    currency: "USD",
    availability: "in_stock",
    category: "Clothing",

    ratings: {
      average_rating: 4.5,
      total_reviews: 200,
    },
    image: "./yellowtshirt.jpg",
  },
  {
    id: "9",
    name: "iPhone 12 Pro Max",
    description:
      "Apple iPhone 12 Pro Max with 128GB storage and A14 Bionic chip.",
    price: 1099.99,
    currency: "USD",
    availability: "in_stock",
    category: "Electronics",

    ratings: {
      average_rating: 4.9,
      total_reviews: 500,
    },
    image: "./iphone12promax.jpg",
  },
  {
    id: "10",
    name: "iPhone 13 Pro Max",
    description:
      "Apple iPhone 13 Pro Max with 256GB storage and ProMotion display.",
    price: 1199.99,
    currency: "USD",
    availability: "in_stock",
    category: "Electronics",

    ratings: {
      average_rating: 5.0,
      total_reviews: 750,
    },
    image: {
      baby: "./iphone13promax.jpg",
      alt_text: "iPhone 13 Pro Max",
    },
  },
  {
    id: "11",
    name: "iPhone 14 Pro Max",
    description:
      "Apple iPhone 14 Pro Max with 512GB storage and Dynamic Island.",
    price: 1299.99,
    currency: "USD",
    availability: "in_stock",
    category: "Electronics",

    ratings: {
      average_rating: 4.8,
      total_reviews: 640,
    },
    image: {
      baby: "./iphone14promax.jpg",
      alt_text: "iPhone 14 Pro Max",
    },
  },
  {
    id: "12",
    name: "iPhone 15 Pro Max",
    description: "Apple iPhone 15 Pro Max with 1TB storage and A17 chip.",
    price: 1399.99,
    currency: "USD",
    availability: "in_stock",
    category: "Electronics",

    ratings: {
      average_rating: 4.9,
      total_reviews: 800,
    },
    image: {
      baby: "./iphone15promax.jpg",
      alt_text: "iPhone 15 Pro Max",
    },
  },
  {
    id: "13",
    name: "3 Seater Sofa",
    description: "Comfortable 3-seater sofa with soft cushions.",
    price: 499.99,
    currency: "USD",
    availability: "in_stock",
    category: "Furniture",

    ratings: {
      average_rating: 4.7,
      total_reviews: 180,
    },
    image: {
      baby: "./sofa.jpg",
      alt_text: "3 Seater Sofa",
    },
  },
  {
    id: "14",
    name: "Wooden Chair",
    description: "Solid wooden chair with ergonomic design.",
    price: 149.99,
    currency: "USD",
    availability: "in_stock",
    category: "Furniture",

    ratings: {
      average_rating: 4.6,
      total_reviews: 65,
    },
    image: {
      baby: "./woodenchair.jpg",
      alt_text: "Wooden Chair",
    },
  },
  {
    id: "15",
    name: "Women Kurthi",
    description: "Traditional women’s kurthi in cotton fabric.",
    price: 39.99,
    currency: "USD",
    availability: "in_stock",
    category: {
      category_id: "2",
      name: "Clothing",
    },
    ratings: {
      average_rating: 4.4,
      total_reviews: 150,
    },
    image: {
      baby: "./womenkurthi.jpg",
      alt_text: "Women Kurthi",
    },
  },
  {
    id: "16",
    name: "Women Lehenga",
    description: "Beautiful women’s lehenga in vibrant colors.",
    price: 149.99,
    currency: "USD",
    availability: "in_stock",
    category: {
      category_id: "2",
      name: "Clothing",
    },
    ratings: {
      average_rating: 4.7,
      total_reviews: 200,
    },
    image: {
      baby: "./womenlehenga.jpg",
      alt_text: "Women Lehenga",
    },
  },
  {
    id: "17",
    name: "Half Saree",
    description: "Traditional half saree for women.",
    price: 99.99,
    currency: "USD",
    availability: "in_stock",
    category: {
      category_id: "2",
      name: "Clothing",
    },
    ratings: {
      average_rating: 4.5,
      total_reviews: 110,
    },
    image: {
      baby: "./halfsaree.jpg",
      alt_text: "Half Saree",
    },
  },
  {
    id: "18",
    name: "Women Handbag",
    description: "Elegant leather women’s handbag.",
    price: 79.99,
    currency: "USD",
    availability: "in_stock",
    category: {
      category_id: "4",
      name: "Accessories",
    },
    ratings: {
      average_rating: 4.8,
      total_reviews: 210,
    },
    image: {
      baby: "./womenhandbag.jpg",
      alt_text: "Women Handbag",
    },
  },
  {
    id: "19",
    name: "Baby T-shirt",
    description: "Soft cotton t-shirt for babies.",
    price: 12.99,
    currency: "USD",
    availability: "in_stock",
    category: {
      category_id: "6",
      name: "Baby Clothing",
    },
    ratings: {
      average_rating: 4.9,
      total_reviews: 150,
    },
    image: {
      baby: "./babytshirt.jpg",
      alt_text: "Baby T-shirt",
    },
  },
  {
    id: "20",
    name: "Baby Manypokopants",
    description: "Comfortable and soft Pampers for babies.",
    price: 19.99,
    currency: "USD",
    availability: "in_stock",
    category: {
      category_id: "6",
      name: "Baby Essentials",
    },
    ratings: {
      average_rating: 4.8,
      total_reviews: 320,
    },
    image: {
      baby: "./babymanypokopants.jpg",
      alt_text: "Baby Manypokopants",
    },
  },
  {
    id: "21",
    name: "Baby Underwear",
    description: "Soft and comfortable baby underwear.",
    price: 7.99,
    currency: "USD",
    availability: "in_stock",
    category: {
      category_id: "6",
      name: "Baby Clothing",
    },
    ratings: {
      average_rating: 4.7,
      total_reviews: 200,
    },
    image: {
      baby: "./babyunderwear.jpg",
      alt_text: "Baby Underwear",
    },
  },
  {
    id: "22",
    name: "Baby Caps",
    description: "Cute and soft baby caps.",
    price: 5.99,
    currency: "USD",
    availability: "in_stock",
    category: {
      category_id: "6",
      name: "Baby Clothing",
    },
    ratings: {
      average_rating: 4.6,
      total_reviews: 180,
    },
    image: {
      baby: "./babycaps.jpg",
      alt_text: "Baby Caps",
    },
  },
];

export default items;
