import React from 'react'
import styled from 'styled-components'

const Content = styled.p``
const TextMessege = ({messege}) => {
  return (
    <Content> {`${messege?.length > 700 ? `${messege.substring(0,700)}...` : `${messege}`}`} </Content>
  )
}

export default TextMessege