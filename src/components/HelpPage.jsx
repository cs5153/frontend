import React, { useState } from 'react';
import exitIcon from '../images/x-mark.png';
import '../css/FeatureSpace.css';
import '../css/PersonCard.css';
import '../css/Help.css';

const HelpPage = (props) => {


    return (
        <>
			<div className='addModal'>
                <button className='exitButton' onClick={() => props.handler(false)}>
                    <img className='iconImg' src={exitIcon} />
                </button>
                <h3 className='heading'>Frequently Asked Questions</h3>

                <div className='helpContainer'>
                    <div className='faqSection'>
                        <h4 className=''>How do I Pick a Trip? </h4>
                        <ul className='answers'>
                            <li>Select an existing trip by clicking on it's name from the side pane</li>
                            <li>If You have no existing trips, click the "plus" button on the bottom right of the Side Pane and follow the instructions to create a new trip</li>
                        </ul>
                    </div>

                    <div className='faqSection'>
                        <h4 className=''>How do I add people to my trip?</h4>
                        <ul className='answers'>
                            <li>Once you've selected a trip from the side pane, click the People tab</li>
                            <li>Next Select the "Plus" button on the bottom right of the people view</li>
                            <li>Follow the prompts and enter the username of the person you wish to add</li>
                        </ul>
                    </div>

                    <div className='faqSection'>
                        <h4 className=''>How do I send Chats?</h4>
                        <ul className='answers'>
                            <li>Once you've selected a trip from the side pane, click the Chat tab</li>
                            <li>Now enter your message in the text input area on the bottom of the view</li>
                            <li>click send, and you're done!</li>
                        </ul>
                    </div>

                    <div className='faqSection'>
                        <h4 className=''>How do I Manage Lists?</h4>
                        <ul className='answers'>
                            <li>Once you've selected a trip from the side pane, click the List tab</li>
                            <li>Use the "Plus" button on the bottom right of the list view to create a new list</li>
                            <li>You can click on one of the currently displayed lists to open it</li>
                            <li>Click the "garbage" icon on the top right of an opened list to delete the whole list</li>
                            <li>use the provided input field, to add new list items, and hit the "plus" button on the right to add it to the list</li>
                            <li>clicking the "garbage" icon next to an existing list item will delete that item</li>
                            <li>click the "save and exit" button to close the currently open list and save your changes</li>
                        </ul>
                    </div>

                    <div className='faqSection'>
                        <h4 className=''>How do I add manage photos?</h4>
                        <ul className='answers'>
                            <li>Once you've selected a trip from the side pane, click the Photo tab</li>
                            <li>Use the "Plus" icon on the bottom right to create a new album</li>
                            <li>Clicking on one of the currently displayed albums will let you view all the photos inside</li>
                            <li>Clicking on a photo will let you view it in an enlarged view, and you can use the arrows presented on the left and right side of this enlarged view to cycle through all photos in the album</li>
                            <li>Hitting the Plus Button in an open album will allow you to upload new photos</li>
                        </ul>
                    </div>
                </div>
			</div>
		</>
    );
}


export default HelpPage;