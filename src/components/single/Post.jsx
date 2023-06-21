import React from 'react'
import styled from 'styled-components'
import DisplayPost from '../post/DisplayPost'

const Container = styled.div`
width: 100%;
max-width: 700px;
height: 90%;
border: 1px solid #DBDBDB;
display: flex;

`
const Post = () => {
  return (
    <Container>
        {/* <DisplayPost
        postType ={postType}
        url ={url}
        profilePic ={profilePic}
        username ={username}
        caption ={caption}
         setCommentCount ={setCommentCount}
         handleCommnets ={handleCommnets}
         setComments ={setComments}
         postID ={postID}
         bookmarks ={bookmarks}
         likes ={likes}
         comments ={comments}
        /> */}
    </Container>
  )
}

export default Post