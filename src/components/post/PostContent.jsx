import React from 'react'
import styled from 'styled-components'
import PostImage from './PostImage'
import PostVideo from './PostVideo'
import PostCollection from './PostCollection'

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #000000ed;
width: 100%;
  
`
const PostContent = ({url,postType,model,related}) => {
  return (
    <Container>
      {
        postType === 'video' ? 
        <PostVideo url={url} model ={model} />:
         postType ==='collection'? 
         <PostCollection height related={related} showControls /> :
         <PostImage url={url} model ={model} />
      }
    </Container>
  )
}

export default PostContent