import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'

import PostCommentInput from './PostCommentInput'
import { useFetch } from '../../api/useFetch'
import LoadingAnimation from '../../components/loading/LoadingAnimation'
import PostComment from './postComment';
import AllComments from './AllComments'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap:.5rem;
    padding:.5rem;
`
const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap:.5rem;
`
const CaptionContainer = styled.div`
    display: flex;
    gap:.5rem;
    align-items: center;
`
const MoreComments = styled.p`
color: #9a9898;
cursor: pointer;
font-family: 'Poppins',sans-serif;
&:hover{
    text-decoration: underline;
}
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
const PostComments = ({caption,profilePic,username,url,postType,postID,likes,bookmarks}) => {
    const [showComments,setShowComments] = useState(false);
    const [comments,setComments] = useState([]);
    const [commentCount,setCommentCount] = useState(0);
    const [displayComments,setDisplayComments] = useState([]);
    const {loading,data,error} = useFetch(`/comments/${postID}`);
    useEffect(()=>{
        if(data){
        setComments(data.comments) 
        setDisplayComments(data.comments.slice(0,2));
        setCommentCount(data.comments.length)
        }
    },[data]);

    if(loading) return <LoadingAnimation/>;
    if(error) console.log(error);
  return (
    <Container>
        {
            caption &&
        <CaptionContainer >
            <UserName> {username} </UserName>
            <Comment> {caption} </Comment>
        </CaptionContainer >
        }
        <CommentContainer>
            {
                displayComments.map(item => <PostComment key= {item._id} {...item} /> )
            }
            
        </CommentContainer>
        
        {
            comments.length > 2  && <MoreComments onClick={e => setShowComments(true)} > {`view all ${commentCount} comments`} </MoreComments>
        }
        
        <PostCommentInput 
        direction='end'
         postID={postID} 
         handleCommnets ={setDisplayComments} 
         setCommentCount={setCommentCount} 
         setComments ={setComments}
         />

       {
        showComments && 
        <AllComments
        handleModel ={setShowComments}
        postType ={postType}
        url ={url}
        profilePic ={profilePic}
        username  ={username}
        caption ={caption}
         setCommentCount ={setCommentCount}
         handleCommnets ={setDisplayComments}
         setComments ={setComments}
         postID ={postID}
         likes={likes}
         bookmarks={bookmarks}
         comments={comments}
        />
     
        }
        
    </Container>
  )
}

export default PostComments
