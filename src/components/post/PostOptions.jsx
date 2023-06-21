import React, { useState } from 'react'
import styled from 'styled-components'
import { useAppContext } from '../../context/AppContext'
import { updateData } from '../../api/apiCalls'
import Toast from '../models/Toast'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
background-color: white;
border-radius:.5rem;
width: 100%;
max-width: 400px;
min-height: 100px;
`
const Option = styled.p`
    padding: .7rem;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    text-transform: capitalize;
    cursor: pointer;
    &:not(:last-child){
        border-bottom: 1px solid #dcdcdc;
    }
    &.main{
        color: tomato;
        font-weight: bold !important;
    }
    &.blocked{
      pointer-events: none;
      color: gray;
      cursor: pointer;
    }
`
const PostOptions = ({userID,handleModel,username,postID,profilePic}) => {
    const {user:{followings,blockUser,_id:loggedInUserID},setUser,follow,updateFollowings,followings:people} = useAppContext();
    const [following,setFollowing] = useState(followings?.includes(userID))
    // const [following,setFollowing] = 
    const [showToast,setShowToast] = useState(false);
    const [blocked,setBlocked] = useState(blockUser.includes(userID));
    const [toastMessage,setToastMessage] = useState('');
    const mine = userID === loggedInUserID;
    const navigate = useNavigate();
    //component controllers

    const onSuccess = (res) => {
          console.log(res);
          setFollowing(prev =>!prev);
          updateFollowings(prev =>following ? people.filter(person => person._id !== userID) :[...prev,{_id:userID,username,profilePic}] )
          setUser(res.user);
          localStorage.setItem('insta-clone-user',JSON.stringify(res.user));
    }
    const onError = (error) => {
      console.log(error);
      setShowToast(true);
      setToastMessage(error.message);
    }

    const handleAccount = ()=>{
      navigate(`/profile/${username}`,{state:{_id:userID}})
    }
    const handleAddToFavourite = ()=>{
      console.log('add to favorites');
    }
    const handleCopyToClipBoard = ()=>{
      console.log('copy to clipboard');
    }
    const handleGoToPost = ()=>{
      navigate(`/p/${postID}`,{state:{_id:userID}})
    }
    const handleShare = ()=>{
      console.log('sharing post');
    }
    const handleEmbed = ()=>{
      console.log('embeding post');
    }
    const handleCancel = ()=>{
      handleModel(false);
    }
    const handleFollow = ()=>{
      follow(userID,onSuccess,onError);
     setTimeout(handleCancel,500)}
  return (
    <Container>
        { !mine && <Option className='main' >report</Option>}
        { !mine && <Option className={blocked ? 'main blocked' : 'main'} onClick={handleFollow} > {following ? 'unfollow' :'follow' } </Option>}
        <Option className={blocked && 'blocked'} onClick={handleAddToFavourite}  >add to favaurite</Option>
        <Option onClick={handleGoToPost} >go to post</Option>
        <Option onClick={handleShare} >share to...</Option>
        <Option onClick={handleCopyToClipBoard} >copy link</Option>
        <Option onClick={handleEmbed} >embed</Option>
        <Option onClick={handleAccount} >about this account</Option>
        <Option onClick={handleCancel} >cancel</Option>
        {showToast && <Toast messege={toastMessage} handleToast={setShowToast} />}
    </Container>
  )
}

export default PostOptions