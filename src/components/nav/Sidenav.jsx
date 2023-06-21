import React, { useState } from 'react'
import styled from 'styled-components'
import { Avatar, Badge, IconButton } from '@mui/material';
import { FavoriteBorderOutlined, Home } from '@mui/icons-material'
import { RiMessengerLine } from 'react-icons/ri';
import { MdOutlineExplore } from 'react-icons/md';
import { CgAddR } from 'react-icons/cg';
import { AiOutlinePlaySquare } from 'react-icons/ai';
import {Link, useNavigate} from 'react-router-dom'
import {FaBars} from 'react-icons/fa';
import logoOne from '../../assets/logoOne.png'
import logoTwo from '../../assets/logoTwo.png'
import Model from '../models/Model'
import Options from '../utility/Options';
import { useAppContext } from '../../context/AppContext';
import CreatePost from '../create/CreatePost';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: start;
`
const Container = styled.ul`
flex: 6;
    padding:.5rem;
    list-style: none;
    display: flex;
    flex-direction:column;
    gap: 2rem;
    justify-content: flex-start;
    .icon{
        font-size: 1.9rem;
        color: #000000df;
        transition: all 300ms;
        cursor: pointer;
    }
    .avator{
        width: 30px;
        height: 30px;
    }
    .link{
        text-decoration: none;
        display: flex;
        gap: 0.5em;
        cursor: pointer;
        align-items: center;
        padding:.3rem;
        border-radius:.5rem;
        &:hover{
            background-color: #F2F2F2;
        }
        &:hover .icon{
            transform: scale(1.1);
        }
    }
    
`
const IconLabel = styled.p`
font-family:'Popins',sans-serif;
text-transform: capitalize;
color: black;
letter-spacing:.5px;
display: none;
@media screen  and (min-width: 1300px){
    display: block;
  
  }
`
const LogoContainer = styled.div`
flex: 1;
padding: 0.5rem;
display: flex;
align-items: center;
position: relative;
flex: 1;
`
const Logo = styled.img`
max-width: ${props => props.small ? '30px':'120px'};
height: auto;
transition: all 500ms;
opacity: ${props => props.small ? 1 : 0};
position: absolute;
@media screen  and (min-width: 1300px){
    opacity: ${props => props.small ? 0 : 1};
  }

`
const OptionsContainer = styled.div`
padding: 0.5rem;
flex: 2;
display: flex;
align-items: flex-end;
`
const Sidenav = ({handlePosts}) => {
    const [openOptions,setOpenOptions] = useState(false);
  const [showModel,setShowModel] = useState(false);
    const {user:{username,profilePic,_id}} = useAppContext();
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate(`/profile/${username}`,{state:{_id}})
    }
  return (
    <Wrapper>
        <LogoContainer>
            <Link to='/' className='link' >
            <Logo src={logoOne}  />
            <Logo src={logoTwo} small />
            </Link>
        </LogoContainer>
    <Container >
        <Link className='link' to='/' >
            <Home className='icon' />
            <IconLabel>home</IconLabel>
        </Link >
        <Link className='link' >
            <MdOutlineExplore className='icon' />
            <IconLabel>explore</IconLabel>
        </Link >
        <Link className='link' to='/reels' >
            <AiOutlinePlaySquare className='icon' />
            <IconLabel>reels</IconLabel>
        </Link >
        <Link className='link' to='/direct/inbox' >
            <RiMessengerLine className='icon' />
            <IconLabel>messeger</IconLabel>
        </Link >
        <Link className='link' >
            <Badge badgeContent='0' color='error' >
                <FavoriteBorderOutlined className='icon' />
            </Badge>
            <IconLabel>notifications</IconLabel>
        </Link >
        <div className='link' onClick={e => setShowModel(true)}  >
            <CgAddR className='icon' />
            <IconLabel>create</IconLabel>
        </div >
        <div className='link' onClick={handleClick} >
            <Avatar className='avator' alt={username} src={profilePic} />
            <IconLabel>profile</IconLabel>
        </div>
    </Container>
    <OptionsContainer>
        <IconButton onClick={e => setOpenOptions(prev => !prev)} >
            <FaBars/>
        </IconButton>
    </OptionsContainer>
    { openOptions &&  <Model closeUsingParent openModel={setOpenOptions} ><Options/></Model> }
    {
        showModel &&  
        <Model bg='rgba(0, 0, 0, 0.444)' showClose openModel={setShowModel} center >
          <CreatePost handlePosts = {handlePosts} handleModel = {setShowModel} />
        </Model>
    }
    </Wrapper>
  )
}

export default Sidenav