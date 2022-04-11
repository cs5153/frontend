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

    const Settings = () => (
        <div id="settings" className='groupSettings' >
            <div className='groupName'>Group Name</div>
            <div className='data'>
                <div className='tripSettings'>

                    <div className="innerDiv">
                        <div className='tripSettingLabel'>
                            Trip Settings
                        </div>

                        <div className='picture'>
                            <div className="pic"></div>

                            <button className="upload">
                                Upload
                            </button>
                        </div>

                        <div className='location'>
                            <input className="inputName"></input>
                            <button className="updateName">
                                UpdateName
                            </button>
                        </div>
                        <div className='location'>
                            <input className="inputName"></input>
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
                                    <MenuItem value={"Tommy"}>Tommy</MenuItem>
                                    <MenuItem value={"Jeff"}>Jeff</MenuItem>
                                    <MenuItem value={"Kim"}>Kim</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className="selectedPeople">
                        {Tommy ?
                            <div className="person">
                                Tommy
                                <button onClick={() => removePerson("Tommy")} className="removePerson">
                                    X
                                </button>
                            </div>
                            : null}

                        {Jeff ?
                            <div className="person">
                                Jeff
                                <button onClick={() => removePerson("Jeff")} className="removePerson" >
                                    X
                                </button>
                            </div>
                            : null}

                        {Kim ?
                            <div className="person">
                                Kim
                                <button onClick={() => removePerson("Kim")} className="removePerson">
                                    X
                                </button>
                            </div>
                            : null}

                    </div>
                </div>
            </div>
        </div>)

    let { id } = useParams();
    const [showSettings, setshowSettings] = React.useState(true);
    const [showList, setshowList] = React.useState(false);
    const [showChat, setshowChat] = React.useState(false);
    const [showPhotos, setshowPhotos] = React.useState(false);
    const [Tommy, setTommy] = React.useState(false);
    const [Jeff, setJeff] = React.useState(false);
    const [Kim, setKim] = React.useState(false);

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
        if (name == "Tommy") {
            setTommy(true)
        }
        if (name == "Jeff") {
            setJeff(true)
        }
        if (name == "Kim") {
            setKim(true)
        }

    };

    function removePerson(name) {
        console.log(name);
        if (name == "Tommy") {
            setTommy(false)
        }
        if (name == "Jeff") {
            setJeff(false)
        }
        if (name == "Kim") {
            setKim(false)
        }
    };

    return (
        <>
          <div>
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
                {showPhotos ? <Photo /> : null}
            </div>
            </div>
        </>
    )
}

export default TripPage;
