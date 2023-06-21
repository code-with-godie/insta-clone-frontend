import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import styled from 'styled-components'
import { useAppContext } from '../../context/AppContext';
import {io} from 'socket.io-client';
const Container = styled.main`
  height: 100vh;
  overflow: auto;
  background: ${props => props.darkMode && 'rgb(0, 0, 0)'};
`
const ProtectedLayout = () => {
  const{darkMode,user} = useAppContext();

  return (
    <Container darkMode = {darkMode} >
      {
        user ? <Outlet/> : <Navigate to='/login' />
      }
    </Container>
  )
}

export default ProtectedLayout