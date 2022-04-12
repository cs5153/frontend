import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import '../css/FeatureSpace.css' 
import '../css/List.css' 
import { mockData } from '../helper/mockData';
import ErrorMessage from './ErrorMessage';
import exitIcon from '../images/x-mark.png';
import ListItem from './ListItem';
import '../css/Chat.css'
import plusIcon from '../images/plus.png'


const ListPopup = (props) => {
	const {trip} = useParams()

	const [state, setState] = useState(
		{
			currentList : props.list,
		}
	)
	const [newListItem, setNewListItem] = useState("")
	let editedList = props.list.items
	console.log("item text is: ",newListItem)
	const handleListChange = (index ,changedItem) => {
		editedList[index] = changedItem
		console.log("wanting to update index: ", index)
		console.log("NEW LIST IS: ", editedList)
		// setState({
		// 	currentList: updatedList
		// })
		// console.log("state list after update: ", state.currentList)
	}

	const handleListItemDelete = (index) => {
		let updatedList = props.list
		console.log("TYPE OF LIST IS: ", typeof(updatedList.items))
		updatedList.items.splice(index, 1)
		console.log("wanting to update index: ", index)
		console.log("NEW LIST IS: ", updatedList)
		setState({
			currentList: updatedList
		})
		console.log("state list after update: ", state.currentList)
	}

	console.log("CURR LIST IS: ", state.currentList)
	let i = 0
	return (
	<>
		<div className='addModal'>
					<h5>{state.currentList.name}</h5>
					{/* {<h6>hello</h6> */}
					<button className='exitButton' onClick={() => props.handler(false,{})}>
							<img className='iconImg' src={exitIcon} />
					</button>
					{state.hasError && <ErrorMessage message={state.errMessage} />}
					{/* <div className='listArea'>  */}
						<div className='userList'> 
							<ul className='custList'> 
							{state.currentList.items.map((currItem,index) => (     
								<ListItem key={currItem} listIndex={i++} item={currItem} inputHandler={handleListChange} deleteHandler={handleListItemDelete} />
							))} 
							</ul> 
						</div> 
					{/* </div>  */}
					<div className='addListItemSection'> 
						<div className='addItemInput'> 
							<input className='inputField' value={newListItem} type="text" placeholder='Add New List Item' onChange={(evt) => { 
								setNewListItem(evt.target.value)
								console.log("value of new item after set is: ", newListItem)
							}}/> 
						</div>     
						<button className='addItemButton' onClick={() => {
							let updatedList = props.list
							updatedList.items.push(newListItem)
							setState({
								currentList: updatedList
							})
							console.log("before newItem update: ", newListItem)
							const empty = ""
							setNewListItem(empty)
							console.log("after newItem update: ", newListItem)

						}}>
							<img className='iconImgXS' src={plusIcon} />
						</button>
						<button className='editListDone'>Done Editing List</button>
					</div>

			
		</div>
	</>
	);
};

export default ListPopup;
