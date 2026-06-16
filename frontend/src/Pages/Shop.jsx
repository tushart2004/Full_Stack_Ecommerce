import React, { useContext } from 'react'
import Hero from '../Components/Hero/Hero'
import NewCollections from '../Components/NewCollections/NewCollections'
import { ShopContext } from '../Context/ShopContext'
import './CSS/Shop.css'


const Shop = () => {

  const { products } = useContext(ShopContext);
  const newcollection = products.slice(0, 8);

  return (
    <div>
      <Hero/>
      <section className="shop-highlights">
        <div>
          <span>01</span>
          <strong>Fresh daily picks</strong>
          <p>Demo catalog includes produce, grocery essentials, and dairy favorites.</p>
        </div>
        <div>
          <span>02</span>
          <strong>Checkout preview</strong>
          <p>Try a complete payment flow without needing a database or payment gateway.</p>
        </div>
        <div>
          <span>03</span>
          <strong>Responsive storefront</strong>
          <p>Designed to look polished on Vercel across mobile and desktop screens.</p>
        </div>
      </section>
      
      
      <NewCollections data={newcollection}/>
     
    </div>
  )
}

export default Shop
