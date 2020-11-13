import React, { useState } from 'react';
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
        <CartPopover cartArray={props.cartArray} />
      </Popover>
    </>
  )
}

const CartPopover = (props) => {
  const StyledPopover = styled(Card)`
    width:300px;
  `;

  const [cartArray] = useState(props.cartArray);
  const [isCartEmpty, setCartEmpty] = useState(cartArray.length == 0);

  /*rendering each item in the shopping cart*/
  const cartItems = cartArray.map((item => {
    return (
      <StyledPopover>
        <CardActionArea>
          <CardContent>
            <Typography>
              {item[0]}
            </Typography>
            <Typography>
              {item[1]}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button>
            Remove
        </Button>
        </CardActions>
      </StyledPopover>
    )
  }));

  console.log(cartArray);
  console.log(cartItems);

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
      </div>
    )
  }
}

export default Cart