import React, { useContext } from 'react';
import {ShopContext} from './context/ShopContext';
import {useParams} from 'react-router-dom';
import Breadcrum from './components/Breadcrum/Breadcrum';

const Product = () => {
  //grab all products data using context
  const {all_product}=useContext(ShopContext);
  //access product id using useparams
  const{productId}=useParams();
  const product=all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
    </div>
  );
}

export default Product;
