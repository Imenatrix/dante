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
		title : 'Week',
		cards : [
			{
				id : 1,
				title : 'Monday',
				endTime : new Date(),
				tasks : [
					{
						id : 1,
						title : 'Code',
						timeFlex : 1
					},
					{
						id : 2,
						title : 'Game',
						timeFlex : 1
					},
					{
						id : 3,
						title : 'Read',
						timeFlex : 1
					}
				]
			},
			{
				id : 2,
				title : 'Tuesday',
				endTime : new Date(),
				tasks : [
					{
						id : 1,
						title : 'Code',
						timeFlex : 1
					},
					{
						id : 2,
						title : 'Game',
						timeFlex : 1
					},
					{
						id : 3,
						title : 'Read',
						timeFlex : 1
					}
				]
			},
			{
				id : 3,
				title : 'Wednesday',
				endTime : new Date(),
				tasks : [
					{
						id : 1,
						title : 'Code',
						timeFlex : 1
					},
					{
						id : 2,
						title : 'Game',
						timeFlex : 1
					},
					{
						id : 3,
						title : 'Read',
						timeFlex : 1
					}
				]
			},
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
					{cardBoxes[0].cards.map((card) => (
						<Card key={card.id} title={card.title}>
							{card.tasks.map((task) => (
								<TaskPod key={task.id} title={task.title} counter={<Counter value={task.timeFlex}/>}/>
							))}
						</Card>
					))}
				</CardBox>
				<SideMenu onBackgroundPress={this.toggleMenu} open={this.state.open}>
					{cardBoxes.map((cardBox) => (
						<CardBoxPod key={cardBox.id} title={cardBox.title}/>
					))}
				</SideMenu>
			</View>
		)
	}

}

export default App