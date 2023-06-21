import { GridOn } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
 border-top:1px solid #DBDBDB;
 
 `
const Container = styled.div`
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 width: 100%;
 max-width: 400px;
`
const  Controller = styled.div`
    display: flex;
    flex-direction:  column;
    gap:.3rem;
    .control{
        font-size:1.7rem;
    }
    .control.active {
        border-top:1px solid black;
        color:#0095F6;
    }
`
const  ControllerLabel = styled.p`
display: none;
`
const PostControllers = () => {
    const [index,setIndex] = useState(0);
    useEffect(()=>{
        const icons = document.querySelectorAll('.control');
        icons.forEach((icon,iconIndex) =>{
            if(icon.classList.contains('active')){
                icon.classList.remove('active');
            }
            if(index === iconIndex){
                icon.classList.add('active');
            }
            icon.addEventListener('click',e => setIndex(iconIndex))
        })
        
    },[index]);
  return (
    <Wrapper>

    <Container>
        <Controller>
            <IconButton className='wrapper' >
                <GridOn className='control' />
            </IconButton>
            <ControllerLabel>posts</ControllerLabel>
        </Controller>
        <Controller>
        <IconButton className='wrapper' >
                <OndemandVideoIcon className='control' />
            </IconButton>
            <ControllerLabel>followers</ControllerLabel>
        </Controller>
        <Controller>
        <IconButton className='wrapper' >
                <AccountBoxOutlinedIcon className='control' />
            </IconButton>
            <ControllerLabel>following</ControllerLabel>
        </Controller>
    </Container>
    </Wrapper>
  )
}

export default PostControllers