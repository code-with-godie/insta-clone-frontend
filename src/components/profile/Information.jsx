import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap:.5rem;
`
const Container = styled.div`
 /* border-top:1px solid #DBDBDB; */
 padding:.5rem;
 display: flex;
 justify-content: flex-start;
 align-items: center;
 gap: .5rem;
 @media screen  and (min-width:500px){
     gap: 1rem;
}
`
const  Controller = styled.div`
    display: flex;
    flex-direction: flex-start;
    gap:.3rem;
`
const  ControllerTitle = styled.p`
font-family: 'Poppins',sans-serif;
font-size:.9rem;
@media screen  and (min-width:500px){
    font-size:1rem;
}
`
const  ControllerLabel = styled(ControllerTitle)`

`
const  UserBioContainer = styled.div`
font-family: 'Poppins',sans-serif;
display: flex;
flex-direction: column;
gap:.5rem;

`
const Name = styled.h4`
text-transform: capitalize;
color: #000000b9;
font-family: 'Lora',sans-serif;


`
const  BioHeader = styled.p`
font-family: 'Poppins',sans-serif;
font-size:.9rem;
text-transform: capitalize;

`
const  Bio = styled.p`
/* color: #000000b9; */
font-family: 'Lora',sans-serif;
font-size:.9rem;

`
const Information = ({user}) => {
    const [followers,SetFollowers] = useState(user?.followers?.length);
    const [followings,SetFollowings] = useState(user?.followings?.length);
  return (
    <Wrapper>

    <Container>
        <Controller>
            <ControllerTitle>128</ControllerTitle>
            <ControllerLabel>posts</ControllerLabel>
        </Controller>
        <Controller>
            <ControllerTitle> {followers} </ControllerTitle>
            <ControllerLabel>{followers === 1 ? 'follower' : 'followers'} </ControllerLabel>
        </Controller>
        <Controller>
            <ControllerTitle>{followings}</ControllerTitle>
            <ControllerLabel>following</ControllerLabel>
        </Controller>
    </Container>
    <UserBioContainer>
        <Name> {user?.name} </Name>
        <BioHeader>product / services</BioHeader>
        <Bio> {user?.bio || 'not specified'} </Bio>
    </UserBioContainer>
    </Wrapper>
  )
}

export default Information