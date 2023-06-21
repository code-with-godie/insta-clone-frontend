import React from 'react'
import styled from 'styled-components'
import Sidenav from '../../components/nav/Sidenav'
import Post from '../../components/single/Post'

const Container = styled.section`
   display: flex;
    height: 100%;
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
const Right = styled.div`
flex:4.3;
display: flex;
justify-content: center;
align-items: center;
padding:.5rem;
/* background-color: #FAFAFA; */
`
const SinglePost = () => {
  return (
    <Container>
    <Left>
      <Sidenav />
    </Left>
    <Right>
      <Post/>
    </Right>
  </Container>
  )
}

export default SinglePost