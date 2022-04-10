import React from 'react'
import Image from "./Image";
function Photo() {

    function importAll(r) {
        return r.keys().map(r);
    }
    //need to change to list of photos from data
    const photos = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));
    photos.push("https://media.istockphoto.com/photos/feline-picture-id108226626?k=20&m=108226626&s=612x612&w=0&h=bDaWwxhcygjerdR71qQu8YFSXaDUIi_HUZV2AADg5L8=");
    const [showPhoto, setshowPhoto] = React.useState(false);
    const [currentPhoto, setCurrentPhoto] = React.useState("");
    const [uploadedPhoto, setUploadedPhoto] = React.useState(null);

    function enlarge(photo) {
        setCurrentPhoto(photo);
        setshowPhoto(true);
        console.log(currentPhoto);
    }
    function enlittle() {
        setshowPhoto(false);
    }
   
    function setSelectedImage(photo) {
        console.log(photo);
       
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
                    {photos.map(photo => (
                        <div onClick={() => enlarge(photo)}>
                            <Image id={photo} source={photo} key={photo} />
                        </div>
                    ))}

                </div>
            </div>
            <div className='uploadPicture'>
                <input
                    type="file"
                    name="myImage"
                    onChange={(event) => {
                        console.log(event.target.files[0]);
                        setSelectedImage(event.target.files[0]);
                    }}
                />

            </div>
        </>
    )
}
export default Photo;