import React from 'react';
import './home.css';
import Product from './Product.js';

function Home() {
    return (
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://m.media-amazon.com/images/G/01/digital/video/sonata/Superhero_UK_Acquisition_FT_Apr_20/f4b165f5-678a-48bb-a049-11e7ddc2168d._UR3000,600_SX1500_FMwebp_.jpg"
            alt="Amazon prime Logo"
          />

          <div className="home__row">
            <Product
              id="1"
              title="The lean Startup"
              price={340}
              image="https://www.benlinders.com/wp-content/uploads/cover-de-lean-startup.jpg"
              rating={4}
            />
            <Product
              id="2"
              title="Harry Potter Box Set: The Complete Collection by J.K. Rowling (Set of 7 Books)"
              price={1999.99}
              image="https://bookkosh.com/wp-content/uploads/2020/08/9781408856772.jpg"
              rating={5}
            />
          </div>

          <div className="home__row">
            <Product
              id="3"
              title="Five on a Treasure Island (The Famous Five #1)"
              price={99}
              image="https://cdn.shopify.com/s/files/1/2789/4914/products/buy-five-on-a-treasure-island-the-famous-five-1-book-online-at-low-books-bookish-santa-13684442038405_257x402.jpg?v=1590418505"
              rating={4}
            />
            <Product
              id="4"
              title="The Art of Letting Go"
              price={351.08}
              image="https://m.media-amazon.com/images/I/516crkwjnhL._SL500_.jpg"
              rating={2}
            />
            <Product
              id="5"
              title="The Worst President in History"
              price={938.0}
              image="https://m.media-amazon.com/images/I/513mxL7badL._SL500_.jpg"
              rating={3}
            />
          </div>
          <div className="home__row">
            <Product
              id="6"
              title="How to Talk to Anyone"
              price={837.0}
              image="https://m.media-amazon.com/images/I/51hAGh15bTL._SL500_.jpg"
              rating={5}
            />
          </div>
        </div>
      </div>
    );
}

export default Home
