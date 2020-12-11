import React from 'react'
import {
	View,
	Pressable,
	TextInput,
	StyleSheet,
	GestureResponderEvent,
	NativeSyntheticEvent,
	TextInputChangeEventData
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useDispatch } from 'react-redux'
import { setTitle, CardBox } from 'src/reducers/cardBoxesSlice'

interface Props {
	cardBox? : CardBox
	onBtnSideMenuPress : (event : GestureResponderEvent) => void
}

const AppHeader : React.FC<Props> = (props) => {

	const dispatch = useDispatch()

	const cardBox = props.cardBox

	function handleTxtTitleChange(event : NativeSyntheticEvent<TextInputChangeEventData>) {
		if (cardBox != undefined) {
			dispatch(setTitle({
				id : cardBox.id,
				value : event.nativeEvent.text
			}))
		}
	}
	
	return (
		<View style={styles.container}>
			<Pressable onPress={props.onBtnSideMenuPress} style={styles.btnSideMenu}>
				<Icon style={styles.iconBtnSideMenu} name='menu'/>
			</Pressable>
			<TextInput onChange={handleTxtTitleChange} style={styles.txtTitle}>
				{cardBox?.title}
			</TextInput>
			<Pressable style={styles.btnConfirm}>
				<Icon style={styles.iconBtnConfirm} name='check'/>
			</Pressable>
		</View>
	)
}

export default AppHeader

const styles = StyleSheet.create({
	container : {
		flexDirection : 'row',
		alignItems : 'center',
		backgroundColor : 'gray',
		justifyContent : 'space-between',
		padding : 5
	},
	btnSideMenu : {

	},
	iconBtnSideMenu : {
		fontSize : 40
	},
	btnConfirm : {
		backgroundColor : 'green',
		borderRadius : 99999
	},
	iconBtnConfirm : {
		fontSize : 40
	},
	txtTitle : {
		fontSize : 25
	},
})