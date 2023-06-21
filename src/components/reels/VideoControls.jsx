import React, { useState } from 'react'
import styled from 'styled-components'
import { FavoriteBorderOutlined, BookmarkBorder,MoreHoriz, FavoriteBorder, Favorite} from '@mui/icons-material'
import { RiMessengerLine } from 'react-icons/ri';
import {FiSend} from 'react-icons/fi'
import { Avatar, IconButton } from '@mui/material';
import { useAppContext } from '../../context/AppContext';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';

const Container = styled.div`
    padding:.5rem .5rem .5rem 1rem;
    display: flex;
    flex-direction: column;
    gap:1rem;
    justify-content: flex-end;
`
const Control = styled.div`
display: flex;
flex-direction: column;
gap:.1rem;
align-items: center;
.profile{
    border-radius: .5rem;
    cursor: pointer;
}
.icon{
    color: #000000dd;
    font-size:1.7rem;
}
.liked{
  fill: tomato ;
  
}
.bookmarked{
  fill: #161616e6 ;
  
}
`
const ControlLabel = styled.p`
font-size:.9rem;
`
const VideoControls = ({profile,username,likes,bookmarks,postID}) => {
    const {user:{_id:userID},like,bookmark} = useAppContext();
    const [liked,setLiked] = useState(likes.includes(userID));
    const [bookmarked,setBookmarked] = useState(bookmarks.includes(userID));
     const [postLikes,setPostLikes] = useState(likes.length);

     const likeCallback = () =>{
        setLiked(prev => !prev);
        setPostLikes(prev => liked ? prev -1 : prev +1);
     }
//   const [bookmarks.,setPostLikes] = useState(likes.length);
  return (
    <Container>
        <Control>
            <IconButton onClick={e => like(postID,likeCallback)} >
            {
          liked ? <Favorite className='icon liked'  /> :<FavoriteBorder className='icon'  /> 
        }
                </IconButton>
            <ControlLabel> {postLikes} </ControlLabel>
        </Control>
        <Control>
            <IconButton><RiMessengerLine className='icon' /></IconButton>
            <ControlLabel>333k</ControlLabel>
        </Control>
        <Control>
            <IconButton><FiSend className='icon' /></IconButton>
        </Control>
        <Control>
            <IconButton onClick={e => bookmark(postID,setBookmarked)} >
                {
                  bookmarked ? <BsBookmarkFill className='icon bookmarked'  />: <BsBookmark className='icon'  />
                 }
                </IconButton>
        </Control>
        <Control>
            <IconButton><MoreHoriz className='icon' /></IconButton>
        </Control>
        <Control>
            <Avatar className='profile' src={profile} alt={username}  />
        </Control>

    </Container>
  )
}

export default VideoControls
