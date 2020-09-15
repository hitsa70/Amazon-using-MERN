import React from 'react';
import "./checkoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id,image,title,price,rating }) {
    const [{basket},dispatch]=useStateValue();
    const remove=()=>{
            dispatch({
                type: 'REMOVE_FROM_BASKET',
                id:id,
            })
    }

    return (
      <div className="checkoutProduct">
        <img
          className="checkoutProduct__image"
          src={image}
          alt="checkoutProduct__image"
        />

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p>
            <small>₹</small>
            <strong>{price}</strong>
          </p>

          <div className="checkoutProduct__rating">
            {Array( rating ) .fill() .map((_, i) => (<p>🌟</p>
            ))}
          </div>
          <button onClick={remove} >Remove from basket</button>
        </div>
      </div>
    );
}

export default CheckoutProduct
