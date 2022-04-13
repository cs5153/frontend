import React from 'react'
import ChatItem from './ChatItem'

// TODO add keys.

const MessageBox = ({ messages }) => {
    const renderedList = messages.map(message => {
        return (
            <ChatItem message={message}/>
        )
    });

    return <div>{renderedList}</div>
};

export default MessageBox;