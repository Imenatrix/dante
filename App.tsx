import React from 'react'
import {

} from 'react-native'
import Counter from 'src/components/Counter'
import TaskPod from 'src/components/TaskPod'

class App extends React.Component {

	render() {
		const counter = <Counter/>
		return (
			<TaskPod counter={<Counter/>}/>
		)
	}

}

export default App