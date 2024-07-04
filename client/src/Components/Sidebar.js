import React, { useContext, useEffect, useState } from "react";
import './myStyles.css';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from '@mui/material';
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import ConversationsItem from './ConversationsItem';

function Sidebar() {
    const [conversations,setconversations]=useState([
        {
            name : "TEST1",
            lastMessage : "last",
            timeStamp:"today",


        },
        {
            name : "TEST1",
            lastMessage : "last",
            timeStamp:"today",


        },
        {
            name : "TEST1",
            lastMessage : "last",
            timeStamp:"today",


        },




    ]);
    return (
    <div className='side-bar'>
        <div className='sb-header'>
            <div>
                <IconButton>
                    <AccountCircleIcon/>

                </IconButton>
            </div>
            <div>
                <IconButton>
                    <GroupAddIcon/>

                </IconButton>
                <IconButton>
                    <PersonAddIcon/>

                </IconButton>
                <IconButton>
                    <AccountCircleIcon/>

                </IconButton>
                <IconButton>
                    <AddCircleIcon/>

                </IconButton>
                <IconButton>
                    <NightlightIcon/>

                </IconButton>
            </div>

        </div>
        <div className='sb-search'>
        
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <input
                placeholder="Search"
                className={"search-box" }
            />

        </div>
        <div className='sb-conversations'>
        {conversations.map((conversation)=>{
            return <ConversationsItem props={conversation}/>

        })}
           
        </div>
    </div>
  )
}

export default Sidebar