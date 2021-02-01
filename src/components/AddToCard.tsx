import React from 'react'
import { CartItem, useStateDispatch } from './AppState';

export interface AddToCardProps {
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
}


//HOC
export function withAddToCart<OriginalProps extends AddToCardProps>(ChildComponent: React.ComponentType<OriginalProps>) {
  const AddToCartHOC = (props: Omit<OriginalProps, keyof AddToCardProps>) => {
    const dispatch = useStateDispatch();

    const handleAddToCartClick: AddToCardProps['addToCart'] = (item) => {
      dispatch({
        type: 'ADD_TO_CARD',
        payload: {
          item
        }
      })
    };
    return <ChildComponent {...props as OriginalProps} addToCart={handleAddToCartClick}/>
  };

  return AddToCartHOC
}


//render props
export const WithAddToCartProps: React.FC<{children: (props: AddToCardProps) => JSX.Element}> = ({ children }) => {
  const dispatch = useStateDispatch();

  const addToCart: AddToCardProps['addToCart'] = (item) => {
    dispatch({
      type: 'ADD_TO_CARD',
      payload: {
        item
      }
    })
  };
  return children({addToCart})
};

//Custom hook
export const useAddToCard = () => {
  const dispatch = useStateDispatch();

  const addToCart: AddToCardProps['addToCart'] = (item) => {
    dispatch({
      type: 'ADD_TO_CARD',
      payload: {
        item
      }
    })
  };

  return addToCart;
};



