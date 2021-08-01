import React, { ReactElement } from 'react';

import logo from 'url:../img/logo.png';

import '../scss/Header.scss';

interface Props {}

function Header({}: Props): ReactElement {
	return (
		<header>
			<div className='company-content'>
				<img src={logo} alt='logo' />
				<span>Acupuncture Herb Center</span>
			</div>
		</header>
	);
}

export default Header;
