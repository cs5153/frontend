import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import jsCookie from 'js-cookie';
import plusImg from '../images/plus.png';

import { mockData } from '../helper/mockData';
import Gallery from './Gallery';

const Photo = () => {
	const { album, trip } = useParams();
	const tripId = jsCookie.get('trip_id');
	const albums = retrieveAlbums(tripId);

	const albumName = decodeURIComponent(album);
	const currentAlbum = albums.find(
		(album) => albumName === album.name.toLocaleLowerCase()
	);


	if (currentAlbum) {
		return (
			<div className='featureContainer'>
				<Gallery album={currentAlbum} />
			</div>
		);
	}

	return (
		<div className='featureContainer'>
			<div className='listContainer'>
				<PhotoMenu albums={albums} trip={trip} missingAlbum={albumName} />
			</div>
		</div>
	);
};

const PhotoMenu = ({ albums, trip, missingAlbum }) => {
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
			<button className='addButton'>
				<img className='iconImg' src={plusImg} />
			</button>
		</>
	);
};

function retrieveAlbums(tripId) {
	return mockData.trips[tripId].albums;
}

export default Photo;
