import React from 'react';
import Message from '../Components/Message';

class MessageBoard extends React.Component {
    render() {
        return (
            <div className="message-board">
               <Message message={this.props.message}/>
            </div>
        )
    }
}
export default MessageBoard 