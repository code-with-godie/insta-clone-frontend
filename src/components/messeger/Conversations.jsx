import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import ChatHeader from './ChatHeader'
import Chats from './Chats'
import ChatInput from './ChatInput'
import {messeges} from '../../data/data'

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const Conversations = ({conversation}) => {
  const [chats,setChats] = useState(messeges);
  const  {username} = conversation;
  const messegeRef = useRef(null);
  useEffect(()=>{
    messegeRef.current?.scrollIntoView();
  },[chats]);
  return (
    <Container>
      <ChatHeader username={username} />
      <Chats chats={chats} messegeRef={messegeRef} />
      <ChatInput setChats ={setChats} />
    </Container>
  )
}

export default Conversations