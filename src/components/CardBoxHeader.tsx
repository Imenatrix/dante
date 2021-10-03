import React, { useState } from 'react'
import {
	View,
	Alert,
	Pressable,
	TextInput,
	StyleSheet,
	GestureResponderEvent,
	NativeSyntheticEvent,
	TextInputChangeEventData
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/reducers'
import { remove as removeCardBox, setTitle, CardBox } from 'src/reducers/cardBoxesSlice'
import { remove as removeCard } from 'src/reducers/cardsSlice'
import { remove as removeTask } from 'src/reducers/tasksSlice'
import { go, edit } from 'src/reducers/modeSlice'

const icons = new Map([
	['go', 'edit'],
	['edit', 'check']
])

interface Props {
	cardBox : CardBox
	onBtnSideMenuPress : (event : GestureResponderEvent) => void
}

const CardBoxHeader : React.FC<Props> = (props) => {

	const dispatch = useDispatch()

	const mode = useSelector((state : RootState) => state.mode.value)
	const cardBox = props.cardBox
	const cardIds = useSelector((state : RootState) => state.cards)
						.filter(card => card.cardBoxId == cardBox.id)
						.map(card => card.id)
	const taskIds = useSelector((state : RootState) => state.tasks)
						.filter(task => task.cardId in cardIds)
						.map(task => task.id)

	function handleTxtTitleChange(event : NativeSyntheticEvent<TextInputChangeEventData>) {
		dispatch(setTitle({
			id : cardBox.id,
			value : event.nativeEvent.text
		}))
	}

	function onBtnRemovePress() {
		cardIds.forEach(id => {
			dispatch(removeCard({
				id : id
			}))
		})
		taskIds.forEach(id => {
			dispatch(removeTask({
				id : id
			}))
		})
		dispatch(removeCardBox({
			id : cardBox.id
		}))
		dispatch(go())
	}

	function toggleEdit() {
		if (mode === 'go') {
			dispatch(edit())
		}
		else if (mode === 'edit') {
			dispatch(go())
		}
	}

	function showAlert() {
		return Alert.alert(
			'Warning!',
			'Are you sure you want to delete this card box? This action cannot be undone',
			[
				{
					text : 'No',
				},
				{
					text : 'Yes',
					onPress : onBtnRemovePress,
				}
			],
			{cancelable : false}
		)
	}
	
	return (
		<View style={styles.container}>
			{mode === 'go' ?
				<Pressable style={styles.btnMenu} onPress={props.onBtnSideMenuPress}>
					<Icon style={styles.iconBtnMenu} name='menu'/>
				</Pressable>
			:
				<Pressable onPress={toggleEdit} style={styles.btn}>
					<Icon style={styles.icon} name={icons.get(mode)!}/>
				</Pressable>
			}
			<TextInput editable={mode === 'edit'} onChange={handleTxtTitleChange} style={styles.txtTitle}>
				{cardBox.title}
			</TextInput>
			{mode === 'go' ?
				<Pressable onPress={toggleEdit} style={styles.btn}>
					<Icon style={styles.icon} name={icons.get(mode)!}/>
				</Pressable>
			:
				<Pressable onPress={showAlert} style={styles.btn}>
					<Icon name='close' style={styles.icon}/>
				</Pressable>
			}
		</View>
	)
}

export default CardBoxHeader

const styles = StyleSheet.create({
	container : {
		flexDirection : 'row',
		alignItems : 'center',
		backgroundColor : 'gray',
		justifyContent : 'space-between',
		padding : 10,
	},
	btn : {
		width : 50,
		height : 50,
		borderRadius : 25,
		backgroundColor : 'green',
		justifyContent : 'center',
		alignItems : 'center'
	},
	btnMenu : {
		width : 50,
		height : 50,
		justifyContent : 'center',
		alignItems : 'center'
	},
	icon : {
		fontSize : 25
	},
	iconBtnMenu : {
		fontSize : 50,
	},
	txtTitle : {
		fontSize : 25,
		flex : 1,
		textAlign : 'center',
		color : 'black'
	},
})