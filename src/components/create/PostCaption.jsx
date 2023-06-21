import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import emoji from '../../assets/emoji.svg'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {GoLocation} from 'react-icons/go'
import { useAppContext } from '../../context/AppContext'

const Container = styled.div`
    flex: 1;
    display: flex;
    padding:.5rem;
    flex-direction: column;
`
const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    gap:.5rem;
    .profile{
        width: 30px;
        height: 30px;
    }
`
const UserName = styled.h3`
font-size:.9rem;
cursor: pointer;
color: #000000e4;
`
const CaptionInput = styled.textarea`
flex: 1;
resize: none;
border: none;
padding:.5rem;
font-family:'Poppins',sans-serif;
font-size: 1rem;
outline: none;
transition: all 500ms;
::placeholder{
    color: #989898;
}
:focus{
    min-height: 100px;
}
`
const CaptionControlContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const Emoji = styled.img``
const CaptionCounter = styled.p`
color: #b5b3b3;
font-family: 'Poppins',sans-serif;
`
const Option = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-top:1px solid #DBDBDB;
color: #000000d7;
padding:.5rem;
font-family: 'Poppins',sans-serif;
:hover{
    background-color:#f4f3f3 ;
}
.icons{
    font-size:1.3rem;
    cursor: pointer;
    color: #888484;
}
`
const PostCaption = ({caption,handleCaption }) => {
    const {user:{username,profilePic}} = useAppContext()
    const limit = 2200;
  return (
    <Container>
        <ProfileContainer>
            <Avatar className='profile' alt={username} src={profilePic} />
            <UserName> {username} </UserName>
        </ProfileContainer>
        <CaptionInput 
        placeholder='Write a caption' 
        value={caption} 
        onChange={e => handleCaption(e.target.value)} 
        disabled ={caption.length >= limit}
        />
        <CaptionControlContainer>
            <IconButton><Emoji src={emoji}/> </IconButton>
            <CaptionCounter> {`${caption.length} / ${limit} `}</CaptionCounter>
        </CaptionControlContainer>
        <Option>Add a location <GoLocation className='icons' /> </Option>
        <Option>Acessibilty <MdOutlineKeyboardArrowDown className='icons' /> </Option>
        <Option>Advanced Settings <MdOutlineKeyboardArrowDown className='icons' /></Option>

    </Container>
  )
}

export default PostCaption