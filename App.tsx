import React, {} from 'react'
import {Provider} from 'react-redux'
import { store, persistor } from 'src/store'
import { PersistGate } from 'redux-persist/integration/react'
import Main from 'src/components/Main'
import { useKeepAwake } from '@sayem314/react-native-keep-awake'

const App : React.FC = () => {
	useKeepAwake()
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Main/>
			</PersistGate>
		</Provider>
	)
}

export default App