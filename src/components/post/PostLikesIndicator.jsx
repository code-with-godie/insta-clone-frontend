import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
padding:.5rem;
`
const Indicator = styled.h4`
color: #000000cf;
`
const PostLikesIndicator = ({likes}) => {
  return (
    <Container>
        <Indicator> {likes && `${likes} likes`} </Indicator>
    </Container>
  )
}

export default PostLikesIndicator