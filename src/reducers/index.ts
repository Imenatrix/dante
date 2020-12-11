import {combineReducers} from '@reduxjs/toolkit'
import tasksReducer from './tasksSlice'
import cardsReducer from './cardsSlice'
import cardBoxesReducer from './cardBoxesSlice'

const rootReducer = combineReducers({
	tasks : tasksReducer,
	cards : cardsReducer,
	cardBoxes : cardBoxesReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer