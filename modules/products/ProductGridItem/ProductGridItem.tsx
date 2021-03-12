import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import classes from './ProductGridItem.module.scss';
import { Product } from '../product.type';
import AddRemoveButton from '../AddRemoveButton/AddRemoveButton';

/**
 * Product grid item details
 */
export default function ProductGridItem({ product }: {product:Product}) {
  return (
    <Grid item className={classes.productItemContainerWrapper} sm={6} xs={12}>
      <Grid item className={classes.productItemContainer}>
        <Grid container className={classes.imageContainer} alignItems="center" justify="center">
          <img
            src={product.imageUrl}
            alt="Product Img"
          />
        </Grid>
        <Grid item>
          <Typography className={classes.socksName}>
            {product.name}
          </Typography>

        </Grid>
        <Grid
          className={classes.priceQuantityContainer}
          container
          justify="space-between"
          alignItems="center"
        >
          <Typography className={classes.socksPrice}>
            $
            {product.price}
          </Typography>
          <AddRemoveButton product={product} />
        </Grid>
      </Grid>
    </Grid>
  );
}
