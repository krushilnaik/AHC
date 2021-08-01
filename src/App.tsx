import React, { ReactElement } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

import './scss/App.scss';

interface Props {}

function App({}: Props): ReactElement {
	return (
		<>
			<Header />

			<main>Main</main>

			<Footer />
		</>
	);
}

export default App;
