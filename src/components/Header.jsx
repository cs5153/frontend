import React from 'react';
import { useNavigate } from 'react-router';
import stickmanLogo from '../images/stickmanLogo.png';

const Header = () => {
	const navigate = useNavigate();

	return (
		<>
			<div className='d-flex-column'>
				<div className='d-none d-sm-flex text-center'>
					<img
						className='mw-100 img-responsive'
						src={stickmanLogo}
						alt='clipart of man with baggage standing next to Tripper logo'
					/>
				</div>

				<div className='flex-grow-0'>
					<div className='d-flex'>
						<button className='flex-fill' onClick={() => navigate('people')}>
							People
						</button>
						<button className='flex-fill' onClick={() => navigate('chat')}>
							Chat
						</button>
						<button className='flex-fill' onClick={() => navigate('list')}>
							List
						</button>
						<button className='flex-fill' onClick={() => navigate('photo')}>
							Photo
						</button>
						<button className='flex-fill' onClick={() => navigate('contact')}>
							Contact
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
