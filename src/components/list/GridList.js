import React from 'react';
import ListCard from './ListCard';
import AddListButton from './AddListButton';
import '../../css/GridList.css';

const GridList = ({ lists, onListSelect, onCreateList }) => {
    const renderedList = lists.map((list) => {
        return (<ListCard key={list.key} list={list} onListSelect={onListSelect}/>)
    })

    return (
        <div>
            <div className="grid-list">
                {renderedList}
            </div>
            <div className="create-list">
                <AddListButton onCreateList={onCreateList}/>
            </div>
        </div>
    )
}

export default GridList;
