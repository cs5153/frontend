import React, {useState} from "react";
import { useParams } from "react-router-dom"
import './GroupPage.css';
import {FaWrench } from "react-icons/fa"
import {FaList } from "react-icons/fa"
import {FaCamera } from "react-icons/fa"
import {FaComment } from "react-icons/fa"




const Settings = () =>(
    
        <div id="settings" className='groupSettings' > 
        <div className='groupName'>Group Name</div>
        <div className='data'>
            <div className='tripSettings'>
            
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
            <div className='inviteUsers'>
            
            <div className='inviteUsersTitle'>
                Invite Users
            </div>
            <div className='tripMembers'></div>
            </div>
        </div>
        </div>
)
const List = () =>(
    
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

const Photos = () =>(
    
    <div id="list" className='groupList' > 
    <div className='groupName'>Photos</div>
    <div className='allLists'>

    <div className='oneList'><p>Album 1</p></div>
    <div className='oneList'><p>Album 2</p></div>
    <div className='oneList'><p>Album 3</p></div>
    <div className='oneList'><p>Album 4</p></div> 
    <div className='oneList'><p>Album 5</p></div> 
    <div className='oneList'><p>Album 6</p></div> 

    </div>
    </div>
)


function GroupPage(){
    let { id } = useParams();
    const [showSettings, setshowSettings] = React.useState(true);
    const [showList, setshowList] = React.useState(false);
    const [showChat, setshowChat] = React.useState(false);
    const [showPhotos, setshowPhotos] = React.useState(false);

     function clickSettings(){
        setshowSettings(true);
        setshowList(false);
        setshowChat(false);
        setshowPhotos(false);
    }
    function clickList(){
        setshowSettings(false);
        setshowList(true);
        setshowChat(false);
        setshowPhotos(false);
    }
    function clickChat(){
        setshowSettings(false);
        setshowList(false);
        setshowChat(true);
        setshowPhotos(false);
    }
    function clickPhotos(){
        setshowSettings(false);
        setshowList(false);
        setshowChat(false);
        setshowPhotos(true);
    }
    return (
        <>
        <div className='leftSide'>
           <div className='groupLink'>
               <button className='link' onClick={() => clickSettings()}>
               <FaWrench  />
               &nbsp; Settings 
               </button>
           </div>
           <div className='groupLink'>
               <button  className='link' onClick={() => clickList()}>
               <FaList  />
               &nbsp; List
               </button>
           </div>
           <div className='groupLink'>
               <button  className='link'onClick={() => clickPhotos()}>
               <FaCamera  />
               &nbsp; Photos
               </button>
           </div>
           <div className='groupLink'>
               <button  className='link' onClick={() => clickChat()}>
               <FaComment  />
               &nbsp; Chat
               </button>
           </div>
        </div> 
        <div className="rightSide">
            { showSettings ? <Settings  /> : null }
            { showList ? <List  /> : null }
            { showPhotos ? <Photos  /> : null }

        </div>


        
           
        </>
    )
}


export default GroupPage;