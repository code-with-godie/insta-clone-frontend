import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Sidenav from '../../components/nav/Sidenav'
import VideoContainer from '../../components/reels/VideoContainer'
import BottomNav from '../../components/nav/BottomNav'
import { posts } from '../../data/data'
import { useFetch } from '../../api/useFetch'
import LoadingAnimation from '../../components/loading/LoadingAnimation'
import Toast from '../../components/models/Toast'
const Container = styled.section`
height: 100%;
overflow: auto;
display: flex;
`
const Left = styled.article`
border-right:1px solid #DBDBDB;
padding:.5rem;
display: none;
@media screen and (min-width:768px) {
  display: flex;

}
@media screen  and (min-width: 1300px){
  flex: 1;
  }  
`
const Right = styled.article`
display: flex;
flex-direction: column;
padding:.5rem;
flex: 4;
align-items: center;
`
const ReelsContainer = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
overflow: auto;
flex:1;
width: 100%;
max-width: 450px;
scroll-snap-type:y;
::-webkit-scrollbar {
  width: 0;
 }

`
const Reels = () => {
    const {loading,data,error} = useFetch('/posts/reels');
    const [reels,setReels] = useState([]);
    const [toastMessage,setToastMessage] = useState('');
    const [showToast,setShowToast] = useState(false);

    useEffect(()=>{
      data && setReels(data.posts)
    },[data])
    if(error){
      setToastMessage(error.message);
      return  null;
    }
  return (
    <Container>
        <Left>
        <Sidenav/>
        </Left>
        <Right>
            <ReelsContainer>
                  {
                    loading ? <LoadingAnimation large /> :
                reels.map(reel => <VideoContainer key={reel.id} {...reel} />)
            }
            </ReelsContainer>
            <BottomNav/>
        </Right>
        {
          showToast &&
        <Toast messege={toastMessage}  handleToast={setShowToast} />
        }
    </Container>
  )
}

export default Reels