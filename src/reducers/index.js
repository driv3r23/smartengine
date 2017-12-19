import { combineReducers } from 'redux'

import table from '../components/Table/reducer'
import filter from '../components/Filter/reducer'

export default combineReducers({
    table,
    filter
})