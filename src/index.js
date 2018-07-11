import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import intl from 'intl'

import store from 'store/index'

import App from './App'

import './reset.css'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render( 
    <Provider store = { store } >
        <App />
    </Provider>, 
    document.getElementById('root')
)

registerServiceWorker()