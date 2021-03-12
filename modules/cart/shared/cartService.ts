import { removeCartData } from '../../../redux/store-redux/cart.action';

export const removeCartItemService = async ({ productId }) => {

};

/**
 * Service to clear the cart data
 */
export const clearCartService = async (dispatch) => {
  dispatch(removeCartData());
};

/**
 * Service to create the order from cart data
 */
export const createOrderFromCartService = async (dispatch) => {
  setTimeout(()=>{
    dispatch(removeCartData());
  }, 2000);
};
