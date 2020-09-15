import React from 'react';
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';


function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  

    return (
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({basket.length} items): <strong>{value}</strong>
              </p>
              <small className="subtotal__gifts">
                <input type="checkbox" />
                This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)} //basket
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
        />
        <button>Checkout</button>
      </div>
    );
}

export default Subtotal
