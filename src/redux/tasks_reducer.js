let DELETE = "DELETE-TASK"
let ADD = "ADD-TASK"
let UPDATE_FIELD = "UPDATE-FIELD"
let SHOW = "SHOW"
let CHECK = "CHECK"

let init_state = {
	showNewTask: false,
	Field: '',
	Tasks: [
		{ message: 'do a new task', show: true }
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

export let checkActionCreator = (i) => {
	return {
		type: CHECK,
		i: i
	}
}

let tasks_reduse = (state = init_state, action) => {
	switch (action.type) {
		case ADD:
			let newTask = {
				message: action.text,
				show: false
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
		case CHECK:
			if (state.Tasks[action.i].show === true) {
				state.Tasks[action.i].show = false
			} else {
				state.Tasks[action.i].show = true
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
