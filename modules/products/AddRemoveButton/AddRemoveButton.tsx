import { Button, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Product } from '../product.type';
import useStyles from './AddRemoveButton.style';
import { updateCartItemQuantity } from "../../../redux/store-redux/cart.action";

/**
 * Add Remove button component to add/remove item from the cart
 */
function AddRemoveButton({ product, cartItem }: {product?: Product, cartItem?: any}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(product?.quantity || cartItem?.quantity || 0);

  useEffect(() => {
    setQuantity(product?.quantity || cartItem?.quantity || 0);
  }, [product, cartItem]);

  const updateQuantity = async (newQuantity) => {
    const productRecord = product || cartItem.product;
    dispatch(updateCartItemQuantity({
      quantity: newQuantity,
      product: productRecord,
    }));
    setQuantity(newQuantity);
  };

  const increment = () => {
    updateQuantity(quantity + 1);
  };

  const decrement = () => {
    updateQuantity(quantity - 1);
  };

  const onChangeQuantity = (event) => {
    const qty = Number(event.target.value);
    if (qty && qty > 0 && Number.isInteger(qty)) {
      updateQuantity(qty);
    }
  };

  return (
    <div className={classes.root}>
      {!quantity ? (
        <Button
          className={classes.button}
          onClick={increment}
          variant="outlined"
          color="primary"
        >
          Add to Cart
        </Button>
      ) : (
        <Grid className={classes.quantityUpdator}>
          <Button
            onClick={decrement}
            disableRipple
            disableFocusRipple
          >
            <img src="images/Minus.png" alt="add" />
          </Button>
          <input value={quantity} onChange={onChangeQuantity} />
          <Button
            onClick={increment}
            disableRipple
            disableFocusRipple
          >
            <img src="images/Plus.png" alt="remove" />
          </Button>
        </Grid>
      )}
    </div>
  );
}
AddRemoveButton.defaultProps = { product: null, cartItem: null };
export default AddRemoveButton;
