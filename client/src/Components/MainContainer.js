import React, { useContext, useEffect, useState } from "react";

import './myStyles.css';
import ChatArea from './ChatArea';
import Sidebar from './Sidebar';
import Welcome from "./Welcome";



function MainContainer() {
  const [conversations,setconversations]=useState([
    {
        name : "TEST1",
        lastMessage : "last",
        timeStamp:"today",


    },





]);
  return (
    <div className='main-container'>
        <Sidebar/>
        {/* {conversations.map((conversation)=>{
            return <ChatArea props={conversation}/>

        })} */}
        <Welcome/>
    </div>
  )
}

export default MainContainer