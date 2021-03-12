import { Product } from '../../modules/products/product.type';
import CART_ACTIONS from './cart.action-types';

export const updateCartItemQuantity = (cartData: {quantity: number, product: Product}) => ({
  type: CART_ACTIONS.UPDATE_DATA,
  payload: cartData,
});

export const removeCartData = () => ({
  type: CART_ACTIONS.REMOVE_CART_DATA,
});
