import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Header, SongList } from './styles'
import ClockIcon from '../../assets/images/clock.svg'
import PlusIcon from '../../assets/images/plus.svg'

import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails'

class Playlist extends Component {
	componentDidMount() {
		this.loadPlaylistDetails()
	}

	loadPlaylistDetails = () => {
		console.log('Props Match', this.props.match.params)
		const { id } = this.props.match.params
		this.props.getPlaylistDetailsRequest(id)
	}

	renderTable = () => {
		const { data } = this.props.playlistDetails;

		return data.songs.map(song => (
			<tr key={song.id}>
				<td>
					<img src={PlusIcon} alt="plus" />
				</td>
				<td>{song.title}</td>
				<td>{song.author}</td>
				<td>{song.album}</td>
				<td>3:23</td>
			</tr>
		))
	}

	
	render() {
		const { data } = this.props.playlistDetails
		return (
			<Container>
				<Header>
					<img src={data.thumbnail} alt={data.title} />

					<div>
						<span>{data.description}</span>
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
						{!!data.songs ? 
							this.renderTable()
						 : (<tr colSpan={5}>Nenhúma música.</tr>)}
					</tbody>
				</SongList>
			</Container>
		)
	}
}

const mapStateToProps = state => ({
	playlistDetails: state.playlistDetails,
})

const mapDispatchToProps = dispatch =>
	bindActionCreators(PlaylistDetailsActions, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Playlist)
