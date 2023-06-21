import React from 'react'
import styled from 'styled-components'
import Picker from 'react-emoji-picker'
const Container = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-color: white;
max-width: 300px;
max-height: 300px;
display: flex;
right: 0;
bottom: 2.5rem;
border-radius: 1rem;
z-index: 10;
`
const EmojiPicker = () => {

   
  return (
    <Container>
        <Picker />
    </Container>
  )
}

export default EmojiPicker