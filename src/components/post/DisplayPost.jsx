import React from 'react'
import PostContent from './PostContent'
import { MoreHoriz } from '@mui/icons-material'
import PostUserControl from './PostUserControl'
import PostLikesIndicator from './PostLikesIndicator'
import { Avatar, IconButton } from '@mui/material'
import PostCommentInput from './PostCommentInput'
import PostComment from './postComment';
import styled from 'styled-components'

const ModelLeft = styled.div`
flex: 1;
display: flex;
max-height: 500px;
>{
    flex: 1;
}
@media screen and (min-width:768px){
    max-height: 100%;
}
`
const ModelRight = styled.div`
flex: 1;
display: flex;
height: 100%;
flex-direction: column;
`
const CommentHeader = styled.div`
display: flex;
align-items: center;
padding:.5rem;
border-bottom: 1px solid #DBDBDB;
`
const HeaderUserNameContainer = styled.div`
flex: 1;
display: flex;
align-items: center;
gap:.5rem;
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
display: flex;
gap: 1rem;
font-family: 'Lora',sans-serif;
font-size:.9rem;
`
const CommentContainer = styled.div`
       flex: 1;
       flex-direction: column;
       padding:.5rem;
       border-bottom: 1px solid #DBDBDB;
       overflow: auto;
`

const DisplayPost = ({postType,url,profilePic,username,setCommentCount,handleCommnets,setComments,postID,bookmarks,likes,comments}) => {
  return (
    < >
        <ModelLeft>
            <PostContent postType={postType} url={url} model />
        </ModelLeft>
        <ModelRight>
            <CommentHeader>
                <HeaderUserNameContainer>
                 <Avatar src={profilePic} alt={username} className='profile' />
                    <UserName> {username} </UserName>
                </HeaderUserNameContainer>
                <IconButton> <MoreHoriz/> </IconButton>
            </CommentHeader>
            <CommentContainer className='model' >
                {
                    comments.map(comment => <PostComment model key={comment._id} {...comment} />)
                }
             </CommentContainer>
             <PostUserControl
             likes={likes}
             bookmarks={bookmarks}
             postID={postID}
             />
             <PostLikesIndicator likes={likes.length} />
             <PostCommentInput 
             direction='start'
             postID = {postID}
             handleCommnets ={handleCommnets}
             setCommentCount ={ setCommentCount}
             setComments = {setComments}
              />
        </ModelRight>
    </>
  )
}

export default DisplayPost