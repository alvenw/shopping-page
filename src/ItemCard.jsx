import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';


const ItemCard = React.memo((props) => {

  const StyledCard = styled(Card)`
    height: 400px;
    width: 90%;
    margin-top: 20px;
    display: inline-block;
  `;

  const StyledMedia = styled(CardMedia)`
    height: 200px;
  `;

  /*binding the textfield number to item quantity*/
  const handleChange = (event) => {
    setQuantity(event.target.value);
  }

  /*opening snackbar if adding item to cart*/
  const handleClick = () => {
    if (itemQuantity <= 0) {
      return
    }
    setOpen(true);
  };

  const addToCart = () => {
    props.addCartPrice(itemPrice*itemQuantity);
    props.addToCart(
      {
      itemName: itemName, 
      itemQuantity: itemQuantity, 
      itemPrice: itemPrice
    });
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const [itemQuantity, setQuantity] = useState(0);
  const [itemName] = useState(props.itemName);
  const [itemPrice] = useState(props.itemPrice);
  const [itemImage] = useState(props.itemImage);
  const [open, setOpen] = useState(false);

  

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
      <TextField onChange={handleChange} value={itemQuantity} type="number"/>
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
        onEntered={addToCart}
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
})

export default ItemCard;