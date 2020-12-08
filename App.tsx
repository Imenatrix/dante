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
import NewCard from 'src/components/NewCard'
import CardBoxEntity from 'src/entities/CardBox'

interface State {
	isSideMenuOpen : boolean
	selectedCardBox : number
	cardBoxes : Array<CardBoxEntity>
}

class App extends React.Component<{}, State> {

	backHandler? : NativeEventSubscription

	constructor(props : {}) {
		super(props)
		this.backHandler = undefined
		const cardBox = new CardBoxEntity(0)
		this.state = {
			selectedCardBox : 0,
			isSideMenuOpen : false,
			cardBoxes : [
				cardBox
			]
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
		const cardBoxes = this.state.cardBoxes
		const cardBox = cardBoxes.find(x => x.id == this.state.selectedCardBox)

		return (
			<View style={{flex : 1}}>
				{cardBox != undefined &&
					<CardBox title={cardBox.title} onBtnSideMenuPress={this.toggleMenu}>
						{cardBox.cards.map((card) => (
							<Card key={card.id} title={card.title}>
								{card.tasks.map((task) => (
									<TaskPod key={task.id} title={task.title} counter={<Counter value={task.timeFlex}/>}/>
								))}
								<NewPod/>
							</Card>
						))}
						<NewCard/>
					</CardBox>
				}
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