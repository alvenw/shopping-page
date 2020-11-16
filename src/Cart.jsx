import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';

import ItemCard from './ItemCard';


const Cart = (props) => {
  const [anchorEl, setAnchorEl] = useState(null); //states for anchoring popover position

  /*handlers for opening and closing popovers*/
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <IconButton aria-describedby={id} onClick={handleClick}>
        <ShoppingCartIcon style={{ fill: "white" }} />
      </IconButton>
      <Popover id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}>
        <CartPopover cartArray={props.cartArray} removeFromCart={props.removeFromCart}/>
      </Popover>
    </>
  )
}

const CartPopover = (props) => {
  const StyledPopover = styled(Card)`
    width:300px;
    border-bottom: 1px solid black
  `;

  const [cartArray] = useState(props.cartArray);
  const [isCartEmpty] = useState(cartArray.length == 0);
  const [cartPrice, setCartPrice] = useState(0);

  const sumCartPrice = () => {
    /*catch for empty array*/
    if (!isCartEmpty) {
      const total = cartArray.reduce((sum, current) => {
        return {price: sum.price + (current.itemPrice * current.itemQuantity)};
      }, {price:0}) //reduce cart array to sum the price of the cart

      setCartPrice(total.price);
    }
  }

  useEffect(() => {
    sumCartPrice();
  })

  const handleClick = (item) => {
    props.removeFromCart(item);
  }

  /*rendering each item in the shopping cart*/
  const cartItems = cartArray.map((item => {
    return (
      <StyledPopover>

          <CardContent>
            <Typography>
              {item.itemName}
            </Typography>
            <Typography>
              ${item.itemPrice}
            </Typography>
            <Typography>
              {item.itemQuantity}
            </Typography>
          </CardContent>

        <CardActions>
          <Button onClick={()=> {handleClick(item)}}>
            Remove
        </Button>
        </CardActions>
      </StyledPopover>
    )
  }));

  if (isCartEmpty) {
    return (
      <StyledPopover>
        <CardContent>
          <Typography>
            Cart is empty
      </Typography>
        </CardContent>
      </StyledPopover>
    )
  } else {
    return (
      <div>
        {cartItems}
        <StyledPopover>
          <CardContent>
            <Typography>
              Total cart: ${cartPrice}
            </Typography>
          </CardContent>
        </StyledPopover>
      </div>
    )
  }
}

export default Cart