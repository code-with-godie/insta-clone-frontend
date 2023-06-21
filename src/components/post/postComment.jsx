import { FavoriteBorderOutlined } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
.icon{
    font-size:.8rem;
    color: gray;
    /* visibility: hidden; */
}
`

const Wrapper = styled.div`
flex: 1;
display: flex;
align-items: center;
gap:.5rem;
.profile{
    width: 30px;
    height: 30px;
}
`
const UserName = styled.h4`
color: #000000dc;
font-family: 'Lora',sans-serif;
font-size:.9rem;
cursor: pointer;
:hover{
    text-decoration: underline;
}
`
const Comment = styled.p`
font-family: 'Lora',sans-serif;
font-size:.9rem;
display: flex;
gap: 1rem;
:hover + .icon{
    visibility: visible;
}
`
const postComment = ({comment,user:{username,profilePic},model,url}) => {
  return (
    <Container>
        <Wrapper>
            {
                model && <IconButton> <Avatar alt={username} src={profilePic} className='profile' /> </IconButton>
            }
            <UserName> {username} </UserName>
            <Comment> {comment} </Comment>
         </Wrapper>
         <IconButton> <FavoriteBorderOutlined className='icon' /> </IconButton>
    </Container>
  )
}

export default postComment