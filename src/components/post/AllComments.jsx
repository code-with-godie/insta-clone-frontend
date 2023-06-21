import React from 'react'
import styled from 'styled-components'
import Model from '../../components/models/Model'
import DisplayPost from './DisplayPost'

const Container = styled.div`
      padding:0;
        background-color: white;
        width: 100%;
        height: 96%;
        border-radius:.5rem;
        display: flex;
        flex-direction: column;
        @media screen and (min-width:768px) {
            max-width:1100px;
            flex-direction: row;
        }
`
const AllComments = ({handleModel,postType,url,profilePic,username,caption, setCommentCount,handleCommnets,setComments,postID,bookmarks,likes,comments}) => {
  return (
    <Model bg='rgba(0, 0, 0, 0.274)' showClose openModel={handleModel} center >
        <Container>

        <DisplayPost
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
        />
        </Container>
</Model>
  )
}

export default AllComments