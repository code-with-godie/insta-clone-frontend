import React from 'react'
import styled from 'styled-components'
import PostHeader from './PostHeader'
import PostContent from './PostContent'
import PostUserControl from './PostUserControl'
import PostLikesIndicator from './PostLikesIndicator'
import PostComments from './PostComments'

const Container = styled.div`
border-bottom: 1px solid #DBDBDB;
`
const Post = ({url,createdAt,postType,caption,user:{username,profilePic,_id:userID},related,likes,bookmarks,_id:postID}) => {
  return (
    <Container>
        <PostHeader _id={userID} date={createdAt} username={username} profilePic= {profilePic} postID={postID} />
        <PostContent url={url} postType={postType} related={related} />
        <PostUserControl likes = {likes} bookmarks={bookmarks} postID={postID} />
        <PostLikesIndicator likes={likes.length} />
        <PostComments 
        profilePic={profilePic} 
        username={username} 
        caption={caption}
        postType ={postType}
        url={url}
        postID ={postID}
        likes = {likes}
        bookmarks = {bookmarks}
         />
    </Container>
  )
}

export default Post