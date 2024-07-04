import React from 'react';

import './myStyles.css';
import ChatArea from './ChatArea';
import Sidebar from './Sidebar';

function MainContainer() {
  return (
    <div className='main-container'>
        <Sidebar/>
        <ChatArea/>
    </div>
  )
}

export default MainContainer