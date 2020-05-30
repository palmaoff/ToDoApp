import React from 'react'
import TasksList from './TasksList'
import { deleteActionCreator } from './../../redux/tasks_reducer'

let TasksListContainter = (props) => {
	
	let state = props.store.getState()
	
	let deleteTask = (i) => {
		props.store.dispatch(deleteActionCreator(i))
	}

	return (
		<TasksList 	Tasks = { state.tasks.Tasks } 
					deleteTask = { deleteTask } />
	)
}

export default TasksListContainter
