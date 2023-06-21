import React, { useCallback } from 'react'
import styled from 'styled-components'
import img from '../../assets/create.PNG'
import {useDropzone} from 'react-dropzone';
const Container = styled.div`
display: flex;
flex-direction: column;
flex: 1;
border-radius:.5rem;
background-color: ${props => props.drag && '#f9f9f9'};
`
const Title = styled.h3`
text-align: center;
font-family: 'Popins',sans-serif;
font-weight: 400;
border-bottom: 1px solid #DBDBDB;
padding:.5rem;
`
const ContentContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
`
const Image = styled.img`
    
`
const Description = styled.p`
    font-weight:400;
    font-size: 1.3rem;
    color: #000000de;
`
const SelectButton = styled.label`
    background:#1877F2 ;
    color: white;
    padding:.5rem;
    border-radius:.5rem;
    font-size: .9rem;
    text-transform: capitalize;
    cursor: pointer;
`
const PostSelector = ({handleFiles}) => {
  const onDrop = (acceptedFiles,rejectedFiles) => {
    // console.log('accepted files',acceptedFiles);
    // console.log('rejected files',rejectedFiles);
   handleFiles(acceptedFiles);
   console.log(acceptedFiles);
  }
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  return (
    <Container {...getRootProps({
      drag :isDragActive,
      acceptedFiles:'image/*',
    })}  >
          <Title>Create new post</Title>
        <ContentContainer>
            <Image src={img}/>
            {
              isDragActive ? 
              <Description>Drop the file here</Description>:
              <>
            <Description>Drag photos and videos here</Description>
            <SelectButton>select from you computer </SelectButton>
              </>
            }
            <input 
            type='file' 
            hidden 
            name='file'
             id='file' 
             {...getInputProps({multiple:true})} />
        </ContentContainer>
    </Container>
  )
}

export default PostSelector