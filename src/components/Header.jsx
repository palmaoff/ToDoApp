import React from 'react'
import { Container, Navbar, Dropdown, DropdownButton } from 'react-bootstrap'
import { Button } from 'react-bootstrap';

const Header = () => {
	return (
		<Navbar CollapseOnSelect expand="md" bg="dark" variant="dark">
			<Container>
				<div className="navbar-text">
					<h5>To Do List</h5>
   				</div>
				<Button variant="primary">new task</Button>
			</Container>
		</Navbar>
	)
}

export default Header