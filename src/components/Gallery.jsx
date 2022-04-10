import React, { useEffect, useRef } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const Gallery = ({ album }) => {
	const imageRefs = useRef([]);

	useEffect(() => {
		if (album) {
			let lightbox = new PhotoSwipeLightbox({
				gallery: '#albumGallery--responsive-images',
				children: 'a',
				pswpModule: () => import('photoswipe'),
			});

			lightbox.init();
			return () => {
				lightbox.destroy();
				lightbox = null;
			};
		}
	}, []);

	return (
		<div
			className='listContainer pswp-gallery p-2'
			id='albumGallery--responsive-images'
		>
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
						onLoad={(event) => {
							imageRefs.current[index].setAttribute(
								'data-pswp-width',
								event.target.naturalWidth
							);
							imageRefs.current[index].setAttribute(
								'data-pswp-height',
								event.target.naturalHeight
							);
						}}
						className='p-2'
						src={image}
						width='200'
					/>
				</a>
			))}
		</div>
	);
};

export default Gallery;
