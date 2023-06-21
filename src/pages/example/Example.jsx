import React, { useEffect, useRef, useState } from 'react'
import video from '../../assets/posts/7.mp4'
import styled from 'styled-components'
import {posts} from '../../data/data'
import Single from './Single'
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap:.5rem;
    align-items :center ;
    height: 100vh;
    overflow: auto;
`

const Example = () => {
    let videos = posts.filter(post => post.postType === 'video');
    const rootRef = useRef(null);
    const [observer,setObserver] = useState(null)
    useEffect(()=>{
        const root = rootRef.current;
        setObserver(new IntersectionObserver(()=>{},{root}));
    },[])
  return (
    <Container ref={rootRef} >
       {
        videos.map(video => <Single observer={observer} key={video.id} {...video} /> )
       }
    </Container>
  )
}

export default Example
   // console.log('volume:',volume,'rate:',playBackRate,'duration:',duration,'currentTime:',currentTime);
    // console.log('volume:',volume);