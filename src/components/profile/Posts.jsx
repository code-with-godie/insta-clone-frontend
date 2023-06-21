import React from 'react'
import styled from 'styled-components'
import PostVideo from '../post/PostVideo'
import PostImage from '../post/PostImage'
import PostCollection from '../post/PostCollection'

const Container = styled.div`
  padding: 0.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(150px,1fr));
  grid-auto-rows: 150px;
  gap:.2rem;
  @media screen and (min-width:650px) {
    grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
    grid-auto-rows: 200px;
  }
  @media screen and (min-width:900px) {
    grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
    grid-auto-rows: 300px;
  }
`
const PostContainer = styled.div`
  box-shadow: 3px 3px 5px #e4e4e44a;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Posts = ({posts=[]}) => {
  if(posts.length===0){
    return(
    <Container>
      <h1>you have no posted anything yet!!!</h1>
    </Container>
    )
  }

  return (
    <Container>
      {
        posts.map(post =>{
          const {postType,url,_id,related} = post;
          return(
            <PostContainer key={_id} >
               {
                  postType === 'video' ? <PostVideo url={url} cover />:
                  postType === 'collection' ? <PostCollection related={related}  />:
                   <PostImage url={url} cover />
              }
            </PostContainer>
          )
        })
      }
    </Container>
  )
}

export default Posts