import { createSlice } from '@reduxjs/toolkit'

const modeSlice = createSlice({
	name : 'mode',
	initialState : {value : 'go'},
	reducers : {
		go(state) {
			state.value = 'go'
		},
		edit(state) {
			state.value = 'edit'
		}
	}
})

export const { go, edit } = modeSlice.actions
export default modeSlice.reducer