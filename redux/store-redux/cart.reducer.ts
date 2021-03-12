import { remove, find, cloneDeep } from 'lodash';
import { toFixedNumber } from '../../modules/shared/utils';
import { ICartItem } from '../../modules/cart/shared/cart.type';
import CART_ACTIONS from './cart.action-types';
import STORAGE_KEYS from "../../modules/shared/storage/storageKeys";
import localStorage from "../../modules/shared/storage/LocalStorage";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  itemTotal: 0,
  totalTax: 0,
  totalShipping: 500,
  totalProducts: 0,
};

const getLocalStorageState = ()=>{
  return {
    ...initialState,
    ...localStorage.getJSONItem(STORAGE_KEYS.CART_DATA) || {},
  }
}

const updateCartItemsToStorage = (cartData) => {
  localStorage.setJSONItem(STORAGE_KEYS.CART_DATA, cartData);
}

/**
 * Here need to set the total price value
 */
const calculateTotal = (cartItems) => {
  let itemTotal = 0;
  let totalProducts = 0;
  let totalTax = 0;
  cartItems.forEach((item) => {
    totalProducts += item.quantity;
    itemTotal += toFixedNumber((item.cartItemTotal) * item.quantity);
    totalTax += toFixedNumber((item.cartItemTotal * 1.23) / 100);
  });
  const totalAmount = itemTotal + totalTax + initialState.totalShipping;
  return { totalAmount, totalProducts, totalTax, itemTotal };
};

/**
 * Cart reducer to manage the cart add edit and quantity
 */
export default function cartReducer(state = cloneDeep(getLocalStorageState()), action) {
  switch (action.type) {
    case CART_ACTIONS.UPDATE_DATA: {
      const { quantity, product } = action.payload;
      const newCartItems: Array<ICartItem> = cloneDeep(state.cartItems);
      if (quantity === 0) {
        remove(newCartItems, { productId: product._id });
      } else {
        const existedCartItem = find(newCartItems, { productId: product._id });
        if (!existedCartItem) {
          newCartItems.push({
            quantity,
            productId: product._id,
            productPrice: product.price,
            cartItemTotal: toFixedNumber(product.price * quantity),
            product,
          });
        } else {
          existedCartItem.quantity = quantity;
          existedCartItem.cartItemTotal = toFixedNumber(product.price * quantity);
        }
      }
      const newCartData = { ...state, ...calculateTotal(newCartItems), cartItems: newCartItems };
      updateCartItemsToStorage(newCartData);
      return newCartData;
    }
    case CART_ACTIONS.UPDATE_CART_DETAILS: {
      const cartDetails = action.payload;
      const newCartDetails = {
        ...state,
        cartItems: cartDetails.cartItems,
        totalAmount: cartDetails.totalAmount,
        totalProducts: cartDetails.totalProducts,
      };
      updateCartItemsToStorage(newCartDetails);
      return newCartDetails;
    }
    case CART_ACTIONS.REMOVE_CART_DATA: {
      updateCartItemsToStorage(initialState);
      return cloneDeep(initialState);
    }
    default:
      return state;
  }
}
