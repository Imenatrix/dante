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
import Counter from 'src/components/Counter'
import TaskPod from 'src/components/TaskPod'
import Card from 'src/components/Card'
import CardBox from 'src/components/CardBox'
import CardBoxPodDrawer from 'src/components/CardBoxPodDrawer'
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
	const cards = useSelector((state : RootState) => state.cards).filter((card) => card.cardBoxId == selectedCardBox)

	return (
		<View style={{flex : 1}}>
			{cardBox != undefined &&
				<CardBox title={cardBox.title} onBtnSideMenuPress={toggleMenu}>
					{cards.map((card) => (
						<Card key={card.id} card={card}/>
					))}
					<NewCard/>
				</CardBox>
			}
			<CardBoxPodDrawer
				open={isSideMenuOpen}
				onSelect={selectCardBox}
				onBackgroundPress={toggleMenu}/>
		</View>
	)

}

export default Main