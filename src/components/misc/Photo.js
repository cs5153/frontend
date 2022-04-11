import React, { useState } from 'react'
import Image from "./Image";
import { Component } from 'react';
import Cookies from 'js-cookie'
import { mockData } from "../../helper/helper";

function Photo({ propData }) {

    // function importAll(r) {
    //     return r.keys().map(r);
    // }
    const photos = [];

    const cur = Cookies.get('current_trip');
    const tripData = mockData.trips[cur].albums["001"].photos;
    const [photoList, setphotoList] = React.useState(tripData);

    const [showPhoto, setshowPhoto] = React.useState(false);
    const [currentPhoto, setCurrentPhoto] = React.useState("");
    const [url, setUrl] = React.useState("");
    let Regex =/(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i;

    function enlarge(photo) {
        setCurrentPhoto(photo);
        setshowPhoto(true);
    }
    function enlittle() {
        setshowPhoto(false);
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        if (Regex.test(url)) {
            photoList.push(url);
            var temp = photoList;
            setphotoList(temp);
            alert(`Your photo is currenty uploading, this could take one minute`);

        } else {
            alert(`Invalid Image URL: ${url}`)
        }
    }
    return (
        <>
            {showPhoto ?
                <div className='bigPictureDiv' onClick={() => enlittle()}>
                    <img className='bigPicture' src={currentPhoto} />
                </div> : null}
            <div id="list" className='groupList' >
                <div className='groupName'>Photos</div>
                <div className='allLists' >
                    {tripData.map(photo => (
                        <div onClick={() => enlarge(photo)}>
                            <Image className={"photo"} id={photo} source={photo} key={photo} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='uploadPicture'>

                <form onSubmit={handleSubmit}>
                    <label>Enter photo url:
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </label>
                    <input type="submit" />
                </form>

            </div>
        </>
    )
}
export default Photo;