import { createStore, combineReducers } from 'redux'
import tasks_reduse from './tasks_reducer'

let reducers = combineReducers({
	tasks: tasks_reduse
})

let store = createStore(reducers)

export default store
