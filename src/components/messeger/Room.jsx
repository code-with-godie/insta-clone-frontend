import React from 'react'
import styled from 'styled-components'
import { Avatar, IconButton } from '@mui/material'
const Container = styled.div`
    display: flex;
    align-items: center;
    border-radius:.3rem;
    cursor: pointer;
    :hover{
        background-color: #F2F2F2;
    }
`
const ProfileContainer = styled.div``
const DescriptionContainer = styled.div`
flex: 1;
display: flex;
flex-direction: column;
gap:.5rem;
`
const UserName = styled.p`
/* font-family: 'Poppins',sans-serif; */
color: #000000c4;
font-size:.9rem;
`
const LastSeen = styled.p`
font-size:.8rem;
font-family: 'Poppins',sans-serif;
color: #818181;
`
const Room = ({username,profilePic,changeConversation}) => {
    const handleClick = ()=>{
        changeConversation({profilePic,username})
    }
  return (
    <Container onClick={handleClick}  >
        <ProfileContainer>
            <IconButton>
                <Avatar alt={username} src={profilePic}  />
            </IconButton>
        </ProfileContainer>
        <DescriptionContainer>
            <UserName> {username} </UserName>
            <LastSeen>yesterday</LastSeen>
        </DescriptionContainer>
    </Container>
  )
}

export default Room