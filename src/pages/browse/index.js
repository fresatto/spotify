import React from 'react'
import { Container, Title, List, Playlist } from './styles'

const Browse = () => (
	<Container>
		<Title>Navegar</Title>

		<List>
			<Playlist to="/playlists/1">
				<img src="https://upload.wikimedia.org/wikipedia/pt/thumb/b/bf/Red_Hot_Chili_Peppers_-_Blood_Sugar_Sex_Magik.jpg/220px-Red_Hot_Chili_Peppers_-_Blood_Sugar_Sex_Magik.jpg" />
				<strong>Red hot chili peppers</strong>
				<p>Lorem ipsum</p>
			</Playlist>
		</List>
	</Container>
)

export default Browse
