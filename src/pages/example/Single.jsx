import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import {FaVolumeUp} from 'react-icons/fa'
import {BiVolumeMute} from 'react-icons/bi'
import {BsFillPlayFill, BsVolumeDown, BsVolumeMute, BsVolumeUp} from 'react-icons/bs'
import {BsPauseFill} from 'react-icons/bs'
import { IconButton } from '@mui/material'
const VideoContainer = styled.div`
    width: 100%;
    height: 90vh;
    max-width: 300px;
    position: relative;
`
const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius:.5rem;
`
const ControlsContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

`
const PlayPauseContainer = styled.div`
    position: relative;
    display: flex;
    gap:.5rem ;
    align-items: center;
    padding:.5rem;
    background: linear-gradient(to top,rgba(0,0,0,1) ,transparent);
    .icons{
        font-size: 1.7rem;
        color: white;
        position: absolute;
    }
    /* .play-btn.paused .play{
        display: inline;
    }
    .play-btn:not(.paused) .pause{
        display: inline;
    } */
`
const VolumeButtomContainer = styled(PlayPauseContainer)`
    justify-content: flex-start; 
    background: linear-gradient(to bottom,rgba(0,0,0,1) ,transparent);
    padding:0;
    .volume{
        font-size: 1.7rem;
        color: white;
    }
`
const Single = ({url,observer}) => {
    const target = useRef(null)
    useEffect(()=>{
      target.current 
      && observer?.observe(target.current)
    },[observer])
    console.log(observer);
  return (
    <VideoContainer ref={target} >
    <Video src = {url} loop  />
    <ControlsContainer>
        <PlayPauseContainer>
            <IconButton className='play-btn ' >
                {/* {
                    paused ? <BsFillPlayFill className='icons play' />:
                <BsPauseFill className='icons pause' />
                } */}
            </IconButton>
        </PlayPauseContainer>
        <VolumeButtomContainer>
            <IconButton>
            {/* {
                volume === 0 ? <BsVolumeMute className='volume' /> : volume < 0.5 ? <BsVolumeDown className='volume' /> :<BsVolumeUp className='volume'/>
            } */}
            </IconButton>
        </VolumeButtomContainer>
    </ControlsContainer>
</VideoContainer>
  )
}

export default Single