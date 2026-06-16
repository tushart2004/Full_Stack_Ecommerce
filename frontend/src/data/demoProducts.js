import product1 from "../Components/Assets/Product_1.jpg";
import product2 from "../Components/Assets/Product_2.jpg";
import product3 from "../Components/Assets/Product_3.jpg";
import product4 from "../Components/Assets/Product_4.jpg";
import product5 from "../Components/Assets/Product_5.jpg";
import product6 from "../Components/Assets/Product_6.jpg";
import product7 from "../Components/Assets/Product_7.jpg";
import product8 from "../Components/Assets/Product_8.jpg";
import product9 from "../Components/Assets/Product_9.jpg";
import product10 from "../Components/Assets/Product_10.jpg";
import product11 from "../Components/Assets/Product_11.jpg";
import product12 from "../Components/Assets/Product_12.jpg";
import product13 from "../Components/Assets/Product_13.jpg";
import product14 from "../Components/Assets/Product_14.jpg";
import product15 from "../Components/Assets/Product_15.jpg";
import product16 from "../Components/Assets/Product_16.jpg";
import product17 from "../Components/Assets/Product_17.jpg";
import product18 from "../Components/Assets/Product_18.jpg";
import product19 from "../Components/Assets/Product_19.jpg";
import product20 from "../Components/Assets/Product_20.jpg";
import product21 from "../Components/Assets/Product_21.jpg";

const productDescriptions = {
  "Fruits and Vegetables":
    "Freshly picked produce selected for everyday cooking, snacking, and healthy family meals.",
  Grocery:
    "Pantry staples packed for convenience, quality, and dependable flavor in every meal.",
  "Dairy Products":
    "Creamy dairy essentials sourced for freshness and delivered ready for breakfast, tea, and desserts.",
};

const products = [
  ["Farm Fresh Apples", "Fruits and Vegetables", product1, 120, 150],
  ["Organic Bananas", "Fruits and Vegetables", product2, 60, 80],
  ["Green Grapes", "Fruits and Vegetables", product3, 95, 120],
  ["Crisp Carrots", "Fruits and Vegetables", product4, 45, 60],
  ["Fresh Tomatoes", "Fruits and Vegetables", product5, 35, 50],
  ["Broccoli Crown", "Fruits and Vegetables", product6, 85, 110],
  ["Basmati Rice Pack", "Grocery", product7, 240, 280],
  ["Whole Wheat Atta", "Grocery", product8, 210, 250],
  ["Toor Dal Premium", "Grocery", product9, 165, 195],
  ["Cold Pressed Oil", "Grocery", product10, 320, 380],
  ["Breakfast Cereal", "Grocery", product11, 180, 220],
  ["Masala Spice Box", "Grocery", product12, 140, 170],
  ["Fresh Milk", "Dairy Products", product13, 58, 65],
  ["Greek Yogurt Cup", "Dairy Products", product14, 75, 90],
  ["Paneer Block", "Dairy Products", product15, 145, 175],
  ["Salted Butter", "Dairy Products", product16, 110, 130],
  ["Cheddar Cheese", "Dairy Products", product17, 190, 225],
  ["Fresh Cream", "Dairy Products", product18, 95, 120],
  ["Seasonal Mangoes", "Fruits and Vegetables", product19, 180, 230],
  ["Roasted Cashews", "Grocery", product20, 299, 360],
  ["Fruit Yogurt", "Dairy Products", product21, 55, 70],
];

export const demoProducts = products.map(([name, category, image, new_price, old_price], index) => ({
  id: index + 1,
  name,
  category,
  image,
  new_price,
  old_price,
  description: productDescriptions[category],
}));
