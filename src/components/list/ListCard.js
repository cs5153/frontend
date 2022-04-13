import React from 'react';
import '../../css/ListCard.css';

class ListCard extends React.Component {
    render() {
        return (
            <div onClick={() => this.props.onListSelect(this.props.list)} className="container">
                <button className="ui button">
                    {this.props.list.name}
                </button>
            </div>
        )
    }
}

export default ListCard;