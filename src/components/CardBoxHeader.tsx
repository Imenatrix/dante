import React, { useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/reducers'
import { remove as removeCardBox, setTitle, CardBox } from 'src/reducers/cardBoxesSlice'
import { remove as removeCard } from 'src/reducers/cardsSlice'

interface Props {
	cardBox : CardBox
	onBtnSideMenuPress : (event : GestureResponderEvent) => void
}

const CardBoxHeader : React.FC<Props> = (props) => {

	const dispatch = useDispatch()

	const [edit, setEdit] = useState(false)
	const cardBox = props.cardBox
	const cardIds = useSelector((state : RootState) => state.cards)
						.filter(card => card.cardBoxId == cardBox.id)
						.map(card => card.id)

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
		dispatch(removeCardBox({
			id : cardBox.id
		}))
	}

	function toggleEdit() {
		setEdit(!edit)
	}
	
	return (
		<View style={styles.container}>
			{edit ?
				<Pressable onPress={onBtnRemovePress} style={styles.btn}>
					<Icon name='close' style={styles.icon}/>
				</Pressable>
			:
				<Pressable style={styles.btnMenu} onPress={props.onBtnSideMenuPress}>
					<Icon style={styles.iconBtnMenu} name='menu'/>
				</Pressable>
			}
			<TextInput onChange={handleTxtTitleChange} style={styles.txtTitle}>
				{cardBox.title}
			</TextInput>
			<Pressable onPress={toggleEdit} style={styles.btn}>
				<Icon style={styles.icon} name={edit ? 'check' : 'edit'}/>
			</Pressable>
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
	},
	icon : {
		fontSize : 30
	},
	iconBtnMenu : {
		fontSize : 50,
	},
	txtTitle : {
		fontSize : 25,
		flex : 1,
		textAlign : 'center'
	},
})