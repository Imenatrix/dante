import { createSlice } from '@reduxjs/toolkit'

export interface CardBox {
	id : number,
	title : string
}

const cardBoxesSlice = createSlice({
	name : 'cardBoxes',
	initialState : new Array<CardBox>(),
	reducers : {
		add(state, action) {
			const id = state.length != 0 ? state.map((cardBox : CardBox) => cardBox.id).sort((a : number, b : number) => a - b).reverse()[0] + 1 : 0
			const cardBox : CardBox = {
				id : id,
				title : 'New Card Box'
			}
			state.push(cardBox)
		},
		remove(state, action) {
			const index = state.indexOf(state.find(cardBox => cardBox.id == action.payload.id)!)
			state.splice(index, 1)
		},
		setTitle(state, action) {
			state.find(cardBox => cardBox.id == action.payload.id)!.title = action.payload.value
		}
	}
})

export const { add, remove, setTitle } = cardBoxesSlice.actions
export default cardBoxesSlice.reducer