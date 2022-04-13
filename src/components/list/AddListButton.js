import React from 'react';

class AddListButton extends React.Component {
    render() {
        return (
            <div onClick={() => this.props.onCreateList()} className="container">
                <button className="ui button">
                    Create List
                </button>
            </div>
        )
    }
}

export default AddListButton;