import React from 'react';
import "../../css/Photo.css";
class AddListButton extends React.Component {
    render() {
        return (
            <div className="createListButton">
            <div onClick={() => this.props.onCreateList()} className="container customContainer super-position">
                <button className="ui button customColor">
                    Create List
                </button>
            </div>
            </div>
        )
    }
}

export default AddListButton;
