import React, {
	useEffect,
	useLayoutEffect,
	useState
} from 'react'

import {
	BackHandler,
	GestureResponderEvent,
	View,
	Text,
	StyleSheet
} from 'react-native'

import {
	useDispatch,
	useSelector,
} from 'react-redux'

import { RootState } from 'src/reducers'
import CardBoxHeader from 'src/components/CardBoxHeader'
import CardBox from 'src/components/CardBox'
import CardBoxPodDrawer from 'src/components/CardBoxPodDrawer'
import AppHeader from 'src/components/AppHeader'


const Main : React.FC = () => {

	const dispatch = useDispatch()

	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
	const [selectedCardBox, setSelectedCardBox] = useState(0)
	const cardBoxes = useSelector((store : RootState) => store.cardBoxes)

	useEffect(() => {
		const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)
		return () => backHandler.remove()
	})

	useLayoutEffect(() => {
		if (cardBoxes.find(x => x.id == selectedCardBox) == undefined) {
			setSelectedCardBox(cardBoxes[0] ? cardBoxes[0].id : 0)
		}
	}, [cardBoxes])

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
			{cardBox != undefined ? <>
				<CardBoxHeader onBtnSideMenuPress={toggleMenu} cardBox={cardBox}/>
				<CardBox cardBox={cardBox}/>
			</> : <>
				<AppHeader onBtnSideMenuPress={toggleMenu}/>
				<Text style={styles.txtPlaceholder}>
					You have no card boxes,
					{'\n'}please create one.
				</Text>
			</> }
			<CardBoxPodDrawer
				open={isSideMenuOpen}
				onSelect={selectCardBox}
				onBackgroundPress={toggleMenu}/>
		</View>
	)

}

const styles = StyleSheet.create({
	txtPlaceholder : {
		color : 'gray',
		textAlign : 'center',
		textAlignVertical : 'center',
		flex : 1
	}
})

export default Main