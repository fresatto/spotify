import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'
const reactotron = Reactotron.configure({ name: 'Spotify Fresattinho' })
	.use(reactotronRedux())
	.use(sagaPlugin())
	.connect()

reactotron.clear()
console.tron = reactotron

export default Reactotron
