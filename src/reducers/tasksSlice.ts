import { createSlice } from '@reduxjs/toolkit'

export interface Task {
	id : number,
	cardId : number,
	title : string,
	timeFlex : number
}

const tasksSlice = createSlice({
	name : 'tasks',
	initialState : new Array<Task>({id : 0, title : 'Code', cardId : 0, timeFlex : 1}),
	reducers : {
		add(state, action) {
			const id = state.length != 0 ? state.map((task : Task) => task.id).sort().reverse()[0] + 1 : 0
			const task : Task = {
				id : id,
				title : 'New Task',
				cardId : action.payload.cardId,
				timeFlex : 1
			}
			state.push(task)
		},
		addToTimeFlex(state, action) {
			state[action.payload.id].timeFlex += action.payload.ammount
		}
	}
})

export const { add, addToTimeFlex } = tasksSlice.actions
export default tasksSlice.reducer