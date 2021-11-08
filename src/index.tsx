import React from 'react'
import ReactDOM from 'react-dom'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import App from 'App'
import './index.css'

import { Provider } from 'react-redux'
import { store } from 'redux/helpers/store'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
