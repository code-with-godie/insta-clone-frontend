import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useFetch } from '../../api/useFetch';
import LoadingAnimation from '../../components/loading/LoadingAnimation'
import { useAppContext } from '../../context/AppContext';
const Wrapper = styled.div`
    padding: 1rem 0;
    overflow: auto;
    width: 100%;
    ::-webkit-scrollbar {
      display: none;
    }
`
const Container = styled.div`
    display: flex;
    padding:.5rem;
    gap:.5rem;
    align-items: center;
    .link{
        display: flex;
       flex-direction: column;
    gap:.3rem;
    align-items: center;
    }
    .profile{
        width: 60px;
        height: 60px;
        border-top:2px solid #FE016A;
        border-right:2px solid #D600BE;
        border-bottom:2px solid #FFC500;
        border-left:2px solid #FF3938;
        cursor: pointer;
    }
    
    `
const FollowingLabel = styled.p`
color: #000000d2 !important;
font-size:.8rem;
cursor: pointer;
letter-spacing:.5px;
`
const Followings = () => {
    const {followings,updateFollowings} = useAppContext();
    const [people,setPeople] = useState([]);
    const {loading,error,data} = useFetch('/users?followings=true');
    const navigate = useNavigate();
    const handleClick = (id,username)=>{
        navigate(`/profile/${username}`,{state:{_id:id}})
    }

    useEffect(()=>{
        data && updateFollowings(data.users);
    },[data]);
  return (
    <Wrapper>
    <Container>
        {
            loading ? <LoadingAnimation/> :
            followings.map(following =>{
                const {profilePic,username,_id} = following;
                return(
                    <div onClick={e => handleClick(_id,username)} className='link' >
                    <Avatar className='profile' alt={username} src={profilePic} />
                    <FollowingLabel> {username} </FollowingLabel>
                    </div>
                )
            })
        }
    
    </Container>
        </Wrapper>
  )
}

export default Followings