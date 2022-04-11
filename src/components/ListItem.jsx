import React, { useState } from 'react';
import { useParams } from 'react-router';
import '../css/FeatureSpace.css' 
import '../css/List.css' 
import { mockData } from '../helper/mockData';

const ListItem = (props) => {
	
	return (
        <>
            <div className='listItem'>
                <p>{props.item}</p>
            </div>
        </>
    );
};

export default ListItem;
