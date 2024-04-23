import React from 'react';
import Hero from '../components/Hero/Hero';
import Trending from '../components/Trending/Trending';
import Offers from '../components/Offers/Offers';
import NewCollections from '../components/NewCollections/NewCollections';
import NewsLetter from '../components/NewsLetter/NewsLetter';

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Trending/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  );
}

export default Shop;
