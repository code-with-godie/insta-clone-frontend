import React, { useState } from 'react'
import styled from 'styled-components'
import AboutOption from '../utility/AboutOption'
import { updateData } from '../../api/apiCalls'
import { useAppContext } from '../../context/AppContext'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap:.5rem;
    width: 100%;
    max-width: 400px;
    min-height: 100px;
    background-color: white;
    border-radius:.5rem;
`
const Option = styled.p`
    padding: .7rem;
    text-align: center;
    font-family: 'Lora', sans-serif;
    text-transform: capitalize;
    cursor: pointer;
    color: #101010e5;
    &:not(:last-child){
        border-bottom: 1px solid #dcdcdc;
    }
    &.main{
        color: tomato;
        font-weight: bold !important;
    }
    &.blue{
        color: #0095F6;
        font-weight: bold !important;
    }
`
const BlockOptions = ({handleModel,username,url,userID}) => {
    const [about,setAbout] = useState(false);
    const {token,user:{blockUser},user,setUser} = useAppContext();
    const [blocked,setBlocked] = useState(blockUser.includes(userID));
    const blockAccount = async ()=>{
        try {
            const res = await updateData(`/users/block/${userID}`,{},token);
            if(res.success) {
                if(blocked){
                    const newUser = {...user,blockUser:user.blockUser.filter(blockUser => blockUser !== userID)}
                    setUser(newUser);
                    localStorage.setItem('insta-clone-user',JSON.stringify(newUser));
                    
                }else{
                    
                    const newUser = {...user,blockUser:[...user.blockUser,userID]}
                    setUser(newUser);
                    localStorage.setItem('insta-clone-user',JSON.stringify(newUser));
                }
                setBlocked(prev => !prev);
                setTimeout(()=>{
                    handleModel(false);
                },500)
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <Container>
        {
            about ? <AboutOption handleAbout={setAbout} username={username} url={url} /> :
            <>
                <Option onClick={blockAccount} className='main' > {blocked ? 'unblock' : 'block'} </Option>
                <Option className='main' >restrict</Option>
                <Option className='main' >report</Option>
                <Option onClick={e => setAbout(true)} >about this account</Option>
                <Option onClick = {e => handleModel(false)} >cancel</Option>

            </>
        }
    </Container>
  )
}

export default BlockOptions