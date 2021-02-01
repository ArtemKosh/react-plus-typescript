import React from "react"
import PizzaCss from './Pizza.module.css'
import { Pizza } from '../types';
import { AddToCardProps, useAddToCard, withAddToCart } from './AddToCard';


interface Props extends AddToCardProps{
  pizza: Pizza
}

const PizzaItem: React.FC<Props> = ({pizza, addToCart}) => {
  const {name, description, price, id} = pizza;
  // if we wont to use custom hook
  // const addToCart = useAddToCard();

  const handleAddToCartClick = () => {
    addToCart({name: name, price: price, id: id })
  };

  return (
    <li className={PizzaCss.container}>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <button type='button' onClick={handleAddToCartClick}>Add to Cart</button>
    </li>
  )
};

export default withAddToCart(PizzaItem)
