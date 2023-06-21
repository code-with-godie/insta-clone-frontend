import React, { useState } from 'react'
import styled from 'styled-components'
import emoji from '../../assets/emoji.svg';
import EmojiPicker from '../emojiPicker/EmojiPicker';
import { postData } from '../../api/apiCalls';
import { useAppContext } from '../../context/AppContext';

const Container = styled.form`
    display: flex;
    position: relative;
    padding:.5rem;
    gap: .5rem;
    &.border{
   border-top: 1px solid #DBDBDB;
    }
`
const Input = styled.input`
flex: 1;
background: transparent;
outline: none;
padding:.2rem;
font-family: 'Poppins',sans-serif;
border: none;

`
const Emoji = styled.img`
width: 20px;
height: 20px;
color: gray;
cursor: pointer;
object-fit: contain;
`
const Send = styled.button`
text-transform: capitalize;
color: #1db9dc;
cursor: pointer;
outline: none;
border: none;
background: transparent;
font-size: .9rem;
font-weight: 600;
`

const PostCommentInput = ({direction,postID,handleCommnets,setCommentCount,setComments}) => {
    const {token,user:{username}} = useAppContext();
    const [comment,setComment] = useState('');
    const onEmojiClick = (emojiData =>{
        console.log(emojiData);
    })

    const handleComment = async e =>{
        e.preventDefault();
        try {
            const res = await postData(`/comments/${postID}`,{comment},token);
            if(res.success){
                handleCommnets(prev => [res.comment,prev[0]]);
                setCommentCount(prev => prev +1);
                if(direction === 'start'){
                    setComments(prev =>[...prev,res.comment])
                    
                }else{
                    setComments(prev =>[res.comment,...prev])
                    
                }
                setComment('');
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <Container className={direction === 'start' && 'border'} onSubmit={handleComment} >
        {
            direction === 'start' &&
        <Emoji src={emoji}/>
        }
        <Input 
        placeholder='Add a comment...' 
        value={comment}
        onChange={e => setComment(e.target.value)}
        />
        {
            direction === 'end' &&
        <Emoji src={emoji}/>
        }
        {
            comment &&
            <Send>post</Send>

        }
        {/* <EmojiPicker/> */}
    </Container>
  )
}

export default PostCommentInput
