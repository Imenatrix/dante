import React from 'react'
import {
	View
} from 'react-native'
import Counter from 'src/components/Counter'
import TaskPod from 'src/components/TaskPod'
import Card from 'src/components/Card'
import CardBox from 'src/components/CardBox'
import SideMenu from 'src/components/SideMenu'

class App extends React.Component {

	render() {
		return (
			<View style={{flex : 1}}>
				<SideMenu/>
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
			</View>
		)
	}

}

export default App