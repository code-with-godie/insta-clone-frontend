import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { useAppContext } from '../../context/AppContext'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap:.5rem;
    width: 100%;
    max-width: 400px;
    min-height: 100px;
    background-color: white;
    border-radius:.5rem;
`
const AvatorContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap:.3rem;
    align-items: center;
    .profile{
        width: 60px;
        height: 60px;
    }
`
const Title = styled.p`
font-family: 'Lora', sans-serif;
font-size: 1.3rem;
`
const Description = styled(Title)`
font-size: .9rem;
color: #8f8f8f;
text-transform: capitalize;
`
const Container = styled.div`
`
const Option = styled.p`
    padding: .7rem;
    text-align: center;
    font-family: 'Lora', sans-serif;
    text-transform: capitalize;
    cursor: pointer;
    color: #101010e5;
    &:not(:last-child){
        border-bottom: 1px solid #dcdcdc;
    }
    &.main{
        color: tomato;
        font-weight: bold !important;
    }
    &.blue{
        color: #0095F6;
        font-weight: bold !important;
    }
`
const UserOptions = ({handleModel}) => {
    const {user:{profilePic,name}} = useAppContext()
  return (
    <Wrapper>
        <AvatorContainer>
            <IconButton> <Avatar alt={name} src={profilePic} className='profile' /> </IconButton>
            <Title>Synced profile photo</Title>
            <Description>intagram,facebook</Description>
        </AvatorContainer>
    <Container>
        <Option className='blue' >upload photo</Option>
        <Option>manage sync settings</Option>
        <Option className='main' >remove current photo</Option>
        <Option onClick = {e => handleModel(false)} >cancel</Option>
    </Container>
    </Wrapper>
  )
}

export default UserOptions