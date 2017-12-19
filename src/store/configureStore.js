import { createStore, applyMiddleware, compose } from 'redux'
import reducers from '../reducers'

export default (state) => {
    const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    return createStore(
        reducers,
        state,
        enhancer(
            applyMiddleware()
        )
    )
}