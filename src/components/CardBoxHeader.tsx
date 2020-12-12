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
	
	return (
		<View style={styles.container}>
			<Pressable onPress={props.onBtnSideMenuPress}>
				<Icon style={styles.icon} name='menu'/>
			</Pressable>
			<Pressable onPress={onBtnRemovePress} style={styles.btn}>
				<Icon name='close' style={styles.icon}/>
			</Pressable>
			<TextInput onChange={handleTxtTitleChange} style={styles.txtTitle}>
				{cardBox.title}
			</TextInput>
			<Pressable style={styles.btn}>
				<Icon style={styles.icon} name='check'/>
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
		padding : 5,
		height : 60
	},
	btn : {
		height : '100%',
		aspectRatio : 1,
		borderRadius : 9999999999,
		backgroundColor : 'green',
		justifyContent : 'center',
		alignItems : 'center'
	},
	icon : {
		fontSize : 40
	},
	txtTitle : {
		fontSize : 25,
		flex : 1,
		textAlign : 'center'
	},
})