import React, { useState } from 'react'
import styled from 'styled-components'
import FormInput from '../../components/utility/FormInput'

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
const Register = () => {
  const [register,setRegister] = useState({email:'',name:'',username:'',password:''});
  const  disabled  = !register.email || !register.name || !register.username || register.password.length < 8;

  const handleSubmit = e => {
    e.preventDefault();

  }
  const handleChange = e =>{
    const name  = e.target.name;
    const value  = e.target.value;
    setRegister(prev => ({...prev,[name]:value}))
  }
  return (
    <Container onSubmit={handleSubmit} >
      <FormInput 
      placeholder='Mobile number or email address'
      name='email'
      type='email'
      value={register.email}
      required={true}
      handlChange={handleChange}
       />
      <FormInput 
      placeholder='Full name'
      name='name'
      type='text'
      value={register.name}
      required={true}
      handlChange={handleChange}
       />
      <FormInput 
      placeholder='username'
      name='username'
      type='text'
      value={register.username}
      required={true}
      handlChange={handleChange}
       />
      <FormInput 
      placeholder='password'
      name='password'
      type='password'
      value={register.password}
      required={true}
      handlChange={handleChange}
       />
       <Button disabled={disabled} >sign up</Button>
    </Container>
  )
}

export default Register