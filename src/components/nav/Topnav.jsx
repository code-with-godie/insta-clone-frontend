import React from 'react'
import styled from 'styled-components';
import logoOne from '../../assets/logoOne.png';
import { Search }  from '@mui/icons-material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom'
const Container = styled.nav`
display: flex;
align-items: center;
gap:.5rem;
border-bottom: 1px solid #DBDBDB;
width: 100%;
.fav{
    transition: all 200ms;
    font-size: 1.7rem;
}
.fav:hover{
    transform: scale(1.1);
}
`
const LogoContainer = styled.div`
flex: 1;
`
const InputContainer = styled.div`
display: flex;
align-items: center;
padding: 0.5rem;
border-radius:.5rem;
background-color:#EFEFEF;
width: 100%;
max-width: 250px;
.icon{
    color:#b0b0a9;
}
`
const Logo = styled.img`
max-width: 100px;
`
const Input = styled.input`
flex: 1;
font-family: 'Poppins',sans-serif;
background: transparent;
border: none;
outline: none;

`
const Topnav = () => {
  return (
    <Container className='topnav' >
        <LogoContainer>
            <Link to='/' >
            <Logo src={logoOne}/>
            </Link>
        </LogoContainer>
        <InputContainer>
        <Search  className='icon'/>
        <Input placeholder='Search...' />
        </InputContainer>
            <FavoriteBorderIcon className='fav' />
    </Container>
  )
}

export default Topnav