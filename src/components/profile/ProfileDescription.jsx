import { KeyboardArrowDown, MoreHoriz, PersonAdd, Settings } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAppContext } from '../../context/AppContext'
import { useFetch } from '../../api/useFetch'
import LoadingAnimation from '../loading/LoadingAnimation'
import { postData, updateData } from '../../api/apiCalls'
import Toast from '../models/Toast'
import Model from '../models/Model'
import Information from './Information'
import UserOptions from './UserOptions'
import { useNavigate } from 'react-router-dom'
import BlockOptions from './BlockOptions'

const Container = styled.div`
  padding:.5rem;
  display: flex;
  align-items: center;
  gap:1rem;

`
const AvatarContainer = styled.div`
.avator{
  width: 100px;
  height: 100px;
  border-top:2px solid #FE016A;
  border-right:2px solid #D600BE;
  border-bottom:2px solid #FFC500;
  border-left:2px solid #FF3938;
}
.avator.mine{
  cursor: pointer;
}
@media screen  and (min-width:500px){
padding:.5rem;
  .avator{
  width: 150px;
  height: 150px;
}

}
@media screen  and (min-width:768px){
  flex: 1;
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  .avator{
    width: 200px;
    height: 200px;
  }
  
}
`
const DescriptionContainer = styled.div`
flex: 2;
display: flex;
flex-direction: column;
gap:.5rem;
@media screen  and (min-width:600px){
  flex-direction: row;
  gap:.5rem;
  .hide{
    display: none;
  }
  & > :nth-child(2){
    flex:1;
    justify-content: flex-start;
    gap:.5rem;
  }
  
}
`
const UsernameContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 1rem;
max-width: 300px;
`
const Username = styled.h4`
text-transform: capitalize;
color: #000000d6;
font-family: 'Poppins',sans-serif;

`
const ControlsContainer= styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap:1rem;
max-width: 400px;
.hidden{
  display: none;
}
@media screen  and (min-width:768px){
  .hidden{
    display: block;
  }

}
`
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex:2;
`
const Control = styled.button`
border: none;
padding: 0.5rem;
display: flex;
align-items: center;
justify-content: center;
gap:.3rem;
text-transform: capitalize;
border-radius:.3rem;
background: #f4f4f4;
font-family: 'Poppins',sans-serif;
&:disabled{
  color: gray;
  cursor: not-allowed;
}
cursor: pointer;
&:hover{
  
  background: #e3e2e2;
}
`
const ProfileDescription = ({userID, showSuggested}) => {
  const {user:{_id:loggedInUserID,blockUser,followings},setUser:setLoggedInUser,follow,token,setRooms,setCurrentConversation} = useAppContext()
  const [user,setUser]= useState(undefined);
  const  {loading,data,error} = useFetch(`/users/${userID}`);
  const [following,setFollowing] = useState(followings.includes(userID));
  const [showToast,setShowToast] = useState(false);
  const [showModel,setShowModel] = useState(false);
  const [index,setIndex] = useState(0);
  const [toastMessage,setToastMessage] = useState('');
  const mine=  loggedInUserID === userID;
  const [blocked,setBlocked] = useState(null);
  const [messegerLoading,setMessegerLoading] = useState(false);
  const navigate = useNavigate();

  //component controllers
  const onSuccess = (res) => {
    setFollowing(prev =>!prev);
    setLoggedInUser(res.user);
    localStorage.setItem('insta-clone-user',JSON.stringify(res.user));
}
const onError = (error) => {
setShowToast(true);
setToastMessage(error.message);
}
const handleModel = (index) => {
  if(index === 0){
    setShowModel(prev => mine ? true : false);
    setIndex(index);
    return;
  }
  setShowModel(true);
  setIndex(index);
}
const handleMessageClick = async () => {
  setRooms(prev => [...prev,{username:user?.username,profilePic:user?.profilePic,setCurrentConversation}])
  setCurrentConversation({profilePic:user?.profilePic,username:user?.username});
  navigate('/direct/inbox');


}

  useEffect(()=>{
    if(data){
      setUser(data.user);
      setBlocked(data.user.blockUser.includes(loggedInUserID));
    }
  },[data])
  if(loading){
    return <LoadingAnimation/>
  }
  return (
    <Container>
      <AvatarContainer>
        <Avatar 
        className={mine ? 'avator mine' :'avator' }
        alt={user?.name} 
        src={user?.profilePic}
        onClick = { e => handleModel(0)}
         />
      </AvatarContainer>
      <LeftContainer>

      <DescriptionContainer>
        <UsernameContainer>
          <Username> {user?.username} </Username>
          <IconButton className='hide' >
            <MoreHoriz/>
          </IconButton>
        </UsernameContainer>
        <ControlsContainer>
          {
            mine ? <>
            <Control>Edit profile</Control>
            <Control>Ad tools</Control>
            <Control> <Settings/> </Control>  </>:
            <>
            <Control disabled={blocked} onClick={e =>follow(userID,onSuccess,onError)} > {following ? 'following' : 'follow' } <KeyboardArrowDown/> </Control>
          <Control disabled={blocked} onClick={handleMessageClick} > {messegerLoading ? <LoadingAnimation/> : 'Message'} </Control>
          <Control disabled={blocked} onClick={e => showSuggested(prev =>!prev)} ><PersonAdd/></Control>
          <Control  className='show hidden'  onClick = { e => handleModel(1)} ><MoreHoriz/></Control>
            </>
          }
        </ControlsContainer>
      </DescriptionContainer>
      <Information user= {user} />
          </LeftContainer>
      {showToast && <Toast messege={toastMessage} handleToast={setShowToast} />}
      {showModel && 
      <Model center bg={`rgba(0, 0, 0, 0.178)`} > 
      { index === 0 && <UserOptions handleModel={setShowModel} />}
      { index === 1 && <BlockOptions handleModel={setShowModel} username={user?.username} url={user?.profilePic} userID={userID} blocked={blocked} setBlocked={setBlocked} />}
       </Model>}
    </Container>
  )
}

export default ProfileDescription