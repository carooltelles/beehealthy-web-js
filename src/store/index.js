import { routerMiddleware, connectRouter } from 'connected-react-router'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import reducers from '../reducers'
import history from '../routes/history'
import sagas from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware, logger, routerMiddleware(history)]

const store = createStore(connectRouter(history)(reducers), applyMiddleware(...middlewares))

sagaMiddleware.run(sagas)

export default store
