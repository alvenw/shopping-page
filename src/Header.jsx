import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Cart from './Cart'

const Header = () => {
  const StyledBar = styled(AppBar)`
    display: flex;
    flex-direction: row;
    align-items: center;
  `

  const BarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 30px 10px 30px;
    width: 75%;
  `;

  return (
    <StyledBar>
      <BarContainer>
        <Typography variant="h4" style={{ display: 'inline-block' }}>
          Shopping Page
      </Typography>
        <Cart />
      </BarContainer>
    </StyledBar>
  )
}

export default Header;