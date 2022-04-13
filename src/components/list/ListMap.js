import React from 'react';
import ListItem from './ListItem';


const ListDispaly = ({ list }) => {
    const renderedList = list.items.map((item) => {
        return (<ListItem key={item} item={item}/>)
    })

    return renderedList;
}

export default ListDispaly;