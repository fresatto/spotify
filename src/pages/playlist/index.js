import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Header, SongList, SongItem } from './styles'
import ClockIcon from '../../assets/images/clock.svg'
import PlusIcon from '../../assets/images/plus.svg'

import Loading from '../../components/Loading'

import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails'
import { Creators as PlayerActions } from '../../store/ducks/player'
class Playlist extends Component {
	state = {
		selectedSong: null,
	}

	componentDidMount() {
		this.loadPlaylistDetails()
	}

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.id !== this.props.match.params.id) {
			this.loadPlaylistDetails()
		}
	}

	loadPlaylistDetails = () => {
		console.log('Props Match', this.props.match.params)
		const { id } = this.props.match.params
		this.props.getPlaylistDetailsRequest(id)
	}

	renderPlaylistDetails = () => {
		const { data } = this.props.playlistDetails

		return (
			<Container>
				<Header>
					<img src={data.thumbnail} alt={data.title} />
					<div>
						<span>PLAYLIST</span>
						<h1>{data.title}</h1>
						<p>
							{!!data.songs
								? `${data.songs.length} ${
										data.songs.length > 1 ? 'músicas' : 'música'
								  }`
								: 'Nenhuma música.'}
						</p>
						<button>Play</button>
					</div>
				</Header>
				<SongList cellPadding={0} cellSpacing={0}>
					<thead>
						<tr>
							<th />
							<th>Titulo</th>
							<th>Artista</th>
							<th>Albúm</th>
							<th>
								<img src={ClockIcon} alt="Duração" />
							</th>
						</tr>
					</thead>
					<tbody>
						{!!data.songs ? (
							data.songs.map(song => (
								<SongItem
									key={song.id}
									onDoubleClick={() =>
										this.props.loadSong(song, data.songs)
									}
									onClick={() => this.setState({ selectedSong: song })}
									selected={
										!!this.state.selectedSong &&
										song.id === this.state.selectedSong.id
									}
									playing={
										!!this.props.currentSong &&
										this.props.currentSong.id === song.id
									}
								>
									<td>
										<img src={PlusIcon} alt="Adicionar" />
									</td>
									<td>{song.title}</td>
									<td>{song.author}</td>
									<td>{song.album}</td>
									<td>3:22</td>
								</SongItem>
							))
						) : (
							<tr colSpan={5}>
								<td>Nenhúma música.</td>
							</tr>
						)}
					</tbody>
				</SongList>
			</Container>
		)
	}

	render() {
		return this.props.playlistDetails.loading ? (
			<Container loading>
				<Loading />
			</Container>
		) : (
			this.renderPlaylistDetails()
		)
	}
}

const mapStateToProps = state => ({
	playlistDetails: state.playlistDetails,
	currentSong: state.player.currentSong,
})

const mapDispatchToProps = dispatch =>
	bindActionCreators({ ...PlaylistDetailsActions, ...PlayerActions }, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Playlist)
