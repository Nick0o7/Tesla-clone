import MenuIcon from '@mui/icons-material/Menu';
import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import { mobile } from '../responsive';
import { useState } from 'react';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

const Header = () => {

  const [open, setOpen] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="logo" />
      </a>

      <Menu>
        {cars && cars.map( (car, index) => (
        <a href="#" key={index}>{car}</a>
        ))}
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setOpen(true)}/>
      </RightMenu>

      <BurgerNav show={open}>
        <CloseWrapper>
          <CustomClose onClick={() => setOpen(false)}/>
        </CloseWrapper>
        {cars && cars.map( (car, index) => (
        <li key={index}><a href="#">{car}</a></li>
        ))}
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-In</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadster</a></li>
      </BurgerNav>

    </Container>
    )
  }
  
  export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;
  flex:1;

  a{
    text-decoration: none;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  ${mobile({display: 'none'})}
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a{
    text-decoration: none;
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor:pointer;
`;

const BurgerNav = styled.div`
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  background-color: #fff;
  width:300px;
  z-index: 10;
  list-style: none;
  padding:20px;
  display: flex;
  flex-direction:column;
  transform:${props=> props.show ? "translateX(0)" : "translateX(100%)"};
  transition:transform 0.2s ease-in-out;
  a{
    text-decoration: none;
    font-weight: 600;
  }

  li{
    padding:15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor:pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

