import React from 'react'
import ChatItem from './ChatItem'

// TODO add keys.

const MessageBox = ({ messages }) => {
    const renderedList="";
    console.log(messages);
    if (messages.length > 0) {
         renderedList = messages.map(message => {
            return (
                <ChatItem message={message} />
            )
        });
    }

    return (
        <>
        <div>{renderedList}</div>
            {/* {messages.length > 0 ?
                <div>{renderedList}</div>
                : <div></div>
            } */}
        </>
    )

};

export default MessageBox;