import { createSlice } from '@reduxjs/toolkit'

export interface CardBox {
	id : number,
	title : string
}

const cardBoxesSlice = createSlice({
	name : 'cardBoxes',
	initialState : new Array<CardBox>({id : 0, title : 'Week'}),
	reducers : {
		add(state, action) {
			const id = state.length != 0 ? state.map((cardBox : CardBox) => cardBox.id).sort().reverse()[0] + 1 : 0
			const cardBox : CardBox = {
				id : id,
				title : 'New Card Box'
			}
			state.push(cardBox)
		}
	}
})

export const { add } = cardBoxesSlice.actions
export default cardBoxesSlice.reducer