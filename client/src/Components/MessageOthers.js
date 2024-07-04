import React from 'react'
import './myStyles.css';

function MessageOthers() {
    var pros1 = {
        name : "ran",
        message : "hi",
    }
  return (
    <div className='other-message-container'>
        <div className='conversation-container'>
            <p className='con-icon'>{pros1.name[0]}</p>
            <div className='other-text-content'>
                <p className='con-title'>{pros1.name}</p>
                <p className='con-lastMessage'>{pros1.message}</p>
                <p className='self-timeStamp'>12:30am</p>
            </div>
        </div>
    </div>
  )
}

export default MessageOthers