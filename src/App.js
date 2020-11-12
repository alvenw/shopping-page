import styled from 'styled-components';
import ItemCard from './ItemCard';
import Header from './Header';
import Grid from '@material-ui/core/Grid';

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

  return (
    <>
      <Header />
      <Body>
      <Grid container>
        <ItemGrid item xs={12} sm = {6} md={4} lg={3}>
          <ItemCard/>
        </ItemGrid>
        <ItemGrid item xs={12} sm = {6} md={4} lg={3}>
          <ItemCard/>
        </ItemGrid>
        <ItemGrid item xs={12} sm = {6} md={4} lg={3}>
          <ItemCard/>
        </ItemGrid>
        <ItemGrid item xs={12} sm = {6} md={4} lg={3}>
          <ItemCard/>
        </ItemGrid>
        <ItemGrid item xs={12} sm = {6} md={4} lg={3}>
          <ItemCard/>
        </ItemGrid>
        <ItemGrid item xs={12} sm = {6} md={4} lg={3}>
          <ItemCard/>
        </ItemGrid>
        <ItemGrid item xs={12} sm = {6} md={4} lg={3}>
          <ItemCard/>
        </ItemGrid>
        <ItemGrid item xs={12} sm = {6} md={4} lg={3}>
          <ItemCard/>
        </ItemGrid>
        <ItemGrid item xs={12} sm = {6} md={4} lg={3}>
          <ItemCard/>
        </ItemGrid>
        <ItemGrid item xs={12} sm = {6} md={4} lg={3}>
          <ItemCard/>
        </ItemGrid>
      </Grid>
      </Body>
    </>
  );
}

export default App;
