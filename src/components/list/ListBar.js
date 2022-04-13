import React from 'react';

class ListBar extends React.Component {
    state = { item: '' }

    // Evnet Callback Mehtod called when text is typed into text box
    onInputChange = (event) => {
        this.setState({ item: event.target.value })
    }

    // Event Callback Method called when enter is pressed
    onItemSubmit = (event) => {
        event.preventDefault();
        
        const item = this.state.item;

        this.props.onItemSubmit(item);

        this.setState({ item: '' })
    }

    render () {
        return (
            <div className="chat-bar ui segment">
                <form onSubmit={this.onItemSubmit} className="ui form">
                    <div className="field">
                        <label>Add Item</label>
                        <input 
                            type="text" 
                            value={this.state.item}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }   
}

export default ListBar;