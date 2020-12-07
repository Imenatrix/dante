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
import NewPod from 'src/components/NewPod'

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
	},
	{
		id : 2,
		title : 'Wook',
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
	isSideMenuOpen : boolean
	selectedCardBox : number
}

class App extends React.Component<{}, State> {

	backHandler? : NativeEventSubscription

	constructor(props : {}) {
		super(props)
		this.backHandler = undefined
		this.state = {
			selectedCardBox : 1,
			isSideMenuOpen : false
		}
	}

	componentDidMount() {
		this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.backAction)
	}

	componentWillUnmount() {
		this.backHandler?.remove()
	}

	backAction = () => {
		if (this.state.isSideMenuOpen) {
			this.toggleMenu()
			return true
		}
		return false
	}

	toggleMenu = () => {
		this.setState((state) => ({
			isSideMenuOpen : !state.isSideMenuOpen
		}))
	}

	selectCardBox = (id : number) => {
		this.setState({
			selectedCardBox : id
		})
		this.toggleMenu()
	}

	render() {

		const isSideMenuOpen = this.state.isSideMenuOpen
		const cardBox = cardBoxes.find(x => x.id == this.state.selectedCardBox)

		return (
			<View style={{flex : 1}}>
				<CardBox title={cardBox.title} onBtnSideMenuPress={this.toggleMenu}>
					{cardBox.cards.map((card) => (
						<Card key={card.id} title={card.title}>
							{card.tasks.map((task) => (
								<TaskPod key={task.id} title={task.title} counter={<Counter value={task.timeFlex}/>}/>
							))}
							<NewPod/>
						</Card>
					))}
				</CardBox>
				<SideMenu onBackgroundPress={this.toggleMenu} open={isSideMenuOpen}>
					{cardBoxes.map((cardBox) => (
						<CardBoxPod onPress={() => this.selectCardBox(cardBox.id)} key={cardBox.id} title={cardBox.title}/>
					))}
					<NewPod/>
				</SideMenu>
			</View>
		)
	}

}

export default App