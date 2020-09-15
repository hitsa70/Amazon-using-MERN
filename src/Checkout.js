import React from 'react';
import './checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';


function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
    return (
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/GiftCards/CorpGCPages/InterMiles_Banner_PC.jpg"
            alt="advertisement"
          />
          <div>
            <h2 className="checkout__title">Your shopping basket</h2>
            
          {basket.map(item=> (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

          </div>
        </div>

        <div className="checkout__right">
         <Subtotal />
        </div>
      </div>
    );
}

export default Checkout;
