import { createStore, applyMiddleware, compose } from 'redux'
import reducers from '../reducers'

export default (state) => {
    const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    return createStore(
        reducers,
        state,
        compose(
            applyMiddleware()
        )
    )
}