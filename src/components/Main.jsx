import React from 'react';
import mockData from '../helper/mockData';
import '../css/Main.css';
import stickmanLogo from '../images/stickmanLogo.png';

const Main = () => {
	return (
		<>
			<div className='d-flex flex-column w-100'>
				<div className='d-flex-column'>
					<div className='flex-grow-0 text-center'>
						<img
							className='mw-100 img-responsive'
							src={stickmanLogo}
							alt='clipart of man with baggage standing next to Tripper logo'
						/>
					</div>

					<div className='flex-grow-1'>
						<div className='d-flex'>
							<button className='flex-fill'>People</button>
							<button className='flex-fill'>Chat</button>
							<button className='flex-fill'>List</button>
							<button className='flex-fill'>Photo</button>
							<button className='flex-fill'>Contact</button>
						</div>
					</div>
				</div>

				<div className='flex-fill d-flex justify-content-center align-items-center'>
					No trip selected.
				</div>
			</div>
		</>
	);
};

export default Main;
