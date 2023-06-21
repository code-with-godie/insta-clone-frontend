import React, { createContext, useContext, useState } from 'react'
import { updateData } from '../api/apiCalls';


const AppContext = createContext({user:null,token:null,socket:null});

export const AppContextProvider = ({children}) => {;
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('insta-clone-user')));
    const [token,setToken] = useState(JSON.parse(localStorage.getItem('insta-clone-access-token')));
    const [socket,setSocket] = useState(null);
    const [darkMode,setDarkMode] = useState(false);
    const [followings,updateFollowings] = useState([]);
  const [currentConersation,setCurrentConversation] = useState(null);
  const [rooms,setRooms] = useState([]);
    
    //controllers
    const like = async (postID,callback) =>{
      try {
        const res = await updateData(`/posts/like/${postID}`,null,token);
        if(res.success){
          callback(prev => !prev);
        }
        
      } catch (error) {
        console.log(error);
      } 
    }
    const bookmark = async (postID,callback) =>{
      try {
        const res = await updateData(`/posts/bookmark/${postID}`,null,token);
        if(res.success){
          callback(prev => !prev);
        }
      } catch (error) {
        console.log(error);
      } 
    }
    const follow = async (userID,onSuccess,onError)=>{
      try {
  
        const res = await updateData(`/users/follow/${userID}`,{},token);
        if(res.success){
          onSuccess(res);
        }
      } catch (error) {
        onError(error);
      }
    }
    const share = {
      user,token,socket,darkMode,followings,currentConersation,rooms,setRooms,
      setCurrentConversation,updateFollowings,setSocket,setToken,setUser,like,bookmark,follow
    }
  return  <AppContext.Provider value={{...share}} > {children} </AppContext.Provider>
}

export const useAppContext = ()=>{
    return useContext(AppContext);
}