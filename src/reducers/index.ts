import {combineReducers} from '@reduxjs/toolkit'
import cardBoxesReducer from './cardBoxesSlice'

const rootReducer = combineReducers({
	cardBoxes : cardBoxesReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer