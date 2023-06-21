import React from 'react'
import styled from 'styled-components'
const Container = styled.video`
    max-width: 100%;
    height: ${props => props.cover ? '100%' :' auto'};
    width: ${props => props.cover && '100%' };
    object-fit: ${props => props.cover ? 'cover': 'contain'};
    max-height: 700px;
    &.model{
      width: 100%;
      max-height: 100%;
      object-fit: cover;
    }

`
const PostVideo = ({url,cover,model}) => {
  return (
    <Container src={url} muted controls cover={cover} className={model && 'model'} />
  )
}

export default PostVideo