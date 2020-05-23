let DELETE = "DELETE-TASK"
let init_state = {
	Tasks: [
		{ message: 'first task' },
		{ message: 'second task' }
	]
}

export let deleteActionCreator = (i) => {
	return {
		type: DELETE,
		i: i
	}
}

let tasks_reduse = (state = init_state, action) => {
	switch (action.type) {
		case DELETE:
			state.Tasks.splice(action.i, 1)
			return state
		default:
			return state		
	}
}

export default tasks_reduse
