import React, { useState } from 'react';
import '../css/FeatureSpace.css';
import '../css/Help.css';

const HelpPage = (props) => {


    return (
        <>
			<div tabIndex={0} className='addModal'>
                <h3 tabIndex={0} className='heading'>Frequently Asked Questions</h3>

                <div className='helpContainer'>
                    <div className='faqSection'>
                        <h4 tabIndex={0} className=''>How do I access my account settings? </h4>
                        <ul className='answers'>
                            <li tabIndex={0} >On the navigation bar at the top of the screen, select the settings icon, which is besides the FAQ icon.</li>
                            <li  tabIndex={0} >Once there, you will have access to all of your account information such as your username, password, email, and phone number.</li>
                            <li  tabIndex={0} >Using the provided fields, you can update your username or password by filling in the appropriate field and pressing the associated button.</li>
                            <li  tabIndex={0} >Additionally, you may log out of your account by pressing the logout button twice to confirm.</li>
                        </ul>
                        </div>
                    <div className='faqSection'>
                        <h4 tabIndex={0} className=''>How do I pick a Trip? </h4>
                        <ul className='answers'>
                            <li tabIndex={0} >Select an existing trip by clicking on it's box on the main home page</li>
                            <li  tabIndex={0} >If you have no existing trips, click the 'plus' button and it will take you to a page which allows you to enter in Trip information</li>
                        </ul>
                    </div>

                    <div className='faqSection'>
                        <h4 tabIndex={0}  className=''>How do I add people to my trip?</h4>
                        <ul className='answers'>
                            <li tabIndex={0} >Once you've selected a trip from the trip selection page, you will be linked to the Trip settings page.</li>
                            <li tabIndex={0} >On the Trip settings page, click the drop-down menu in the right pane under 'Invite Users' to select between users to add to your trip.</li>
                        </ul>
                    </div>

                    <div className='faqSection'>
                        <h4 tabIndex={0}  className=''>How do I send messages?</h4>
                        <ul className='answers'>
                            <li tabIndex={0} >Once you've selected a trip from the trip selection page, click the chat tab in the side pane.</li>
                            <li tabIndex={0} >Now enter your message in the text input area on the bottom of the view</li>
                            <li tabIndex={0} >Click send, and you're done!</li>
                        </ul>
                    </div>

                    <div className='faqSection'>
                        <h4 tabIndex={0}  className=''>How do I manage lists?</h4>
                        <ul className='answers'>
                            <li tabIndex={0} >Once you've selected a trip from the trip selection page, click the List tab in the side pane.</li>
                            <li tabIndex={0} >Use the "Create List" button on the bottom right of the list view to create a new list</li>
                            <li tabIndex={0} >You can click on one of the currently displayed lists to open it</li>
                            <li tabIndex={0} >Use the provided input field, to add new list items, and hit enter to add to the list</li>
                        </ul>
                    </div>

                    <div className='faqSection'>
                        <h4 tabIndex={0}  className=''>How do I add manage photos?</h4>
                        <ul className='answers'>
                            <li tabIndex={0} >Once you've selected a trip from the trip selection page, click the Photo tab in the side pane</li>
                            <li tabIndex={0} >There, you will be able to view the photo albums that are a part of the trip by clicking on any of the icons in the grid view.</li>
                            <li tabIndex={0} >To add a new album, enter the name of the album in the provided field and press the 'Create Album' button.</li>
                            <li tabIndex={0} >After navigating to a particular album, you will be able to upload photos by providing a URL in the provided field and pressing the 'Upload' button.</li>
                            <li tabIndex={0} >Clicking on a photo will let you view it in an enlarged view. Clicking on the photo again will close it.</li>
                        </ul>
                    </div>
                </div>
			</div>
		</>
    );
}


export default HelpPage;
