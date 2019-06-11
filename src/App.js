import React from 'react'
import './App.scss'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

// Reactotron
import './config/reactotron'
// Consts
import store from './store'

// Rotas
import Routes from './routes'

// Components
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Player from './components/Player'

// Styles
import { Wrapper, Container, Content } from './styles/components'
function App() {
	console.tron.log('teste')
	return (
		<Provider store={store}>
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
		</Provider>
	)
}

export default App
