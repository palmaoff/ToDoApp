import React from 'react'
import css from './Task.module.css'
import { Button, FormCheck } from 'react-bootstrap'

const Task = (props) => {

	let onDeleteTask = () => {
		props.deleteTask(props.i)
	}

	let onCheck = () => {
		props.checkTask(props.i)
	}

	return (
		<div className={css.todo_list}>
			{props.show ? 
				<FormCheck className = { css.check_box }
					onClick={onCheck}
					checked /> :
				<FormCheck className = { css.check_box }
					onClick={onCheck} />}
			<span className={css.text}>{ props.message }</span>
			<Button size="sm" variant="danger" className = { css.btn } onClick={onDeleteTask}>delete</Button>
		</div>
	)
}

export default Task