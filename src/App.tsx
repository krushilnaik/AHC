import React, { ReactElement } from 'react';
import Header from './components/Header';

import './scss/App.scss';

interface Props {}

function App({}: Props): ReactElement {
	return (
		<>
			<Header />

			<main>Main</main>

			<footer>Acupuncture Herb Center © 2021</footer>
		</>
	);
}

export default App;
