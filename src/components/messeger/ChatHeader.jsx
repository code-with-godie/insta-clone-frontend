import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
// import {IoCall} from 'react-icons/io'
import {MdCall} from 'react-icons/md'
import {FiVideo} from 'react-icons/fi'
import {ImInfo} from 'react-icons/im'
import { useAppContext } from '../../context/AppContext'

const Container = styled.div`
   display: flex;
   padding:.5rem;
  border-bottom: 1px solid #DBDBDB;  
`

const ProfileContainer = styled.div`
flex : 1;
display: flex;
align-items: center;
`
const ProfileDescriptionContainer = styled.div`
flex : 1;
display: flex;
flex-direction: column;
gap:.3rem;
`

const IconContainer = styled.div`
   display: flex;
   align-items:center ;
   gap:.5rem;
`
const UserName = styled.h4`
color: #000000dd;
`
const LastSeen = styled.p`
font-size: .8rem;
color: #a9a7a7;
`
const ChatHeader = () => {
  const {currentConersation:{username,profilePic}} = useAppContext();
  return (
    <Container>
        <ProfileContainer>
            <IconButton>
                <Avatar alt={username} src={profilePic} />
            </IconButton>
            <ProfileDescriptionContainer>
                <UserName> {username} </UserName>
                <LastSeen>online</LastSeen>
            </ProfileDescriptionContainer>
        </ProfileContainer>
        <IconContainer>
            <IconButton> <MdCall/> </IconButton>
            <IconButton> <FiVideo/> </IconButton>
            <IconButton> <ImInfo/> </IconButton>
        </IconContainer>
    </Container>
  )
}

export default ChatHeader