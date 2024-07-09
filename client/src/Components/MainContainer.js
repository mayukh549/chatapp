import React, { createContext, useState } from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


export const myContext = createContext();
function MainContainer() {
  const [refresh, setRefresh] = useState(true);

  return (
    <div className='main-container'>
      <myContext.Provider value={{ refresh: refresh, setRefresh: setRefresh }}>
        <Sidebar />
        <Outlet />
      </myContext.Provider>
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