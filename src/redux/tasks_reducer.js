let DELETE = "DELETE-TASK"
let ADD = "ADD-TASK"
let UPDATE_FIELD = "UPDATE-FIELD"
let SHOW = "SHOW"

let init_state = {
	showNewTask: true,
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

export let showNewTaskActionCreater = () => {
	return {
		type: SHOW
	}
}

export let updateTextActionCreator = (text) => {
	return {
		type: UPDATE_FIELD,
		text: text
	}
}

export let addTaskActionCreator = (text) => {
	return {
		type: ADD,
		text: text
	}
}

let tasks_reduse = (state = init_state, action) => {
	switch (action.type) {
		case ADD:
			let newTask = {
				message: action.text
			}
			if (action.text != '') {
				state.Tasks.push(newTask)
			}
			return state
		case UPDATE_FIELD:
			if (action.text != "\n") {
				state.Field = action.text
			}
			return state
		case SHOW:
			if (state.showNewTask === true) {
				state.showNewTask = false
			}
			else {
				state.showNewTask = true
			}
			return state
		case DELETE:
			state.Tasks.splice(action.i, 1)
			return state
		default:
			return state
	}
}

export default tasks_reduse
