import React from 'react';

class Message extends React.Component {
    render() {        
        return (
            <div className="chat-container">
                {this.props.message.map(x=> {
                    return <div> 
                        <h4>User</h4>
                    <span className="chat-message">{x}</span>

                    </div>
                })}
            </div>
        )
    }
}
export default Message 