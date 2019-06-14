import React, { Fragment } from 'react'

// Slider styles
import 'rc-slider/assets/index.css'
import Slider from 'rc-slider'
import Sound from 'react-sound'

import { bindActionCreators } from 'redux'
import { Creators as PlayerActions } from '../../store/ducks/player'

// Styles
import {
	Container,
	Current,
	Volume,
	Controls,
	CurrentMusicControls,
	Time,
} from './styles'

// Images
import shuffle from '../../assets/images/shuffle.svg'
import backward from '../../assets/images/backward.svg'
import PlayIcon from '../../assets/images/play.svg'
import PauseIcon from '../../assets/images/pause.svg'
import forward from '../../assets/images/forward.svg'
import volume from '../../assets/images/volume.svg'
import repeat from '../../assets/images/repeat.svg'

import { connect } from 'react-redux'

const Player = ({
	player,
	play,
	pause,
	prev,
	next,
	playing,
	position,
	duration,
}) => (
	<Container>
		{!!player.currentSong && (
			<Sound
				url={player.currentSong.file}
				playStatus={player.status}
				onPlaying={playing}
			/>
		)}
		<Current>
			{player.currentSong && (
				<Fragment>
					<img
						src={player.currentSong.thumbnail}
						alt={player.currentSong.title}
					/>
					<div>
						<span>{player.currentSong.title}</span>
						<small>{player.currentSong.author}</small>
					</div>
				</Fragment>
			)}
		</Current>
		<Controls>
			<CurrentMusicControls>
				<button>
					<img src={shuffle} alt="Aleatório" />
				</button>
				<button onClick={prev}>
					<img src={backward} alt="Voltar" />
				</button>
				{!!player.currentSong && player.status === Sound.status.PLAYING ? (
					<button>
						<img src={PauseIcon} alt="Pause" onClick={pause} />
					</button>
				) : (
					<button>
						<img src={PlayIcon} alt="Play" onClick={play} />
					</button>
				)}
				<button onClick={next}>
					<img src={forward} alt="Avançar" />
				</button>
				<button>
					<img src={repeat} alt="Repitir" />
				</button>
			</CurrentMusicControls>
			<Time>
				<span>{position}</span>
				<Slider
					railStyle={{
						background: '#404040',
						borderRadius: 10,
					}}
					trackStyle={{ background: '#1ed760' }}
					handleStyle={{
						cursor: 'pointer',
						outline: 0,
						border: 'none',
					}}
				/>
				<span>{duration}</span>
			</Time>
		</Controls>
		<Volume>
			<img src={volume} alt="volume" />
			<Slider
				railStyle={{ background: '#404040', borderRadius: 10 }}
				trackStyle={{ background: '#fff' }}
				handleStyle={{ display: 'none' }}
				// value={100}
			/>
		</Volume>
	</Container>
)

function msToTime(duration) {
	let seconds = parseInt((duration / 1000) % 60, 10)
	let minutes = parseInt((duration / (1000 * 60)) % 60, 10)

	seconds = seconds < 10 ? `0${seconds}` : seconds

	return `${minutes}:${seconds}`
}

const mapStateToProps = state => ({
	player: state.player,
	position: msToTime(state.player.position),
	duration: msToTime(state.player.duration),
})

const mapDispatchToProps = dispatch =>
	bindActionCreators(PlayerActions, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Player)
