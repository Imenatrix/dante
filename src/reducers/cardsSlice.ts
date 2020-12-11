import { createSlice } from '@reduxjs/toolkit'

export interface Card {
	id : number,
	cardBoxId : number,
	endTime : number
	title : string,
}

const cardsSlicer = createSlice({
	name : 'cards',
	initialState : new Array<Card>(),
	reducers : {
		add(state, action) {
			const id = state.length != 0 ? state.map((card : Card) => card.id).sort().reverse()[0] + 1 : 0
			const card : Card = {
				id : id,
				endTime : new Date(0).setHours(0),
				cardBoxId : action.payload.cardBoxId,
				title : 'New Card'
			}
			state.push(card)
		},
		setTitle(state, action) {
			state.find(card => card.id == action.payload.id)!.title = action.payload.value
		},
		setEndTime(state, action) {
			const id = action.payload.id
			const date = new Date(action.payload.date)
			const endTime = new Date(state.find(card => card.id == id)!.endTime)
			endTime.setHours(date.getHours(), date.getMinutes())
			state.find(card => card.id == id)!.endTime = endTime.getTime()
		}
	}
})

export const { add, setTitle, setEndTime } = cardsSlicer.actions
export default cardsSlicer.reducer