import React from 'react';

class ListItem extends React.Component {
    render() {
        return (
            <ul>
                <li>
                    {this.props.item}
                </li> 
            </ul>
        )
    }
}

export default ListItem;