import React from 'react'

// Styles
import { Container, Group, GroupTitle, NewPlayList, GroupItem } from './styles'

// Images
import add_playlist from '../../assets/images/add_playlist.svg'

const Sidebar = () => (
	<Container>
		<Group>
			<GroupItem>Navegar</GroupItem>
			<GroupItem>Radio</GroupItem>
		</Group>
		<Group>
			<GroupTitle>Sua biblioteca</GroupTitle>
			<GroupItem>Seu Daily Mix</GroupItem>
			<GroupItem>Tocados recentemente</GroupItem>
			<GroupItem>Músicas</GroupItem>
			<GroupItem>Albúns</GroupItem>
			<GroupItem>Artistas</GroupItem>
			<GroupItem>Estações</GroupItem>
			<GroupItem>Arquivos locais</GroupItem>
			<GroupItem>Podcasts</GroupItem>
		</Group>
		<Group>
			<GroupTitle>Playlists</GroupTitle>
			<GroupItem>AVE</GroupItem>
			<GroupItem>As mais braba</GroupItem>
		</Group>
		<NewPlayList>
			<img src={add_playlist} alt="Adicionar nova playlist" />
			Nova playlist
		</NewPlayList>
	</Container>
)

export default Sidebar
