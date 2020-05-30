let ADD = "ADD-TASK"

let init_state = {
	Field: 'hello'
}

export let addTaskActionCreator = (text) => {
	return {
			type: ADD,
			text: text
		}
}

let newTask_reduce = (state = init_state, action) => {
	switch (action.type) {
		case ADD:
			let newTask = {
				message: action.text
			}
			state.Tasks.unshift(newTask)
			return state
		default:
			return state		
	}
}

export default newTask_reduce
