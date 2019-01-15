import React, { Component } from 'react';
import './App.css';
import Chatkit from '@pusher/chatkit'
import Input from './Components/Input'
import OnlineUsers from './Components/OnlineUsers'
import Header from './Layouts/Header'
import MessageBoard from './Layouts/MessageBoard'

import {tokenUrl, instanceLocator} from './confing'

class App extends Component {
  state = {
      messages: [],
      userType: ''
    }
 

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: "eranz",
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })   
    });

    chatManager.connect()
      .then(currectUser => {
        this.currectUser = currectUser
        currectUser.subscribeToRoom({
          roomId: 19385290,
          hooks: {
            onNewMessage: message => {     
              this.setState({ messages: [...this.state.messages, message.text] })
            }
          }     
        })
      })
    }
    
    sendMessage = (e) => {
      e.preventDefault()
      this.currectUser.sendMessage({
        text: this.state.userType,
        roomId: 19385290
      })
    }   
    hendleInputChange = (e) => {
      this.setState({userType: e.target.value})
      
    }
  
  
  render() {   
    return (
      <div>
        <Header />
        <div className="main-container">
          <MessageBoard message={this.state.messages} currectUser={this.currectUser}/>
          <OnlineUsers />
          <Input sendMessage={this.sendMessage} hendleInputChange={this.hendleInputChange}/>
        </div>
      </div>
    );
  }
}

export default App;
