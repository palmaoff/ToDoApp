import React from 'react'
import { Button, FormCheck, Form } from 'react-bootstrap'
import NewTask from './NewTask'
import { addTaskActionCreator } from '../../redux/newTask_reducer'
import { updateTextActionCreator } from '../../redux/tasks_reducer'

const NewTaskContainer = (props) => {

	let state = props.store.getState()

	let addTask = (text) => {
		props.store.dispatch(addTaskActionCreator(text))
	}

	let updateField = (text) => {
		props.store.dispatch(updateTextActionCreator(text))
	}

	return (
		<NewTask addTask={addTask}
			updateField={updateField}
			field={state.tasks.Field} />
	)
}

export default NewTaskContainer