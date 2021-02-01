import React from 'react'
import { Pizza } from '../types';
import SpecialOfferCss from './SpecialOffer.module.css'
import { WithAddToCartProps } from './AddToCard';

interface Props {
  pizza: Pizza
}

const PizzaSpecialOffer: React.FC<Props> = ( {pizza} ) => {
  const {name, description, price, id} = pizza;

  return (
    <div className={SpecialOfferCss.container}>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <WithAddToCartProps>
        {({addToCart}) => {
        return (
          <button type='button' onClick={() => addToCart({id: id, price: price, name: name})}>
            Add to Cart
          </button>
        )
      }}
      </WithAddToCartProps>
    </div>
  )
};

export default PizzaSpecialOffer;
