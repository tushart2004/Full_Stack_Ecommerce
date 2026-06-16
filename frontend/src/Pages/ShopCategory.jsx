import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from "../Components/Item/Item";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const ShopCategory = (props) => {

  const { products } = useContext(ShopContext);
  const categoryProducts = products.filter((item) => props.category === item.category);
    
  return (
    <div className="shopcategory">
     
      <div className="shopcategory-indexSort">
        <p><span>Showing 1 - {categoryProducts.length}</span> out of {categoryProducts.length} Products</p>
        <div className="shopcategory-sort">Sort by  <img src={dropdown_icon} alt="" /></div>
      </div>
      <div className="shopcategory-products">
        {categoryProducts.map((item,i) => {
            return <Item id={item.id} key={i} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>;
        })}
      </div>
      <div className="shopcategory-loadmore">
      <Link to='/' style={{ textDecoration: 'none' }}>Explore More</Link>
      </div>
    </div>
  );
};

export default ShopCategory;
