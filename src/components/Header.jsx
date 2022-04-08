import React from 'react';
import stickmanLogo from '../images/stickmanLogo.png';

const Header = () => {
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
						<button className='flex-fill'>People</button>
						<button className='flex-fill'>Chat</button>
						<button className='flex-fill'>List</button>
						<button className='flex-fill'>Photo</button>
						<button className='flex-fill'>Contact</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
