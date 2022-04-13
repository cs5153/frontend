import React, { useEffect, useRef, useState } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import plusImg from '../images/plus.png';
import exitIcon from '../images/x-mark.png';
import 'photoswipe/style.css';
import ErrorMessage from './ErrorMessage';
import { mockData } from '../helper/mockData';
import jsCookie from 'js-cookie';
import {useNavigate } from 'react-router';
import '../css/FeatureSpace.css'
import backArrow from '../images/arrow.png'

const Gallery = ({ album }) => {

	const navigate = useNavigate();


	const [modalOpen, setModalOpen] = useState();
	const [errorMessage, setErrorMessage] = useState('');
	const [photoUrl, setPhotoUrl] = useState('');
	const [photoFile, setPhotoFile] = useState('');
	const imageRefs = useRef([]);

	useEffect(() => {
		if (album) {
			let lightbox = new PhotoSwipeLightbox({
				gallery: '#albumGallery--responsive-images',
				children: 'a',
				indexIndicatorSep: ' of ',
				pswpModule: () => import('photoswipe'),
			});

			lightbox.on('change', () => {
				const altText =
					lightbox.pswp.currSlide.content.element.getAttribute('alt');
				lightbox.pswp.currSlide.content.element.setAttribute(
					'aria-live',
					altText
				);

				setTimeout(() => {
					lightbox.pswp.currSlide.content.element.removeAttribute('aria-live');
				}, 1000);
			});

			lightbox.init();
			return () => {
				lightbox.destroy();
				lightbox = null;
			};
		}
	}, []);

	const addPhoto = () => {
		if (photoUrl) {
			album.photos.push(photoUrl);
		} else if (photoFile) {
			album.photos.push(photoFile);
		}
		setPhotoUrl('');
		setPhotoFile('');
		setModalOpen(false);
	};

	return (
		<div
			className='listContainer pswp-gallery p-2 galleryDiv'
			id='albumGallery--responsive-images'
		>
			<button className='backButton' onClick={() => {navigate(-1)}}>
					<img className='iconImg' src={backArrow} />
			</button>
			{album.photos.map((image, index) => (
				<a
					aria-label={`open trip image ${index + 1} in popup`}
					role='link'
					key={`${image}-${index}`}
					href={image}
					ref={(el) => (imageRefs.current[index] = el)}
				>
					<img
						alt={`trip image ${index + 1}`}
						onLoad={(evt) => {
							imageRefs.current[index].setAttribute(
								'data-pswp-width',
								evt.target.naturalWidth
							);
							imageRefs.current[index].setAttribute(
								'data-pswp-height',
								evt.target.naturalHeight
							);
						}}
						className='p-2'
						src={image}
						width='200'
					/>
				</a>
			))}
			<button
				aria-label='add photo'
				id='addPhoto'
				className='addButton'
				onClick={() => setModalOpen(true)}
			>
				<img
					aria-label='exit add photo modal'
					aria-labelledby='addPoto'
					className='iconImg'
					src={plusImg}
				/>
			</button>
			{modalOpen && (
				<div className='addModal text-center'>
					{errorMessage && <ErrorMessage message={errorMessage} />}
					<div className='inputArea'>
						<h6 id='photoUrlTitle'>Enter photo URL:</h6>
						<input
							aria-labelledby='photoUrlTitle'
							autoFocus={true}
							type='text'
							onInput={(evt) => setPhotoUrl(evt.target.value)}
							value={photoUrl}
						/>
						<div>OR</div>
						<h6 id='photoFileTitle'>Upload photo file:</h6>
						<input
							aria-labelledby='photoFileTitle'
							accept='image/*'
							onInput={(evt) => {
								setPhotoFile(URL.createObjectURL(evt.target.files[0]));

							}}
							type='file'
						/>
					</div>
					<button onClick={addPhoto}>Upload Photo</button>
					<button
						aria-label='exit add photo modal'
						className='exitButton'
						id='exitButton'
						onClick={() => setModalOpen(false)}
					>
						<img
							aria-label='exit add photo modal'
							aria-labelledby='exitButton'
							className='iconImg'
							src={exitIcon}
						/>
					</button>
				</div>
			)}
		</div>
	);
};

export default Gallery;
