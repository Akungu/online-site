import React from 'react';
import './Trending.css';
import data_product from '../assets/data';
import Items from '../Items/Items';

const Trending = () => {
  return (
    <div className='trending'>
      <h1>TRENDING FOR WOMEN</h1>
      <div className="trending-items">
        {data_product.map((item,i)=>{
          return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })};
      </div>
    </div>
  );
}

export default Trending;
