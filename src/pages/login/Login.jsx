import React, { useState } from 'react'
import styled from 'styled-components'
import FormInput from '../../components/utility/FormInput'
import Toast from '../../components/models/Toast'
import { postData } from '../../api/apiCalls'
import LoadingAnimation  from '../../components/loading/LoadingAnimation'
import { useAppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
const Container = styled.form`
width: 80%;
max-width: 400px;
display: flex;
flex-direction: column;
gap:.5rem;
`

const Button = styled.button`
padding:.7rem;
border-radius:.5rem;
background-color: #4CB5F9;
color: white;
font-weight: 600;
font-size:1rem;
outline: none;
border: none;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
&:disabled{
  background-color: #d0d0d0;
}
`
const Login = () => {
  const [login,setLogin] = useState({email:'',password:''});
  const disabled = !login.email || login.password.length < 8;
  const [showToast,setShowToast] = useState(false);
  const [toastMessage,setToastMessage] = useState('');
  const [loading,setLoading] = useState(false);
  const {setUser,setToken} = useAppContext();
  const navigate  = useNavigate();

  //component controllers

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await postData('/users/auth/login',login,null);
      if(res.success){
        const {user,token} = res;
        localStorage.setItem('insta-clone-user',JSON.stringify(user));
        localStorage.setItem('insta-clone-access-token',JSON.stringify(token));
        setUser(user);
        setToken(token);
        navigate('/');
        setToastMessage('');
        console.log(res);
      }
      
    } catch (error) {
      console.log(error);
      setToastMessage(error?.response?.data?.message || error.messege);
      setShowToast(true);
      
    }
    finally{
      setLoading(false);
    }

  }

  const handleChange = e =>{
    const name  = e.target.name;
    const value  = e.target.value;
    setLogin(prev => ({...prev,[name]:value}))
  }
  return (
    <Container onSubmit={handleSubmit} >
      <FormInput 
      placeholder='Mobile number or email address'
      name='email'
      type='email'
      value={login.email}
      required={true}
      handlChange={handleChange}
       />
      <FormInput 
      placeholder='password'
      name='password'
      type='password'
      value={login.password}
      required={true}
      handlChange={handleChange}
       />
       <Button disabled={disabled} > {loading ? <LoadingAnimation/> : 'sign in'} </Button>
       {
        showToast && <Toast messege={toastMessage} handleToast={setShowToast} />
       }
    </Container>
  )
}

export default Login