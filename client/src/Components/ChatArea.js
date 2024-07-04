import React from 'react';
import './myStyles.css';

function ChatArea() {
  return (
    <div className='chatArea-container'>
      <div className='chatArea-header '>chat header</div>
      <div className='messages-container'>chat message</div>
      <div className='text-input-area'>chat input</div>
    </div>
  )
}

export default ChatArea