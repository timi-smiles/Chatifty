import React from 'react'
import Cam from "../img/cam.png"
import Add from "../img/add.png"
import More from "../img/more.png"
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Timi</span>
        <div className="chatIcons">
            <img src={Cam} alt="" />
            <img src={Add} alt="" />
            <img src={More} alt="" />
        </div>
      </div>

        <Messages></Messages>
        <Input></Input>
    </div>
  )
}

export default Chat
