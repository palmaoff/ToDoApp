import React from 'react'
import Header from './Header'
import { showNewTaskActionCreater } from '../../redux/tasks_reducer'

const HeaderContainer = (props) => {

	let showNewTask = () => {
		props.store.dispatch(showNewTaskActionCreater())
	}

	return (
		<Header showNewTask={showNewTask} />
	)
}

export default HeaderContainer