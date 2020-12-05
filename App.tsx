import React from 'react'
import {

} from 'react-native'
import Counter from 'src/components/Counter'
import TaskPod from 'src/components/TaskPod'
import Card from 'src/components/Card'
import CardBox from 'src/components/CardBox'

class App extends React.Component {

	render() {
		return (
			<CardBox>
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
			</CardBox>
		)
	}

}

export default App