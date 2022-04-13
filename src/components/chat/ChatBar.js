import React from 'react';

class ChatBar extends React.Component {
    state = { message: ''}

    // Evnet Callback Mehtod called when text is typed into text box
    onInputChange = (event) => {
        this.setState({ message: event.target.value })
    }

    // Event Callback Method called when enter is pressed
    onMessageSubmit = (event) => {
        event.preventDefault();
        
        const msg = {
            "sender": this.props.username,
            "content": this.state.message,
            "timestamp": Date(Date.now())
        };

        this.setState({ message: '' })
        this.props.onMessageSubmit(msg);
    }

    render () {
        return (
            <div className="chat-bar ui segment">
                <form onSubmit={this.onMessageSubmit} className="ui form">
                    <div className="field" tabIndex={0}>
                        <label>Chat Message</label>
                        <input 
                            type="text" 
                            value={this.state.message}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default ChatBar;
