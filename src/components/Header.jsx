import React from 'react';
import { useNavigate, useParams } from 'react-router';
import stickmanLogo from '../images/stickmanLogo.png';

const Header = () => {
	const { trip } = useParams();
	const navigate = useNavigate();

	return (
		<>
			<div className='d-flex-column'>
				<div className='d-none d-sm-flex text-center'>
					<img
						className='mw-100 img-responsive'
						src={stickmanLogo}
						alt='tripper logo: clipart of man with baggage standing next to Tripper logo'
						role='link'
						onClick={() => navigate('/')}
					/>
				</div>

				<div className='flex-grow-0' id='headerContent' tabIndex={-1}>
					<div className='d-flex'>
						<button
							className='flex-fill'
							onClick={() => navigate('people')}
							disabled={!trip}
						>
							People
						</button>
						<button
							className='flex-fill'
							onClick={() => navigate('chat')}
							disabled={!trip}
						>
							Chat
						</button>
						<button
							className='flex-fill'
							onClick={() => navigate('list')}
							disabled={!trip}
						>
							List
						</button>
						<button
							className='flex-fill'
							onClick={() => navigate('photo')}
							disabled={!trip}
						>
							Photo
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
