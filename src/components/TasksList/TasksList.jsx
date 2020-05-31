import React from 'react'
import Task from './OneTask/Task'

let TasksList = (props) => {

	let list = props.Tasks.map(i => <Task	checkTask={props.checkTask}
										message={i.message}
										show={i.show}
										deleteTask = { props.deleteTask }
										i = {props.Tasks.indexOf(i)} />)

	return (
		<div>
			{ list }
		</div>
	)
}

export default TasksList
