import { Bookmark, Favorite, FavoriteBorder } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import { BiMessageRounded } from 'react-icons/bi';
import { FiSend } from 'react-icons/fi';
import { BsBookmark,BsBookmarkFill } from 'react-icons/bs';
import { useAppContext } from '../../context/AppContext';
import { updateData } from '../../api/apiCalls'

const Container = styled.div`
display: flex;
align-items: center;
padding: 1rem;
.icon{
  font-size:1.5rem;
  color: black;
  cursor: pointer;
  :hover{
    opacity:.7;
  }
}
.liked{
  fill: tomato ;
  
}
.bookmarked{
  fill: #161616e6 ;
  
}
`
const IconContainer = styled.div`
flex: 1;
display: flex;
gap:1rem;
align-items: center;

`
const PostUserControl = ({likes,bookmarks,postID}) => {
  const {user:{_id:userID},like,bookmark} = useAppContext();
  const [liked,setLiked] = useState(likes.includes(userID));
  const [bookmarked,setBookmarked] = useState(bookmarks.includes(userID));
  // const [postLikes,setPostLikes] = useState(likes.length);
  // const [bookmarks.,setPostLikes] = useState(likes.length);

  return (
    <Container>
      <IconContainer>
        <IconButton onClick={e => like(postID,setLiked)} >
        {
          liked ? <Favorite className='icon liked'  /> :<FavoriteBorder className='icon'  /> 
        }

        </IconButton>
        <Tooltip title='Comment' >
        <BiMessageRounded className='icon'  />
        </Tooltip>
        <Tooltip title='Share post' >
        <FiSend className='icon'  /> 
        </Tooltip>
      </IconContainer>
      <IconButton onClick={e => bookmark(postID,setBookmarked)} >

      {
        bookmarked ? <BsBookmarkFill className='icon bookmarked'  />: <BsBookmark className='icon'  />
      }
      </IconButton>
    </Container>
  )
}

export default PostUserControl