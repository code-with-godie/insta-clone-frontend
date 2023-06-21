import React from 'react'
import styled from 'styled-components'
import VideoPlayer from './VideoPlayer'
import VideoControls from './VideoControls'
import {users} from '../../data/data'

const Container = styled.div`
    width: 100%;
    max-width: 450px;
    flex: 0 0 96%;
    display: flex;
`
const VideoContainer = ({url,user:{profilePic,name,username},videoRef,_id:postID,likes,bookmarks}) => {
  // const postUser = users.find(item => item._id === user);
  return (
    <Container>
        <VideoPlayer  url={url} username={username} name={name} profilePic={profilePic} videoRef={videoRef} />
        <VideoControls profile={profilePic} postID={postID} likes={likes} bookmarks={bookmarks} />
    </Container>
  )
}

export default VideoContainer