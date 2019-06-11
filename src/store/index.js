import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import Reactotron from '../config/reactotron'

// reducers
import reducers from './ducks'
// Saga
import rootSaga from './sagas'

// create our new saga monitor
const sagaMonitor = Reactotron.createSagaMonitor()

const middlewares = []

const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

middlewares.push(sagaMiddleware)
const store = createStore(
	reducers,
	compose(
		applyMiddleware(...middlewares),
		Reactotron.createEnhancer()
	)
)

sagaMiddleware.run(rootSaga)

export default store
