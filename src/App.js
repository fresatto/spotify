import React from 'react'
import './App.scss'
import { BrowserRouter } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Header from './components/Header'
import { Wrapper, Container, Content } from './styles/components'
import Routes from './routes'
function App() {
	return (
		<BrowserRouter>
			<Wrapper>
				<Container>
					<Sidebar />
					<Content>
						<Header />
						<Routes />
					</Content>
				</Container>
				<Player />
			</Wrapper>
		</BrowserRouter>
	)
}

export default App
