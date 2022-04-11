import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import jsCookie from 'js-cookie';
import plusImg from '../images/plus.png';
import exitIcon from '../images/x-mark.png';

import { mockData } from '../helper/mockData';
import Gallery from './Gallery';
import ErrorMessage from './ErrorMessage';

const Photo = () => {
	const { album, trip } = useParams();
	const tripId = jsCookie.get('trip_id');
	const albums = retrieveAlbums(tripId);

	const albumName = album ? decodeURIComponent(album) : null;
	const currentAlbum = albums.find(
		(album) => albumName === album.name.toLocaleLowerCase()
	);

	if (currentAlbum) {
		return (
			<div className='featureContainer' id='mainContent' tabIndex={-1}>
				<Gallery album={currentAlbum} />
			</div>
		);
	}

	return (
		<div className='featureContainer' id='mainContent' tabIndex={-1}>
			<div className='listContainer'>
				<PhotoMenu albums={albums} trip={trip} missingAlbum={albumName} />
			</div>
		</div>
	);
};

const PhotoMenu = ({ albums, trip, missingAlbum }) => {
	const [modalOpen, setModalOpen] = useState();
	const [errorMessage, setErrorMessage] = useState('');
	const [newName, setNewName] = useState();

	const addTrip = () => {
		if (
			albums.find(
				(album) =>
					album.name.toLocaleLowerCase() === newName.toLocaleLowerCase()
			)
		) {
			setErrorMessage('Error album already exists.');
		} else {
			createNewAlbum(newName);
			setErrorMessage('');
			setNewName('');
			setModalOpen(false);
		}
	};

	return (
		<>
			{missingAlbum ? `Album ${missingAlbum} was not found.` : <></>}
			{albums.map((album) => (
				<ul key={album.name}>
					<div
						className={`d-flex-row bg-white rounded
										w-100 mh-100 mt-2 p-3
										border border-2 border-dark`}
					>
						<Link to={`/${trip}/photo/${album.name.toLocaleLowerCase()}`}>
							{album.name}
						</Link>
					</div>
				</ul>
			))}
			<button
				aria-label='add album'
				className='addButton'
				onClick={() => setModalOpen(true)}
			>
				<img className='iconImg' src={plusImg} />
			</button>
			{modalOpen && (
				<div className='addModal text-center'>
					{errorMessage && <ErrorMessage message={errorMessage} />}
					<div className='inputArea'>
						<h6 id='newAlbumLabel'>Enter a new album name:</h6>
						<input
							aria-labelledby='newAlbumLabel'
							autoFocus={true}
							type='text'
							onInput={(evt) => setNewName(evt.target.value)}
						/>
					</div>
					<button onClick={addTrip}>Create Album</button>
					<button
						aria-label='exit create album modal'
						className='exitButton'
						id='exitButton'
						onClick={() => setModalOpen(false)}
					>
						<img
							aria-label='exit create album modal'
							aria-labelledby='exitButton'
							className='iconImg'
							src={exitIcon}
						/>
					</button>
				</div>
			)}
		</>
	);
};

function createNewAlbum(name) {
	const tripId = jsCookie.get('trip_id');
	mockData.trips[tripId].albums.push({ name: name, photos: [] });
}

function retrieveAlbums(tripId) {
	return mockData.trips[tripId].albums;
}

export default Photo;
