import { configureStore } from '@reduxjs/toolkit'
import rootReducer from 'src/reducers'

export default configureStore({
	reducer : rootReducer
})