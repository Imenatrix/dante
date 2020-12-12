import { createSlice } from '@reduxjs/toolkit'

const modeSlice = createSlice({
	name : 'mode',
	initialState : 'go',
	reducers : {
		go(state) {
			state = 'go'
		},
		edit(state) {
			state = 'edit'
		}
	}
})

export const { go, edit } = modeSlice.actions
export default modeSlice.reducer