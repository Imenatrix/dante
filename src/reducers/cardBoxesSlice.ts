import { createSlice } from '@reduxjs/toolkit'

export const cardBoxesSlice = createSlice({
	name : 'cardBoxes',
	initialState : [{
		id : 0,
		title : 'Week',
		cards : []
	}],
	reducers : {
		addCardBox : (state) => {
			const id = state.map(cardBox => cardBox.id).sort().reverse()[0] + 1
			state.push({
				id : id,
				title : 'treco',
				cards : []
			})
		}
	}
})

export const {addCardBox} = cardBoxesSlice.actions
export default cardBoxesSlice.reducer