import React from 'react'
import './myStyles.css';

function MessageSelf() {
    var pros1 = {
        name : "ran",
        message : "hi",
    }
  return (
    <div className='self-message-container'>
        <div className='messageBox'>
            <p>{pros1.message}</p>
            <p className='self-timeStamp'>12:30am</p>
        </div>
    </div>
  )
}

export default MessageSelf