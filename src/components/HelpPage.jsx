import React, { useState } from 'react';
import exitIcon from '../images/x-mark.png';
import '../css/FeatureSpace.css';
import '../css/PersonCard.css';
import '../css/Help.css';

const HelpPage = (props) => {


    return (
        <>
			<div tabIndex={0} className='addModal'>
                <button className='exitButton' onClick={() => props.handler(false)}>
                    <img className='iconImg' src={exitIcon} />
                </button>
                <h3 tabIndex={0} className='heading'>Frequently Asked Questions</h3>

                <div className='helpContainer'>
                    <div className='faqSection'>
                        <h4 tabIndex={0} className=''>How do I Pick a Trip? </h4>
                        <ul className='answers'>
                            <li tabIndex={0} >Select an existing trip by clicking on it's name from the side pane</li>
                            <li  tabIndex={0} >If You have no existing trips, click the "plus" button on the bottom right of the Side Pane and follow the instructions to create a new trip</li>
                        </ul>
                    </div>

                    <div className='faqSection'>
                        <h4 tabIndex={0}  className=''>How do I add people to my trip?</h4>
                        <ul className='answers'>
                            <li tabIndex={0} >Once you've selected a trip from the side pane, click the People tab</li>
                            <li tabIndex={0} >Next Select the "Plus" button on the bottom right of the people view</li>
                            <li tabIndex={0} >Follow the prompts and enter the username of the person you wish to add</li>
                        </ul>
                    </div>

                    <div className='faqSection'>
                        <h4 tabIndex={0}  className=''>How do I send Chats?</h4>
                        <ul className='answers'>
                            <li tabIndex={0} >Once you've selected a trip from the side pane, click the Chat tab</li>
                            <li tabIndex={0} >Now enter your message in the text input area on the bottom of the view</li>
                            <li tabIndex={0} >click send, and you're done!</li>
                        </ul>
                    </div>

                    <div className='faqSection'>
                        <h4 tabIndex={0}  className=''>How do I Manage Lists?</h4>
                        <ul className='answers'>
                            <li tabIndex={0} >Once you've selected a trip from the side pane, click the List tab</li>
                            <li tabIndex={0} >Use the "Plus" button on the bottom right of the list view to create a new list</li>
                            <li tabIndex={0} >You can click on one of the currently displayed lists to open it</li>
                            <li tabIndex={0} >Click the "garbage" icon on the top right of an opened list to delete the whole list</li>
                            <li tabIndex={0} >use the provided input field, to add new list items, and hit the "plus" button on the right to add it to the list</li>
                            <li tabIndex={0} >clicking the "garbage" icon next to an existing list item will delete that item</li>
                            <li tabIndex={0} >click the "save and exit" button to close the currently open list and save your changes</li>
                        </ul>
                    </div>

                    <div className='faqSection'>
                        <h4 tabIndex={0}  className=''>How do I add manage photos?</h4>
                        <ul className='answers'>
                            <li tabIndex={0} >Once you've selected a trip from the side pane, click the Photo tab</li>
                            <li tabIndex={0} >Use the "Plus" icon on the bottom right to create a new album</li>
                            <li tabIndex={0} >Clicking on one of the currently displayed albums will let you view all the photos inside</li>
                            <li tabIndex={0} >Clicking on a photo will let you view it in an enlarged view, and you can use the arrows presented on the left and right side of this enlarged view to cycle through all photos in the album</li>
                            <li tabIndex={0} >Hitting the Plus Button in an open album will allow you to upload new photos</li>
                        </ul>
                    </div>
                </div>
			</div>
		</>
    );
}


export default HelpPage;