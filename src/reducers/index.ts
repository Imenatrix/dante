import {combineReducers} from '@reduxjs/toolkit'
import tasksReducer from './tasksSlice'
import cardsReducer from './cardsSlice'
import cardBoxesReducer from './cardBoxesSlice'
import modeReducer from './modeSlice'

const rootReducer = combineReducers({
	mode : modeReducer,
	tasks : tasksReducer,
	cards : cardsReducer,
	cardBoxes : cardBoxesReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer