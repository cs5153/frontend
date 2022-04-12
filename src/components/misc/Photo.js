import React, { useState, useEffect } from 'react'
import Image from "./Image";
import { Component } from 'react';
import Cookies from 'js-cookie'
import { mockData, readData, writeData } from "../../helper/helper";
import { DataArray } from '@mui/icons-material';
import jsCookie from "js-cookie";
import '../../css/Photo.css';


function Photo({ propData }) {

    let log=jsCookie.get("data");
    const cur = Cookies.get('current_trip');
    const [photoList, setphotoList] = React.useState([]);
    let totalAlbums = JSON.parse(JSON.stringify(mockData)).trips[cur].albums;
    let totalAlbums1= JSON.parse(log);
    totalAlbums=totalAlbums1.trips[cur].albums;

    const [showPhoto, setshowPhoto] = React.useState(false);
    const [currentPhoto, setCurrentPhoto] = React.useState("");
    const [url, setUrl] = React.useState("");
    const [newAlbum, setNewAlbum] = React.useState("");
    const [showAlbums, setshowAlbums] = React.useState(true);
    const [albumArrayCount, setalbumArrayCount] = React.useState(totalAlbums);
    const [key, setKey] = React.useState("");

    const [time, setTime] = useState(Date.now());

    //Helps ensure re-rendering happens
    useEffect(() => {
        let requestId;
        const update = () => {
            setTime(Date.now());
            requestId = window.requestAnimationFrame(update);
        }
        update();
        return () => {
            window.cancelAnimationFrame(requestId);
        };
    }, []);
    
    let Regex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i;
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
            mockData.trips[cur].albums[key].photos.push(url);
            console.log(mockData);
            setphotoList(mockData.trips[cur].albums[key].photos)
            // setphotoList(photoList => [...photoList, url])

            // photoList.push(url);
            // var temp = photoList;
            // setphotoList(temp);

            alert(`Your photo is currently uploading, this could take one minute`);
        } else {
            alert(`Invalid Image URL: ${url}`)
        }
    }
    const handleNewAlbum = (event) => {
        event.preventDefault();
        var newName = (event.target.value);

        var counter = false;
        Object.keys(albumArrayCount).map(key => {

            if (albumArrayCount[key].name === newAlbum) {
                counter = true;
            }
        });

        if (counter) {
            alert(`Album Name Already Exists`)
        } else {
            let obj = { name: newAlbum, photos: [] };
            mockData.trips[cur].albums.push(obj);
            writeData(mockData);
            albumArrayCount[newAlbum]=obj;
            // writeData(mockData);

            setalbumArrayCount({...albumArrayCount});
            // setalbumArrayCount(albumArrayCount => ({
            //     ...albumArrayCount,
            //     [newAlbum]: obj
            // }));


            // setalbumArrayCount(albumArrayCount => ({
            //     ...albumArrayCount,
            //     [newAlbum]: obj
            // }));
            console.log(mockData);
            writeData(mockData);
        }
    }
    function goToAlbum(key1) {
        setKey(key1)
        setphotoList(albumArrayCount[key1].photos);
        setshowAlbums(false);
    }
    function closeAlbum() {
        setshowAlbums(true);
    }
   

    return (
        <>
            {showPhoto ?
                <div className='bigPictureDiv' onClick={() => enlittle()}>
                    <img className='bigPicture' src={currentPhoto} />
                </div> : null}
            <div id="list" className='groupList' >
                <div className='groupName'>Photos</div>

                {showAlbums ?
                    <div className='back'>
                        <div className='allLists' >
                            {Object.keys(albumArrayCount).map(key => (
                                <div tabindex="0" 
                                     aria-label={albumArrayCount[key].name} 
                                     className='albumsBox' 
                                     onClick={() => goToAlbum(key)} 
                                     onKeyPress={() => goToAlbum(key)}>
                                    <div>
                                        <img src='https://media.istockphoto.com/photos/blank-polaroid-photo-picture-id179407447?b=1&k=20&m=179407447&s=170667a&w=0&h=SHfdRkWV3irB4dstUDuH5FCzn-HMrMz61qOBxwONBtY=' />
                                    </div>
                                    <div className='albums' >
                                        {albumArrayCount[key].name}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='uploadPicture'>
                            <form className='addAlbum' onSubmit={handleNewAlbum}>
                                <label>Create New Album:  
                                    <input
                                        type="text"
                                        value={newAlbum}
                                        onChange={(e) => setNewAlbum(e.target.value)}
                                    />
                                </label>
                                <input type="submit" />
                            </form>
                        </div>
                    </div>
                    : null}

                {!showAlbums ?
                    <div className='back'>
                        <div className='allLists1' >
                            {photoList.map(photo => (
                                <div tabindex="0" aria-label="Photo" onClick={() => enlarge(photo)}>
                                    <Image className={"photo"} id={photo} source={photo} key={photo} />
                                </div>
                            ))}
                        </div>


                        <div className='uploadPicture1'>
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
                        <button className='closeAlbum' onClick={() => closeAlbum()}>Close Album</button>

                        </div>
                    </div>
                    : null}
            </div>
            {/* <div className='uploadPicture'>

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

            </div> */}
        </>
    )
}
export default Photo;
