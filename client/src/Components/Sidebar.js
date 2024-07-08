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
import { useNavigate } from "react-router-dom";

function Sidebar() {
    const navigate = useNavigate();
    const [conversations, setconversations] = useState([
        {
            name: "TEST1",
            lastMessage: "last",
            timeStamp: "today",


        },
        {
            name: "TEST1",
            lastMessage: "last",
            timeStamp: "today",


        },
        {
            name: "TEST1",
            lastMessage: "last",
            timeStamp: "today",


        },




    ]);
    return (
        <div className='side-bar'>
            <div className='sb-header dark' >
                <div>
                    <IconButton
                        onClick={() => {
                            navigate("welcome");
                        }}
                    >
                        <AccountCircleIcon />

                    </IconButton>
                </div>
                <div>
                    <IconButton
                        onClick={() => {
                            navigate("groups");
                        }}
                    >
                        <GroupAddIcon />

                    </IconButton>
                    <IconButton
                        onClick={() => {
                            navigate("user");
                        }}
                    >
                        <PersonAddIcon />

                    </IconButton>   

                    <IconButton
                        onClick={() => {
                            navigate("create-groups");
                        }}
                    >
                        <AddCircleIcon />

                    </IconButton>
                    <IconButton
                        // onClick={() => {
                        //     dispatch(toggleTheme());
                        // }}
                    >
                        <NightlightIcon />

                    </IconButton>
                </div>

            </div>
            <div className='sb-search'>

                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input
                    placeholder="Search"
                    className={"search-box"}
                />

            </div>
            <div className='sb-conversations'>
                {conversations.map((conversation) => {
                    return <ConversationsItem props={conversation} />

                })}

            </div>
        </div>
    )
}

export default Sidebar