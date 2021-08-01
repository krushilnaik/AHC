import React, { ReactElement } from 'react';

import '../scss/Preloader.scss';

interface Props {}

function Preloader({}: Props): ReactElement {
	return <div className='preloader'></div>;
}

export default Preloader;
