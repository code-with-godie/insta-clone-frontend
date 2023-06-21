import React, { useState } from 'react'
import styled from 'styled-components'
import emoji from '../../assets/emoji.svg';

const Wrapper = styled.div`
padding:1rem;
`
const Container = styled.form`
border: 1px solid #DBDBDB;
border-radius:1rem;
display: flex;
align-items: center;
gap:.5rem;
padding:.5rem;
`
const Emoji = styled.img`
cursor: pointer;
`
const Input = styled.input`
flex: 1;
background: transparent;
border: none;
outline: none;
font-family: 'Poppins',sans-serif;
font-size:1rem;
`
const Send = styled.button`
text-transform: capitalize;
color: #1db9dc;
cursor: pointer;
outline: none;
border: none;
background: transparent;
font-size: 1rem;
`
const ChatInput = ({setChats}) => {
  const [messege,setMessege] = useState('');
  const handleSend = e =>{
    e.preventDefault();
    try {
      setChats(prev => [...prev,{_id:Date.now(),sender:1,messege,time:'3pm'}])
      setMessege('')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Wrapper>

    <Container onSubmit={handleSend} >
        <Emoji src={emoji} />
        <Input 
        placeholder='message..' 
        value={messege} 
        onChange={e => setMessege(e.target.value)} />
        {messege && <Send type='submit'>send</Send  >}
    </Container>
    </Wrapper>
  )
}

export default ChatInput