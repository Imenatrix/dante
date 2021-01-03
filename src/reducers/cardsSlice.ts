import { createSlice } from '@reduxjs/toolkit'

export interface Card {
	id : number,
	cardBoxId : number,
	endTime : {
		hour : number,
		minute : number
	}
	title : string,
}

const cardsSlicer = createSlice({
	name : 'cards',
	initialState : new Array<Card>(),
	reducers : {
		add(state, action) {
			const id = state.length != 0 ? state.map((card : Card) => card.id).sort((a : number, b : number) => a - b).reverse()[0] + 1 : 0
			const card : Card = {
				id : id,
				endTime : {
					hour : 0,
					minute : 0
				},
				cardBoxId : action.payload.cardBoxId,
				title : 'New Card'
			}
			state.push(card)
		},
		remove(state, action) {
			const index = state.indexOf(state.find(card => card.id == action.payload.id)!)
			state.splice(index, 1)
		},
		setTitle(state, action) {
			state.find(card => card.id == action.payload.id)!.title = action.payload.value
		},
		setEndTime(state, action) {
			state.find(card => card.id == action.payload.id)!.endTime = action.payload.value
		}
	}
})

export const { add, remove, setTitle, setEndTime } = cardsSlicer.actions
export default cardsSlicer.reducer