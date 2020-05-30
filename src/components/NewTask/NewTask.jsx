import React from 'react'
import { Button, FormCheck, Form } from 'react-bootstrap'
import css from './NewTask.module.css'

const NewTask = (props) => {

	let newText = React.createRef()

	let onAddTask = () => {
		let text = newText.current.value
		props.addTask(text)
		props.updateField('')
	}

	let onUpdateField = () => {
		let text = newText.current.value
		props.updateField(text)
	}

	let enterKey = (event) => {
		if (event.key === "Enter") {
			onAddTask()
		}
	}

	return (
		<Form className={css.form}>
			<Form.Group>
				<Form.Label>New task</Form.Label>
				<Form.Control ref={newText}
					value={props.field}
					onChange={onUpdateField}
					placeholder="Enter what to do"
					onKeyPress={enterKey} />
			</Form.Group>
			<Button variant="primary" onClick={onAddTask}>
				Add
  			</Button>
		</Form>
	)
}

export default NewTask