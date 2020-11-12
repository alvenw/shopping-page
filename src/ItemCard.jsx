import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';

import faker from 'faker';

const ItemCard = () => {

  const StyledCard = styled(Card)`
    height: 400px;
    width: 90%;
    margin-top: 20px;
    display: inline-block;
  `;

  const StyledMedia = styled(CardMedia)`
    height: 200px;
  `;

  const [itemQuantity, setQuantity] = useState(0);
  const [itemName] = useState(faker.commerce.product()); //generate fake item name, price, and image through faker.js
  const [itemPrice,] = useState(faker.commerce.price());
  const [itemImage] = useState(faker.image.image());

  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    
    if (event.target.value=="") {
      setQuantity(0);
    }
    setQuantity(event.target.value);
  }

  const handleClick = () => {
    if (itemQuantity <= 0) {
      return
    }
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <StyledCard>
      <StyledMedia
        image={itemImage}
      />
      <CardContent>
        <Typography>
          {itemName} {"$" + itemPrice}
        </Typography>
      </CardContent>
      <TextField onChange={handleChange} value={itemQuantity} type="number" autoFocus/>
      <Button onClick={handleClick}>
        Add to Cart
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={itemQuantity + " " + itemName + " added to Cart"}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
          </React.Fragment>
        }
      />
    </StyledCard>
  );
}

export default ItemCard;