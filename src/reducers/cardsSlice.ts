import { createSlice } from '@reduxjs/toolkit'

export interface Card {
	id : number,
	cardBoxId : number,
	title : string,
}

const cardsSlicer = createSlice({
	name : 'cards',
	initialState : new Array<Card>({id : 0, cardBoxId : 0, title : 'Monday'}),
	reducers : {
		add(state, action) {
			const id = state.length != 0 ? state.map((card : Card) => card.id).sort().reverse()[0] + 1 : 0
			const card : Card = {
				id : id,
				cardBoxId : action.payload.cardBoxId,
				title : 'New Card'
			}
			state.push(card)
		},
		setTitle(state, action) {
			state.find(card => card.id == action.payload.id)!.title = action.payload.value
		}
	}
})

export const { add, setTitle } = cardsSlicer.actions
export default cardsSlicer.reducer