import React, { useState } from 'react'
import styled from 'styled-components'
import Post from '../post/Post';
import Followings from './Followings';
import LoadingAnimation from '../loading/LoadingAnimation'
const Wrapper = styled.div`
    flex: 1;
    overflow: auto;
    width: 100%;
    max-width: 600px;
`
const Container = styled.div`
    width: 100%;
    max-width: 500px;
    margin:0 auto;
`
const Feeds = ({loading,error,posts}) => {
  if(loading) return <LoadingAnimation/>
  if(error) return console.log(error);
  // if(loading) return <LoadingAnimation/>

  return (
    <Wrapper>
      <Followings/>
    <Container>
      {
        posts.length === 0 ? <h1>theres no posts yet!!!</h1> :
        
        posts.map(post => <Post key={post._id} {...post} />)
      }
        
    </Container>
    </Wrapper>
  )
}

export default Feeds