import React, { useEffect, useState } from 'react'
import {
	BackHandler,
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

const App : React.FC = () => {

	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
	const [selectedCardBox, setSelectedCardBox] = useState(0)
	const [cardBoxes, setCardBoxes] = useState([{
		id : 0,
		title : 'Week',
		cards : []
	}])

	useEffect(() => {
		const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)
		return () => backHandler.remove()
	}, [])

	function backAction() {
		if (isSideMenuOpen) {
			toggleMenu()
			return true
		}
		return false
	}

	function toggleMenu() {
		setIsSideMenuOpen(!isSideMenuOpen)
	}

	function selectCardBox(id : number) {
		setSelectedCardBox(id)
		toggleMenu()
	}

	function addCardBox() {
		const id = cardBoxes.map((cardBox : any) => cardBox.id).sort().reverse()[0] + 1
		const newCardBoxes = [...cardBoxes]
		newCardBoxes.push({
			id : id,
			title : 'Wook',
			cards : []
		})
		setCardBoxes(newCardBoxes)
	}

	const cardBox = cardBoxes.find(x => x.id == selectedCardBox)

	return (
		<View style={{flex : 1}}>
			{cardBox != undefined &&
				<CardBox title={cardBox.title} onBtnSideMenuPress={toggleMenu}>
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
			<SideMenu onBackgroundPress={toggleMenu} open={isSideMenuOpen}>
				{cardBoxes.map((cardBox) => (
					<CardBoxPod onPress={() => selectCardBox(cardBox.id)} key={cardBox.id} title={cardBox.title}/>
				))}
				<NewPod onPress={addCardBox}/>
			</SideMenu>
		</View>
	)

}

export default App