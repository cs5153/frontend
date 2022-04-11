import React, { useState } from "react";
import { useParams } from "react-router-dom"
import '../../css/TripPage.css';
import { FaWrench } from "react-icons/fa"
import { FaList } from "react-icons/fa"
import { FaCamera } from "react-icons/fa"
import { FaComment } from "react-icons/fa"
import Photo from "../misc/Photo.js"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Cookies from 'js-cookie'
import { mockData } from "../../helper/helper";

const List = () => (
    <div id="list" className='groupList' >
        <div className='groupName'>Lists</div>
        <div className='allLists'>

            <div className='oneList'>Stuff</div>
            <div className='oneList'>food</div>
            <div className='oneList'>Something</div>
            <div className='oneList'>idk</div>
        </div>
    </div>
)

function TripPage() {

    const [showSettings, setshowSettings] = React.useState(true);
    const [showList, setshowList] = React.useState(false);
    const [showChat, setshowChat] = React.useState(false);
    const [showPhotos, setshowPhotos] = React.useState(false);
    const [peopleList, setPeopleList] = React.useState([]);

    const cur = Cookies.get('current_trip');

    const tripData = mockData.trips[cur];
    const totalPeople = tripData.people;
    const [name, setName] = React.useState(tripData.name);
    const [image, setImage] = React.useState('https://cdn3.vectorstock.com/i/1000x1000/35/52/placeholder-rgb-color-icon-vector-32173552.jpg');
    let Regex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i;

    let textInput = React.createRef();
    let groupImage = React.createRef();
    function clickSettings() {
        setshowSettings(true);
        setshowList(false);
        setshowChat(false);
        setshowPhotos(false);
    }
    function clickList() {
        setshowSettings(false);
        setshowList(true);
        setshowChat(false);
        setshowPhotos(false);
    }
    function clickChat() {
        setshowSettings(false);
        setshowList(false);
        setshowChat(true);
        setshowPhotos(false);
    }
    function clickPhotos() {
        setshowSettings(false);
        setshowList(false);
        setshowChat(false);
        setshowPhotos(true);
    }
    const handleChange = (event) => {
        var name = (event.target.value);
        console.log(name);
        if (!peopleList.includes(name)) {

            setPeopleList(peopleList => [...peopleList, name])
        }
    };
    function removePerson(name) {
        if (peopleList.includes(name)) {
            setPeopleList(prevState => { // pass callback in setState to avoid race condition
                let newData = prevState.slice() //copy array from prevState
                let index = peopleList.indexOf(name);
                newData.splice(index, 1) // remove element
                return newData; // update state
            })
        }
    };
    function invite() {
        setPeopleList([]);
        alert(`Invitations Sent!`)
    };

    let onNameChangeClick = (e) => {
        setName(textInput.current.value);
    }
    let uploadImageClick = (e) => {
        if (Regex.test(groupImage.current.value)) {
            setImage(groupImage.current.value);
        }
        else {
            alert(`Invalid Image URL: ${groupImage.current.value}`)
        }
    }

    function showInvite(){
        if(peopleList.length>0){
            return true;
        }
        return false;
    }
    const Settings = () => (
        <div id="settings" className='groupSettings'  >
            <div className='groupName'>{name}</div>
            <div className='data'>
                <div className='tripSettings'>

                    <div className="innerDiv">
                        <div className='tripSettingLabel'>
                            Trip Settings
                        </div>

                        <div className='picture'>
                            <div className="pic">

                                <img src={image}></img>
                            </div>
                            <input ref={groupImage} type="text" className="inputName" placeholder="Input Image URL"></input>
                            <button className="upload" onClick={uploadImageClick}>
                                Upload
                            </button>
                        </div>

                        <div className='location'>
                            <input ref={textInput} type="text" className="inputName" placeholder="Change Group Name"></input>
                            <button className="updateName" onClick={onNameChangeClick}>
                                Update Name
                            </button>
                        </div>
                        <div className='location'>
                            <input className="inputName" placeholder="Change Destination Name"></input>
                            <button className="updateName">
                                Update Location
                            </button>
                        </div>
                        <div className='deleteTrip'>
                            <button className="updateName">
                                Delete Trip
                            </button>
                        </div>
                    </div>
                </div>
                <div className='inviteUsers'>
                    <div className='inviteUsersTitle'>
                        Invite Users
                    </div>
                    <div className='tripMembers'>

                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">People</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value='People'
                                    label="People"
                                    onChange={handleChange}
                                >
                                    {totalPeople.map(name => (
                                        <MenuItem key={name} value={name}>{name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className="selectedPeople" >
                        {peopleList.map(name => (
                            <div key={name} id={name} className="person">
                                {name}
                                <button onClick={() => { removePerson(name); }} className="removePerson">
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="location" >

                    {showInvite() ? <button onClick={() => { invite(); }} className="invite">
                        Send Invite
                    </button> : null}
                    </div>

                </div>
            </div>
        </div>)

    return (
        <>
            <div className='leftSide'>
                <div className='groupLink'>
                    <button className='link' onClick={() => clickSettings()}>
                        <FaWrench />
                        &nbsp; Settings
                    </button>
                </div>
                <div className='groupLink'>
                    <button className='link' onClick={() => clickList()}>
                        <FaList />
                        &nbsp; List
                    </button>
                </div>
                <div className='groupLink'>
                    <button className='link' onClick={() => clickPhotos()}>
                        <FaCamera />
                        &nbsp; Photos
                    </button>
                </div>
                <div className='groupLink'>
                    <button className='link' onClick={() => clickChat()}>
                        <FaComment />
                        &nbsp; Chat
                    </button>
                </div>
            </div>
            <div className="rightSide">
                {showSettings ? <Settings /> : null}
                {showList ? <List /> : null}
                {showPhotos ? <Photo propData={tripData.albums} /> : null}
            </div>
        </>
    )
}

export default TripPage;