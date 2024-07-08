import React, { useContext, useEffect, useRef, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import './myStyles.css';
import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessageSelf";

function ChatArea() {
  const [conversations,setconversations]=useState([
    {
        name : "TEST1",
        lastMessage : "last",
        timeStamp:"today",


    },





]);
var props = conversations[0];

  return (
    <div className='chatArea-container'>
      <div className='chatArea-header'>
        <p className='con-icon'>{props.name[0]}</p>
        <div className="header-text">
          <p className='con-title'>{props.name}</p>
          <p className='con-timeStamp'>{props.timeStamp}</p>
        </div>
        

          <IconButton>
            <DeleteIcon/>
          </IconButton>
        
      </div>
      <div className='messages-container'>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
        <MessageSelf/>
        <MessageSelf/>
        <MessageSelf/>
        <MessageSelf/>
      </div>
      <div className='text-input-area'>
      <input
            placeholder="Type a Message"
            className={"search-box"}/>
      </div>
    </div>
  )
}

export default ChatArea