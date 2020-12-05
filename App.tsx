import React from 'react'
import {
	View
} from 'react-native'
import Counter from 'src/components/Counter'
import TaskPod from 'src/components/TaskPod'
import Card from 'src/components/Card'

class App extends React.Component {

	render() {
		return (
			<Card>
				<TaskPod counter={<Counter/>}/>
				<TaskPod counter={<Counter/>}/>
				<TaskPod counter={<Counter/>}/>
				<TaskPod counter={<Counter/>}/>
				<TaskPod counter={<Counter/>}/>
				<TaskPod counter={<Counter/>}/>
				<TaskPod counter={<Counter/>}/>
				<TaskPod counter={<Counter/>}/>
				<TaskPod counter={<Counter/>}/>
				<TaskPod counter={<Counter/>}/>
			</Card>
		)
	}

}

export default App