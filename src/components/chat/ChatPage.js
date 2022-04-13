import React from 'react';
import ChatBar from './ChatBar'
import MessageBox from './MessageBox';
import '../../css/ChatPage.css';
import { mockData, readData, writeData} from "../../helper/helper";
import Cookies from 'js-cookie';

class ChatPage extends React.Component {
    state = { messages: [], username: '' };

    componentDidMount() {
        console.log("mount")
        this.setState({ username: Cookies.get('username') })
        const currentTrip = Cookies.get('current_trip')
        var data = JSON.parse(JSON.stringify(mockData));
        console.log(data.trips[currentTrip].chat)
        this.setState({ messages: data.trips[currentTrip].chat.msgList })
    }

    onMessageSubmit = (msg) => {
        const currentTrip = Cookies.get('current_trip')
        mockData.trips[currentTrip].chat.msgList.push(msg)
        this.setState({ messages: mockData.trips[currentTrip].chat.msgList })
    };

    render() {
        return (
            <div className="ui container chat-container">
                <div className="ui segment chat-segment">
                    <MessageBox messages={this.state.messages}/>
                </div>
                <ChatBar onMessageSubmit={this.onMessageSubmit} username={this.state.username}/>
            </div>
        )
    }
};

export default ChatPage;
