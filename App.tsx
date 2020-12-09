import React, {} from 'react'
import {Provider} from 'react-redux'
import store from 'src/store'
import Main from 'src/components/Main'

const App : React.FC = () => {
	return (
		<Provider store={store}>
			<Main/>
		</Provider>
	)
}

export default App