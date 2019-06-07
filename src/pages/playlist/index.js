import React from 'react'
import { Container, Header, SongList } from './styles'
import ClockIcon from '../../assets/images/clock.svg'
import PlusIcon from '../../assets/images/plus.svg'

const Playlist = () => (
	<Container>
		<Header>
			<img
				src="https://upload.wikimedia.org/wikipedia/pt/thumb/b/bf/Red_Hot_Chili_Peppers_-_Blood_Sugar_Sex_Magik.jpg/220px-Red_Hot_Chili_Peppers_-_Blood_Sugar_Sex_Magik.jpg"
				alt="Playlist"
			/>

			<div>
				<span>PLAYLIST</span>
				<h1>Rock forever</h1>
				<p>13 músicas</p>
				<button>Play</button>
			</div>
		</Header>
		<SongList cellPadding={0} cellSpacing={0}>
			<thead>
				<th />
				<th>Titulo</th>
				<th>Artista</th>
				<th>Albúm</th>
				<th>
					<img src={ClockIcon} alt="Duração" />
				</th>
			</thead>
			<tbody>
				<tr>
					<td>
						<img src={PlusIcon} alt="plus" />
					</td>
					<td>Lorem ipsum</td>
					<td>Lorem ipsum</td>
					<td>Lorem ipsum</td>
					<td>Lorem ipsum</td>
				</tr>
			</tbody>
		</SongList>
	</Container>
)

export default Playlist
