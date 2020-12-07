import React from 'react'
import {
	BackHandler,
	NativeEventSubscription,
	View
} from 'react-native'
import Counter from 'src/components/Counter'
import TaskPod from 'src/components/TaskPod'
import Card from 'src/components/Card'
import CardBox from 'src/components/CardBox'
import SideMenu from 'src/components/SideMenu'
import CardBoxPod from 'src/components/CardBoxPod'

const cardBoxes = [
	{
		id : 1,
		name : 'Week',
		cards : [
			{
				id : 1,
				name : 'Monday',
				endTime : new Date(),
				tasks : [
					{
						name : 'Code',
						timeFlex : 1
					},
					{
						name : 'Game',
						timeFlex : 1
					},
					{
						name : 'Read',
						timeFlex : 1
					}
				]
			},
			{
				id : 2,
				name : 'Tuesday',
				endTime : new Date(),
				tasks : [
					{
						name : 'Code',
						timeFlex : 1
					},
					{
						name : 'Game',
						timeFlex : 1
					},
					{
						name : 'Read',
						timeFlex : 1
					}
				]
			},
			{
				id : 3,
				name : 'Wednesday',
				endTime : new Date(),
				tasks : [
					{
						name : 'Code',
						timeFlex : 1
					},
					{
						name : 'Game',
						timeFlex : 1
					},
					{
						name : 'Read',
						timeFlex : 1
					}
				]
			}
		]
	}
]

interface State {
	open : boolean
}

class App extends React.Component<{}, State> {

	backHandler? : NativeEventSubscription

	constructor(props : {}) {
		super(props)
		this.backHandler = undefined
		this.state = {
			open : false
		}
	}

	componentDidMount() {
		this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.backAction)
	}

	componentWillUnmount() {
		this.backHandler?.remove()
	}

	backAction = () => {
		if (this.state.open) {
			this.toggleMenu()
			return true
		}
		return false
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
				<SideMenu onBackgroundPress={this.toggleMenu} open={this.state.open}>
					<CardBoxPod/>
				</SideMenu>
			</View>
		)
	}

}

export default App