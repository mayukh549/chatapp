import React, { useContext, useEffect, useState } from "react";

import './myStyles.css';
import ChatArea from './ChatArea';
import Sidebar from './Sidebar';
import Welcome from "./Welcome";
import CreateGroups from "./CreateGroups";
import User from "./User";
import { Outlet } from "react-router-dom";



function MainContainer() {

  return (
    <div className='main-container'>
        <Sidebar/>
        <Outlet />
        {/* {conversations.map((conversation)=>{
            return <ChatArea props={conversation}/>

        })} */}
        {/* <Welcome/> */}
        {/* <CreateGroups/> */}
        {/* <User/> */}
    </div>
  )
}

export default MainContainer