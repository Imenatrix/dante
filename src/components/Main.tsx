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
import AppHeader from 'src/components/AppHeader'
import CardBox from 'src/components/CardBox'
import CardBoxPodDrawer from 'src/components/CardBoxPodDrawer'
import { add } from 'src/reducers/cardBoxesSlice'


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

	if (cardBoxes.length == 0) {
		dispatch(add({}))
	}
	if (cardBoxes.find(x => x.id == selectedCardBox) == undefined) {
		setSelectedCardBox(0)
	}
	const cardBox = cardBoxes.find(x => x.id == selectedCardBox)!

	return (
		<View style={{flex : 1}}>
			<AppHeader onBtnSideMenuPress={toggleMenu} cardBox={cardBox}/>
			<CardBox cardBox={cardBox}/>
			<CardBoxPodDrawer
				open={isSideMenuOpen}
				onSelect={selectCardBox}
				onBackgroundPress={toggleMenu}/>
		</View>
	)

}

export default Main