import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import {FaVolumeUp} from 'react-icons/fa'
import {BiVolumeMute} from 'react-icons/bi'
import {BsFillPlayFill} from 'react-icons/bs'
import {BsPauseFill} from 'react-icons/bs'
import { Avatar, IconButton } from '@mui/material'
import {Audiotrack} from '@mui/icons-material';



const Container = styled.div`
    flex: 1;
    border-radius:.5rem;
    box-shadow: 0 0 10px 5px rgba(147, 146, 146, 0.13);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000da;
    position: relative;
    .volume{
      position: absolute;
      top: 1rem;
      right: 1rem;
      z-index: 10;
      background-color: #8282821e;
      color: white;
      font-size: 1.3rem;
      :hover{
        background-color: #8282821e;
      }
    }
    .center{
      position: absolute;
      z-index: 10;
      color: white;
      font-size: 2rem;
      padding: 1rem;
      background-color: #00000073;
      opacity: 0;
      transition: 500ms;
      :hover{
        background-color: #00000073;
      }
      .show{
        opacity: 1;
      }
    }
    `
const Video = styled.video`
width: 100%;
height: auto;
object-fit: contain;
cursor: pointer;
outline: none;
`
const DescriptionContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  width: 100%;
  z-index: 10;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const DescriptionTop = styled.div`
display: flex;
align-items: center;
gap: .5rem;
.profile{
  width: 30px;
  height: 30px;
  cursor: pointer;
}
`
const DescriptionBottom = styled.div`
display: flex;
align-items: center;
gap: .5rem;
.icon{
  color: white;
  font-size: 1rem;
}
`
const UserName = styled.h4`
color: white;
font-weight: 600;
&.small{
  font-weight: 400;
  font-size: .8rem;
}
`
const Follow = styled.p`
color: white;
font-weight: 600;
text-transform: capitalize;
&.small{
  font-weight: 400;
  font-size: .8rem;
}
`
const Dot = styled.p`
color: white;
font-weight: 600;
font-size:1rem;
`
const VideoPlayer = ({url,username,profilePic,name}) => {
  const [muted,setMuted] = useState(true);
  const [paused,sePaused] = useState(true);
  const videoRef = useRef(null);
  useEffect(()=>{
    const video = document.querySelector('.video');
   document.addEventListener('keypress',handlePlay)
  },[]);
  const handlePlay =( e,video) =>{
    // if(e.code === 'Space'){
    //  video.paused ? video.play(): video.pause();
    // }
  }
  return (
    <Container>
        {
          muted ?<IconButton className='volume'  ><BiVolumeMute/>  </IconButton> :
                <IconButton className='volume'  ><FaVolumeUp/>  </IconButton>
          
        }
     
      <Video src={url} muted={muted} loop ref={videoRef} className='video' />
      <IconButton className='center' > <BsFillPlayFill/> </IconButton>
      <DescriptionContainer>
        <DescriptionTop>
          <Avatar className='profile' alt={name} src={profilePic} />
          <UserName> {username} </UserName>
          <Dot>.</Dot>
          <Follow>follow</Follow>
        </DescriptionTop>
        <DescriptionBottom>
          <Audiotrack className='icon' />
          <UserName className='small' > {username} </UserName>
          <Follow className='small' > original sound </Follow>
        </DescriptionBottom>
      </DescriptionContainer>
    </Container>
  )
}

export default VideoPlayer