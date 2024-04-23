import React from 'react';
import Offers from './Offers.css';
import exclusive_image from '../assets/exclusive_image.png';

const offers = () => {
  return (
    <div className='offers'>
      
        <div className="offers-col-1">
           <h1>EXCLUSIVE</h1>
           <h1>Offers For You</h1>
           <p>ONLY ON BESTELLERS PRODUCTS</p>
       <button>Check now</button>
        </div>
      <div className="offers-col-2">
     <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
}

export default offers;
