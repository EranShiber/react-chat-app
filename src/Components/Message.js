import React from 'react';

class Message extends React.Component {
    render() {   
            console.log(this.props.currectUser);
            
        return (
            <div className="chat-container">
                {this.props.message.map(x=> {
                    return <div> 
                        <span><stron>User:</stron></span>
                        <span className="main-date">At: {this.props.currectUser.createdAt}</span>
                    <span className="chat-message">{x}</span>
                    </div>
                })}
            </div>
        )
    }
}
export default Message 