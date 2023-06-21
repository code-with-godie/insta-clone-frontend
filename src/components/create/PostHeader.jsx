import { IconButton } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import {BiArrowBack} from 'react-icons/bi'
import LoadingAnimation from '../../components/loading/LoadingAnimation'
const Container = styled.div`
    display: flex;
    align-items: center;
    padding:.5rem;
   border-bottom: 1px solid #DBDBDB;

`
const Title = styled.h3`
text-align: center;
font-family: 'Popins',sans-serif;
font-weight: 400;
flex: 1;
`
const ShareButton = styled.button`
outline:none;
background: transparent;
border: none;
color: #00376B;
font-size: 1rem;
text-transform: capitalize;
cursor: pointer;
`
const PostHeader = ({goBack,title,next,setIndex,handleUpload,loading}) => {
  return (
    <Container>
        <IconButton onClick={goBack} >
            <BiArrowBack/>
        </IconButton>
        <Title> {title} </Title>
        {
          next ? <ShareButton onClick={e => setIndex(2)} >next</ShareButton>:<ShareButton onClick={handleUpload} >{loading ? <LoadingAnimation/> : 'share'}</ShareButton>
        }
    </Container>
  )
}

export default PostHeader