import React, { Component } from 'react'
import { Container, Title, List, Playlist } from './styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Loading from '../../components/Loading'
import { Creators as PlaylistActions } from '../../store/ducks/playlists'

class Browse extends Component {
	componentDidMount() {
		this.props.getPlaylistsRequest()
	}

	render() {
		const { playlists } = this.props
		return (
			<Container>
				<Title>Navegar</Title>
				{!!playlists.data.length ? (
					<List>
						{playlists.data.map(playlist => (
							<Playlist
								key={playlist.id}
								to={`/playlists/${playlist.id}`}
							>
								<img src={playlist.thumbnail} alt={playlist.title} />
								<strong>{playlist.title}</strong>
								<p>{playlist.description}</p>
							</Playlist>
						))}
					</List>
				) : (
					<Loading />
				)}
			</Container>
		)
	}
}

const mapStateToProps = state => ({
	playlists: state.playlists,
})

const mapDispatchToProps = dispatch =>
	bindActionCreators(PlaylistActions, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Browse)
