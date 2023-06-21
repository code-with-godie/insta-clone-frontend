import React from 'react'
import styled from 'styled-components'
import TextMessege from './TextMessege';
import ImageMessege from './ImageMessege';
import VideoMessege from './VideoMessege';
const Container = styled.div`
align-self: ${props => props.mine ? 'flex-end' : 'flex-start'};
border: ${props => !props.mine && '1px solid #DBDBDB'};
background-color: ${props => props.mine && ' #F2F2F2'};
padding: 0.5rem;
border-radius: 1rem;
max-width: 60%;
`
const Messege = ({messege,type,sender,messegeRef}) => {
    let MyMessege = null;
    const mine = sender === 1;
    switch (type) {
        case 'image':
            MyMessege = ImageMessege;
            break;
        case 'video':
            MyMessege = VideoMessege;
            break;
            default:
            MyMessege = TextMessege;
            break;
    }
  return (
    <Container mine={mine} ref={messegeRef} >
        <MyMessege messege={messege} />
    </Container>
  )
}

export default Messege