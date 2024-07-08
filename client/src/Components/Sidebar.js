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
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Features/themeSlice";

function Sidebar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const lightTheme = useSelector((state) => state.themeKey);
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
            <div className={"sb-header" + (lightTheme ? "" : " dark")} >
                <div>
                    <IconButton
                        onClick={() => {
                            navigate("welcome");
                        }}
                    >
                        <AccountCircleIcon className={"icon" + (lightTheme ? "" : " dark")}/>

                    </IconButton>
                </div>
                <div>
                    <IconButton
                        onClick={() => {
                            navigate("groups");
                        }}
                    >
                        <GroupAddIcon className={"icon" + (lightTheme ? "" : " dark")} />

                    </IconButton>
                    <IconButton
                        onClick={() => {
                            navigate("user");
                        }}
                    >
                        <PersonAddIcon className={"icon" + (lightTheme ? "" : " dark")} />

                    </IconButton>

                    <IconButton
                        onClick={() => {
                            navigate("create-groups");
                        }}
                    >
                        <AddCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />

                    </IconButton>
                    <IconButton
                        // onClick={() => {
                        //     dispatch(toggleTheme());
                        // }}
                        onClick={() => {
                            dispatch(toggleTheme());
                          }}
                    >
                        {lightTheme && (
                            <NightlightIcon
                                className={"icon" + (lightTheme ? "" : " dark")}
                            />
                        )}
                        {!lightTheme && (
                            <LightModeIcon className={"icon" + (lightTheme ? "" : " dark")} />
                        )}

                    </IconButton>
                </div>

            </div>
            <div className={"sb-search" + (lightTheme ? "" : " dark")}>

                <IconButton>
                    <SearchIcon className={"icon" + (lightTheme ? "" : " dark")} />
                </IconButton>
                <input
                    placeholder="Search"
                    className={"search-box" + (lightTheme ? "" : " dark")}
                />

            </div>
            <div className={"sb-conversations" + (lightTheme ? "" : " dark")}>
                {conversations.map((conversation) => {
                    return <ConversationsItem props={conversation} />

                })}

            </div>
        </div>
    )
}

export default Sidebar