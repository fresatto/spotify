import React from 'react'

// Slider styles
import 'rc-slider/assets/index.css'
import Slider from 'rc-slider'

// Styles
import {
	Container,
	Current,
	Volume,
	Controls,
	CurrentMusicControls,
} from './styles'

// Images
import shuffle from '../../assets/images/shuffle.svg'
import backward from '../../assets/images/backward.svg'
import play from '../../assets/images/play.svg'
// import pause from '../../assets/images/pause.svg'
import forward from '../../assets/images/forward.svg'
import volume from '../../assets/images/volume.svg'
import repeat from '../../assets/images/repeat.svg'

const Player = () => (
	<Container>
		<Current>
			<img
				src="https://upload.wikimedia.org/wikipedia/pt/thumb/b/bf/Red_Hot_Chili_Peppers_-_Blood_Sugar_Sex_Magik.jpg/220px-Red_Hot_Chili_Peppers_-_Blood_Sugar_Sex_Magik.jpg"
				alt="red hot"
			/>
			<div>
				<span>Titulo da musica</span>
				<small>Artista</small>
			</div>
		</Current>
		<Controls>
			<CurrentMusicControls>
				<button><img src={shuffle} alt="Aleatório" /></button>
				<button><img src={backward} alt="Voltar" /></button>
				<button><img src={play} alt="Play" /></button>
				<button><img src={forward} alt="Avançar" /></button>
				<button><img src={repeat} alt="Repitir" /></button>
			</CurrentMusicControls>
			<Slider
				railStyle={{
					background: '#404040',
					borderRadius: 10,
				}}
				trackStyle={{ background: '#fff' }}
				handleStyle={{
					cursor: 'pointer',
					outline: 0,
					border: 'none',
				}}
			/>
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

export default Player
