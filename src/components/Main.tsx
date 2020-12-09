import React, {
	useEffect,
	useState
} from 'react'

import {
	BackHandler,
	GestureResponderEvent,
	View
} from 'react-native'

import {
	useDispatch,
	useSelector,
} from 'react-redux'

import { RootState } from 'src/reducers'
import { addCardBox } from 'src/reducers/cardBoxesSlice'
import Counter from 'src/components/Counter'
import TaskPod from 'src/components/TaskPod'
import Card from 'src/components/Card'
import CardBox from 'src/components/CardBox'
import CardBoxPodDrawer from 'src/components/CardBoxPodDrawer'
import CardBoxPod from 'src/components/CardBoxPod'
import NewPod from 'src/components/NewPod'
import NewCard from 'src/components/NewCard'

const Main : React.FC = () => {

	const dispatch = useDispatch()

	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
	const [selectedCardBox, setSelectedCardBox] = useState(0)
	const cardBoxes = useSelector((store : RootState) => store.cardBoxes)

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

	function selectCardBox(event : GestureResponderEvent, id : number) {
		setSelectedCardBox(id)
		toggleMenu()
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
			<CardBoxPodDrawer open={isSideMenuOpen} onBackgroundPress={toggleMenu} onSelect={selectCardBox}/>
		</View>
	)

}

export default Main