import { createSlice } from '@reduxjs/toolkit'

export const cardBoxesSlice = createSlice({
	name : 'cardBoxes',
	initialState : {
		cardBoxes : [{
			id : 0,
			title : 'coiso',
			cards : []
		}]
	},
	reducers : {
		addCardBox : (state) => {
			const id = state.cardBoxes.map(cardBox => cardBox.id).sort().reverse()[0] + 1
			state.cardBoxes.push({
				id : id,
				title : 'treco',
				cards : []
			})
		}
	}
})

export const {addCardBox} = cardBoxesSlice.actions
export default cardBoxesSlice.reducer