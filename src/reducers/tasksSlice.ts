import { createSlice } from '@reduxjs/toolkit'

export interface Task {
	id : number,
	cardId : number,
	title : string,
	timeFlex : number,
	complete : boolean
}

const tasksSlice = createSlice({
	name : 'tasks',
	initialState : new Array<Task>(),
	reducers : {
		add(state, action) {
			const id = state.length != 0 ? state.map((task : Task) => task.id).sort((a : number, b : number) => a - b).reverse()[0] + 1 : 0
			const task : Task = {
				id : id,
				title : 'New Task',
				cardId : action.payload.cardId,
				timeFlex : 1,
				complete : false
			}
			state.push(task)
		},
		remove(state, action) {
			const index = state.indexOf(state.find(task => task.id == action.payload.id)!)
			state.splice(index, 1)
		},
		setTitle(state, action) {
			state.find(task => task.id == action.payload.id)!.title = action.payload.value
		},
		addToTimeFlex(state, action) {
			state.find(task => task.id == action.payload.id)!.timeFlex += action.payload.ammount
		}
	}
})

export const { add, remove, setTitle, addToTimeFlex } = tasksSlice.actions
export default tasksSlice.reducer