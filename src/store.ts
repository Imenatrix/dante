import { configureStore } from '@reduxjs/toolkit'
import cardBoxesReducer from 'src/reducers/cardBoxesSlice'

export default configureStore({
	reducer : {
		cardBoxes : cardBoxesReducer
	}
})