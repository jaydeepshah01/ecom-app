import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import {
  Grid, Typography, Button,
} from '@material-ui/core';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { useRouter } from 'next/router';
import classes from './Cart.module.scss';
import CartItem from '../CartItem/CartItem';
import {
  clearCartService,
  createOrderFromCartService,
} from '../../shared/cartService';
import { scrollTop } from '../../../shared/utils';

/**
 * Cart page to show the cart details
 */
export default function Cart() {
  const {
    cartItems,
    totalProducts,
    totalTax,
    itemTotal,
    totalShipping,
    totalAmount
  } = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  const router = useRouter();

  const clearCart = async () => {
    await clearCartService(dispatch);
  };

  const createOrderFromCart = async () => {
    await createOrderFromCartService(dispatch);
    router.push('/order-created');
    scrollTop();
  };

  return (
    <div className={classes.cartContainer}>
      <Grid container>
        {!cartItems.length?
        <Grid container item justify="center" alignItems="center" className={classes.emptyCart}>
          <Grid item className={classes.emptyCartInner}>
            <LocalMallIcon className={classes.cartIcon}/>
            <br/>
            <Typography style={{ fontSize: 35 }}>
              Your cart is empty
            </Typography>
            <br/>
            <Link href="/">
              <Button variant="contained" color="primary">
                Shop Now
              </Button>
            </Link>
          </Grid>
        </Grid> : null}
      </Grid>
      <Grid container>
        {cartItems.length
          ? (
            <>
              <Grid container item justify="space-between" className={classes.header}>
                <Typography variant="h5"> Your Cart</Typography>
                <Button className={classes.button} variant="outlined" onClick={clearCart}>
                  Clear Cart
                </Button>
              </Grid>
              {cartItems.map((cartItem) => (
                <CartItem key={cartItem.productId} cartItem={cartItem}/>
              ))}
              <Grid container item justify="flex-end">
                <Grid
                  container
                  className={classes.totalContainer}
                >
                  <Grid item xs={12} justify="space-between" container>
                    <Typography>
                      <b>Item Total:</b>
                      {' '}
                      <br/>
                      {' '}
                      {totalProducts}
                      {' '}
                      items
                    </Typography>
                    <Typography className={classes.totalAmount}>
                      $
                      {itemTotal.toFixed(2)}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} justify="space-between" container>
                    <Typography>
                      <b>Total Tax:</b>
                    </Typography>
                    <Typography className={classes.totalAmount}>
                      $
                      {totalTax.toFixed(2)}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} justify="space-between" container>
                    <Typography>
                      <b>Shipping:</b>
                    </Typography>
                    <Typography className={classes.totalAmount}>
                      $
                      {totalShipping.toFixed(2)}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} justify="space-between" container>
                    <Typography>
                      <b>Total:</b>
                    </Typography>
                    <Typography className={classes.totalAmount}>
                      $
                      {totalAmount.toFixed(2)}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container justify="flex-end">
                <Button
                  onClick={createOrderFromCart}
                  className={classes.createOrderButton}
                  variant="contained"
                  color="primary"
                >
                  Pay Now
                </Button>
              </Grid>
            </>
          ) : null}
      </Grid>
    </div>
  );
}
