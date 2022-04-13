import React, { useState } from 'react';
import { useParams } from 'react-router';
import '../css/FeatureSpace.css' 
import '../css/List.css' 
import { mockData } from '../helper/mockData';
import deleteIcon from '../images/garbage.png'

const ListItem = (props) => {
	return (
        <>
            <li className='listItem'>
                {/* <p>{props.item}</p> */}
                <input className='listInput' defaultValue={props.item} type="text" onChange={(evt) =>{
                    props.inputHandler(props.listIndex, evt.target.value)
                }}/> 
                <button aria-aria-label='Delete item' className='delItemButton' onClick={() => props.deleteHandler(props.listIndex)}>
					<img aria-disabled={true} className='iconImgXS' src={deleteIcon} />
				</button>

            </li>
        </>
    );
};

export default ListItem;
