import { combineReducers } from 'redux'

// Reducers
import playlists from './playlists'
import playlistDetails from './playlistDetails'

const reducers = combineReducers({
	playlists,
	playlistDetails,
})

export default reducers