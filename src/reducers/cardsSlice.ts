import { createSlice } from '@reduxjs/toolkit'

class EndTime {

	hour : number
	minute : number

	constructor() {
		this.hour = 0
		this.minute = 0
	}
	
	toString() {
		const zeroH = this.hour < 10 ? '0' : ''
		const zeroM = this.minute < 10 ? '0' : ''
		return zeroH + this.hour + ':' + zeroM + this.minute
	}
}

export interface Card {
	id : number,
	cardBoxId : number,
	endTime : EndTime
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
				endTime : new EndTime(),
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
			const endTime = state.find(card => card.id == action.payload.id)!.endTime
			endTime.hour = action.payload.hour
			endTime.minute = action.payload.minute
		}
	}
})

export const { add, remove, setTitle, setEndTime } = cardsSlicer.actions
export default cardsSlicer.reducer