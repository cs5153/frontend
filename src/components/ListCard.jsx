import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../css/FeatureSpace.css';
import '../css/List.css';
import { mockData } from '../helper/mockData';

const ListCard = (props) => {
	return (
		<>
			<li className='listCard'>
				<button
					className='link'
					onClick={() => {
						props.handler(true, props.listItem, props.listIndex);
					}}
				>
					{props.listItem.name}
				</button>
			</li>
		</>
	);
};

export default ListCard;
