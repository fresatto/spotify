import React from 'react'
import './App.scss'

import Sidebar from './components/Sidebar'
import Player from './components/Player'
import { Wrapper, Container } from './styles/components'
function App() {
	return (
		<Wrapper>
			<Container>
				<Sidebar />
				<h1>HAHAHA</h1>
			</Container>
			<Player />
		</Wrapper>
	)
}

export default App
