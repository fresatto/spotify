import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as PlaylistsAction } from '../../store/ducks/playlists'
// Styles
import { Container, Group, GroupTitle, NewPlayList, GroupItem } from './styles'

// Images
import add_playlist from '../../assets/images/add_playlist.svg'

// Component
import Loading from '../../components/Loading'

class Sidebar extends Component {
	componentDidMount() {
		this.props.getPlaylistsRequest()
	}

	render() {
		return (
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
					{!!this.props.playlists.data.length ? (
						this.props.playlists.data.map(playlist => (
							<GroupItem key={playlist.id}>{playlist.title}</GroupItem>
						))
					) : (
						<Loading />
					)}
				</Group>
				<NewPlayList>
					<img src={add_playlist} alt="Adicionar nova playlist" />
					Nova playlist
				</NewPlayList>
			</Container>
		)
	}
}

const mapStateToProps = state => ({
	playlists: state.playlists,
})

const mapDispatchToProps = dispatch =>
	bindActionCreators(PlaylistsAction, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Sidebar)
