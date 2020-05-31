import React from 'react'
import TasksList from './TasksList'
import { deleteActionCreator, checkActionCreator } from './../../redux/tasks_reducer'

let TasksListContainter = (props) => {
	
	let state = props.store.getState()
	
	let deleteTask = (i) => {
		props.store.dispatch(deleteActionCreator(i))
	}

	let checkTask = (i) => {
		props.store.dispatch(checkActionCreator(i))
	}

	return (
		<TasksList 	Tasks = { state.tasks.Tasks } 
					deleteTask = { deleteTask }
					checkTask={checkTask} />
	)
}

export default TasksListContainter
