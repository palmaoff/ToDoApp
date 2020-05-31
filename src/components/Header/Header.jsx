import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const Header = (props) => {

	let onShow = () => {
		props.showNewTask()
	}

	return (
		<Navbar CollapseOnSelect expand="md" bg="dark" variant="dark">
			<Container>
				<div className="navbar-text">
					<h5>To Do List</h5>
   				</div>
				<Button onClick={onShow} variant="primary">new task</Button>
			</Container>
		</Navbar>
	)
}

export default Header