import React, { useState } from 'react'
import styled from 'styled-components'
import ChatRooms from './ChatRooms'
import Conversations from './Conversations'
import ConversationPreview from './ConversationPreview'
import { useAppContext } from '../../context/AppContext'


const Container = styled.div`
width: 100%;
max-width: 900px;
height: 90%;
border: 1px solid #DBDBDB;
display: flex;

`
const Left = styled.div`
flex:1;
border-right: 1px solid #DBDBDB;
padding:.5rem;
`
const Right = styled.div`
flex: 2;
display: flex ;
`
const Messenger = () => {
  const {currentConersation,setCurrentConversation}= useAppContext();
  return (
    <Container>
        <Left>
            <ChatRooms changeConversation = {setCurrentConversation} />
        </Left>
        <Right>
            {
                currentConersation ? <Conversations conversation = {currentConersation} /> : <ConversationPreview/>
            }

        </Right>
    </Container>
  )
}

export default Messenger