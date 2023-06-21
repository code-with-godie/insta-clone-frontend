import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Topnav from '../../components/nav/Topnav'
import Feeds from '../../components/home/Feeds';
import Sidenav from '../../components/nav/Sidenav';
import BottomNav from '../../components/nav/BottomNav';
import Model from '../../components/models/Model'
import CreatePost from '../../components/create/CreatePost';
import { useFetch } from '../../api/useFetch';

const Container = styled.section`
  height: 100%;
  display: flex;
  @media screen  and (min-width: 768px){
    .topnav{
      display: none;
    }
  }
`
const Left = styled.div`
display: none;
@media screen  and (min-width: 768px){
  display: flex;
  padding:.5rem;
  border-right:1px solid #DBDBDB;
  }
  @media screen  and (min-width: 1300px){
  flex: 1;
  }  
`
const Center = styled.div`
flex:3;
display: flex;
flex-direction: column;
overflow: auto;
padding:.5rem;
align-items: center;

`
const Right = styled.div`
display: none;
@media screen  and (min-width: 1200px){
  display: block;
  flex: 1.5;
  }
`
const Home = () => {
  const [showModel,setShowModel] = useState(false);
  const {loading,data,error} = useFetch('/posts');
  const [posts,setPosts] = useState([]);
  useEffect(()=>{
    document.title = 'Instagram';
  },[]) 
  useEffect(()=>{
    data && setPosts(data.posts);
  },[data]) 
  return (
    <Container>
      <Left >
      <Sidenav handlePosts = {setPosts}  />
      </Left>
      <Center>
      <Topnav/>
      <Feeds loading={loading} error={error} posts={posts} />
      <BottomNav handlePosts = {setPosts} />
      </Center >
      <Right  >
      </Right>
    </Container>
  )
}

export default Home