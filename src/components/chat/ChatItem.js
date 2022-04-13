import React from 'react';

const ChatItem = ({ message }) => {
    return (
        <div className="ui raised segment">
            <div className="ui comments">
                <div className="comment">
                    <div className="content" tabIndex={0}>
                    <a className="author">{message.sender}</a>
                    <div className="metadata">
                        <div className="date">{message.timestamp}</div>
                    </div>
                        <div className="text">{message.content} </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatItem;
