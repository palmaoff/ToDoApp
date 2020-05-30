let DELETE = "DELETE-TASK"
let ADD = "ADD-TASK"
let UPDATE_FIELD = "UPDATE-FIELD"

let init_state = {
	Field: '',
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

export let updateTextActionCreator = (text) => {
	return {
		type: UPDATE_FIELD,
		text: text
	}
}

let tasks_reduse = (state = init_state, action) => {
	switch (action.type) {
		case ADD:
			let newTask = {
				message: action.text
			}
			state.Tasks.unshift(newTask)
			return state
		case UPDATE_FIELD:
			state.Field = action.text
			return state
		case DELETE:
			state.Tasks.splice(action.i, 1)
			return state
		default:
			return state
	}
}

export default tasks_reduse
