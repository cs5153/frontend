import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import '../css/FeatureSpace.css';
import '../css/List.css';
import { mockData } from '../helper/mockData';
import ErrorMessage from './ErrorMessage';
import exitIcon from '../images/x-mark.png';
import ListItem from './ListItem';
import '../css/Chat.css';
import plusIcon from '../images/plus.png';
import delIcon from '../images/garbage.png';

const ListPopup = (props) => {
	const myRef = useRef();

	useEffect(() => {
		myRef.current.focus();
	}, []);

	const [state, setState] = useState({
		currentList: props.list,
	});
	const [newListItem, setNewListItem] = useState('');

	let editedList = props.list.items;
	const handleListChange = (index, changedItem) => {
		editedList[index] = changedItem;
	};

	const handleListItemDelete = (index) => {
		let updatedList = props.list;
		updatedList.items.splice(index, 1);
		setState({
			currentList: updatedList,
		});
	};

	let i = 0;
	return (
		<>
			<div className='addModal'>
				<h5 ref={myRef} tabIndex={0}>
					{state.currentList.name}
				</h5>
				<div className='userList'>
					<ul className='custList'>
						{state.currentList.items.map((currItem, index) => (
							<ListItem
								key={currItem}
								listIndex={i++}
								item={currItem}
								inputHandler={handleListChange}
								deleteHandler={handleListItemDelete}
							/>
						))}
					</ul>
				</div>
				<div className='addListItemSection'>
					<div className='addItemInput'>
						<input
							className='inputField'
							value={newListItem}
							type='text'
							placeholder='Add New List Item'
							onChange={(evt) => {
								setNewListItem(evt.target.value);
							}}
						/>
					</div>
					<button
						aria-label='Add item'
						className='addItemButton'
						onClick={() => {
							let updatedList = props.list;
							updatedList.items.push(newListItem);
							setState({
								currentList: updatedList,
							});
							const empty = '';
							setNewListItem(empty);
						}}
					>
						<img aria-disabled={true} className='iconImgXS' src={plusIcon} />
					</button>
					<button
						className='editListDone'
						onClick={() => {
							if (newListItem) {
								editedList.push(newListItem);
							}
							setState({
								currentList: editedList,
							});

							props.handler(false, {});
						}}
					>
						Save and Exit
					</button>
					<button
						aria-labelledby='deleteList'
						className='delButton'
						onClick={() => {
							props.delHandler(props.listIndex);
							props.handler(false, {}, props.listIndex);
						}}
					>
						<p id='deleteList'>Delete this list</p>
						<img className='iconImg' aria-disabled={true} src={delIcon} />
					</button>
				</div>
			</div>
		</>
	);
};

export default ListPopup;
