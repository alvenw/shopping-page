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

  const generateItems = () => {
    const arr = []
    for (let i = 0; i < 9; i++) {
      const itemName = faker.commerce.productName();
      const itemPrice = faker.commerce.price();
      const itemImage = faker.image.image();
      arr.push({
        itemName: itemName,
        itemPrice: itemPrice,
        itemImage: itemImage
      })
    }
    return arr;
  }

  const [cartPrice, setCartPrice] = useState(0);
  const [cartArray, setCartArray] = useState([]);

  const addCartPrice = (value) => {
    setCartPrice(cartPrice + value);
  }

  /*each cart item includes item name, quantity, and price*/
  const addToCart = (newItem) => {
    setCartArray(cartArray => [...cartArray, newItem]) //inserting new item to end of cart array
  }

  const removeFromCart = (removedItem) => {
    const newArray = cartArray.filter((item) => {
      return item.itemName !== removedItem.itemName
    })

    setCartArray (newArray);
  }

  const [itemsArray] = useState(generateItems());

  return (
    <>
      <Header cartArray={cartArray} removeFromCart={removeFromCart}/>
      <Body>
      <Grid container>
        {itemsArray.map(items => {
          return(
          <ItemGrid item xs={12} sm = {6} md={4} lg={3}>
            <ItemCard key={items.itemName} addCartPrice={addCartPrice} addToCart={addToCart} itemName={items.itemName} itemPrice={items.itemPrice} itemImage={items.itemImage}/>
          </ItemGrid>
          )
        })}
      </Grid>
      </Body>
    </>
  );
}


export default App;
