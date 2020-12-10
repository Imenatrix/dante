import { createSlice } from '@reduxjs/toolkit'

interface Task {
	id : number,
	title : string,
	timeFlex : number
}

interface Card {
	id : number,
	title : string,
	tasks : Task[]
}

interface CardBox {
	id : number,
	title : string,
	cards : Card[]
}

const initialState : CardBox[] = [{
	id : 0,
	title : 'Week',
	cards : []
}]

export const cardBoxesSlice = createSlice({
	name : 'cardBoxes',
	initialState : initialState,
	reducers : {
		addCardBox : (state) => {
			const id = state.map(cardBox => cardBox.id).sort().reverse()[0] + 1
			const cardBox : CardBox = {
				id : id,
				title : 'Wook',
				cards : []
			}
			state.push(cardBox)
		}
	}
})

export const {addCardBox} = cardBoxesSlice.actions
export default cardBoxesSlice.reducer