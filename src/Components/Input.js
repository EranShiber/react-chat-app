import React from 'react';

class Input extends React.Component {
    render() {
        
        return (
            <div className="input">
            <form onSubmit={this.props.sendMessage}>
                <input type="text"
                 placeholder="Enter a message..."
                    onChange={this.props.hendleInputChange}
                 />
            </form>
            </div>
        )
    }
}
export default Input 