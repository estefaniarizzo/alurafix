import React from 'react';
import styled , {css} from "styled-components"
import logo from '../assets/LogoMain.png'
import Button from '../componentes/Button'


const HeaderContainer = styled.div`
    background-color: #000000;
    font-size: 32px;
    color: white;
    height: 5rem;
    display:flex;
    align-items: center;
    justify-content:space-between;
    
`
const Logo = styled.img`
    max-height:40%;
    margin-left:2%;

    ${props => css`
    @media (max-width: ${props.theme.breakpoints.tablet}) {
      margin: 0 auto;
      
   ` }

   
`

 const Header = () => {
  return (
    <HeaderContainer>
        <Logo src={logo} alt="Aluraflix Logo"/>
        <Button  inputColor="white" bordercolor='white'  marginR="2%" >
          Nuevo Video
        </Button>
    </HeaderContainer>
  )
}

export default Header