import React from 'react';
import {
  Grid, Typography,
} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

/**
 * Order success page content
 */
export default function OrderCreated() {
  return (
    <Grid container style={{ height: 400 }} justify="center" alignItems="center">
      <Grid item style={{ textAlign: 'center' }}>
        <CheckCircleIcon style={{ fontSize: 100, color: 'rgb(101, 175, 141)' }} />
        <Typography variant="h2">Your Order created successfully...</Typography>
      </Grid>
    </Grid>
  );
}
