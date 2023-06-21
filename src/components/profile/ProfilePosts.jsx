import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PostControllers from './PostControllers'
import Posts from './Posts'
import { useFetch } from '../../api/useFetch'
import LoadingAnimation from '../loading/LoadingAnimation'
const Container = styled.div`
margin-top:.3rem;
`
const ProfilePosts = ({userID}) => {
  const {loading,data,error} = useFetch(`/posts/${userID}`);
  
  const [posts,setPosts] = useState([])
  useEffect(()=>{
    data && setPosts(data.posts);
  },[data])
  return (
    <Container>
      <PostControllers/>
      {
        loading ? <LoadingAnimation/> : <Posts posts={posts} />
      }
    </Container>
  )
}

export default ProfilePosts