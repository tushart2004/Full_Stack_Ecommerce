import React, { useContext } from 'react'
import Hero from '../Components/Hero/Hero'
import NewCollections from '../Components/NewCollections/NewCollections'
import { ShopContext } from '../Context/ShopContext'


const Shop = () => {

  const { products } = useContext(ShopContext);
  const newcollection = products.slice(0, 8);

  return (
    <div>
      <Hero/>
      
      
      <NewCollections data={newcollection}/>
     
    </div>
  )
}

export default Shop
