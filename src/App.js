import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ItemCard from './ItemCard';
import Header from './Header';
import Grid from '@material-ui/core/Grid';
import faker from 'faker';
import './App.css';

function App() {
  const Body = styled.div`
    margin-top: 68px;
  `;

  const ItemGrid = styled(Grid)`
    display: flex;
    align-items: center;
    justify-content: center;
  `

  const [cartPrice, setCartPrice] = useState(0);
  const [cartArray, setCartArray] = useState([]);

  const addCartPrice = (value) => {
    setCartPrice(cartPrice + value);
  }

  const addToCart = (newItem) => {
    setCartArray(cartArray => [...cartArray, newItem]) //inserting new item to end of cart array
  }

  // const removeFromCart = (removedItem) => {
  //   setCartArray
  // }

  const itemsArray = [];

  const generateItems = (array) => {
    for (let i = 0; i < 9; i++) {
      const arr = []
      const itemName = faker.commerce.productName();
      const itemPrice = faker.commerce.price();
      const itemImage = faker.image.image();
      array.push({
        itemName: itemName,
        itemPrice: itemPrice,
        itemImage: itemImage
      })
    }
  }

  generateItems(itemsArray);

  return (
    <>
      <Header cartArray={cartArray}/>
      <Body>
      <Grid container>
        {itemsArray.map(items => {
          return(
          <ItemGrid item xs={12} sm = {6} md={4} lg={3}>
            <ItemCard addCartPrice={addCartPrice} addToCart={addToCart} itemName={items.itemName} itemPrice={items.itemPrice} itemImage={items.itemImage}/>
          </ItemGrid>
          )
        })}
      </Grid>
      </Body>
    </>
  );
}


export default App;
