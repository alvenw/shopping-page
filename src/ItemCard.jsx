import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import faker from 'faker';

const ItemCard = () => {

  const StyledCard = styled(Card)`
    height: 300px;
    width: 300px;
    margin: 20px
  `;

  const StyledMedia = styled(CardMedia)`
    height: 200px;
    width: 300px;
  `;

  const [itemName] = useState(faker.commerce.product()); //generate fake item name and price through faker.js
  const [itemPrice] = useState(faker.commerce.price());
  const [itemImage] = useState(faker.image.image());

  return (
    <StyledCard>
      <StyledMedia
        image={itemImage}
      />
      <CardContent>
        <Typography>
          {itemName} {itemPrice}
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonGroup>
          <Button>-</Button>
          <Button>+</Button>
        </ButtonGroup>
      </CardActions>
    </StyledCard>
  );
}

export default ItemCard;