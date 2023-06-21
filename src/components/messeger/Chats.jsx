import React, { useState } from 'react'
import styled from 'styled-components'
import Messege from './Messege';

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap:.5rem;
    padding:.5rem;
    overflow: auto;
`
const Chats = ({chats,messegeRef}) => {
  if(chats.length === 0){
    return (
      <Container>
        <h1>no  chats</h1>

      </Container>
    )
  }
  return (
    <Container>
      {
        chats.map(messege => <Messege key={messege._id} {...messege} messegeRef={messegeRef}  /> )
      }
      

        
    </Container>
  )
}

export default Chats