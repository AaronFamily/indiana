import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from 'reducers/index'

const middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)

const store = createStoreWithMiddleware(reducers);

export default store