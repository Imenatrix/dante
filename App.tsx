import React from 'react'
import {
	View
} from 'react-native'
import Counter from 'src/components/Counter'
import TaskPod from 'src/components/TaskPod'
import Card from 'src/components/Card'
import CardBox from 'src/components/CardBox'
import SideMenu from 'src/components/SideMenu'

interface State {
	open : boolean
}

class App extends React.Component<{}, State> {

	constructor(props : {}) {
		super(props)
		this.state = {
			open : false
		}	
	}

	toggleMenu = () => {
		this.setState((state) => ({
			open : !state.open
		}))
	}

	render() {
		return (
			<View style={{flex : 1}}>
				<CardBox onBtnSideMenuPress={this.toggleMenu}>
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
				<SideMenu onBackgroundPress={this.toggleMenu} open={this.state.open}/>
			</View>
		)
	}

}

export default App