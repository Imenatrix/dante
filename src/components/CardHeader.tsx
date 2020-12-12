import React, {
	useState
} from 'react'
import {
	View,
	Text,
	Pressable,
	TextInput,
	StyleSheet,
	NativeSyntheticEvent,
	TextInputChangeEventData
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import TimePicker from '@react-native-community/datetimepicker'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/reducers'
import { Card, remove as removeCard, setTitle, setEndTime } from 'src/reducers/cardsSlice'
import { remove as removeTask } from 'src/reducers/tasksSlice'

interface Props {
	card : Card
}

const CardHeader : React.FC<Props> = (props) => {

	const dispatch = useDispatch()
	
	const card = props.card
	const taskIds = useSelector((state : RootState) => state.tasks)
		.filter(task => task.cardId == card.id)
		.map(task => task.id)
	const [isTimePickerOpen, setIsTimePickerOpen] = useState(false)

	function handleTxtTitleChange(event : NativeSyntheticEvent<TextInputChangeEventData>) {
		dispatch(setTitle({
			id : card.id,
			value : event.nativeEvent.text
		}))
	}

	function handleTimePickerChange(event : Event, date? : Date) {
		setIsTimePickerOpen(false)
		if (date != undefined) {
			dispatch(setEndTime({
				id : card.id,
				date : date.getTime()
			}))
		}
	}

	function onBtnRemovePress() {
		taskIds.forEach(id => {
			dispatch(removeTask({
				id : id
			}))
		})
		dispatch(removeCard({
			id : card.id
		}))
	}

	return (
		<View style={styles.container}>
			{isTimePickerOpen &&
				<TimePicker onChange={handleTimePickerChange} value={new Date(card.endTime)} mode='time'/>
			}
			<Pressable onPress={() => setIsTimePickerOpen(true)} style={styles.btnEndTime}>
				<Icon style={styles.iconBtnEndTime} name='schedule'/>
			</Pressable>
			<View style={styles.headerText}>
				<TextInput onChange={handleTxtTitleChange} style={styles.txtTitle}>
					{card.title}
				</TextInput>
				<Text style={styles.txtEndTime}>
					Ends at: {new Date(card.endTime).toLocaleTimeString().slice(0, -3)}
				</Text>
			</View>
			<Pressable onPress={onBtnRemovePress} style={styles.btnEndTime}>
				<Icon style={styles.iconBtnEndTime} name='close'/>
			</Pressable>
		</View>
	)
}

export default CardHeader

const styles = StyleSheet.create({
	container : {
		flexDirection : 'row',
		alignItems : 'center',
		padding : 10,
		backgroundColor : 'gray'
	},
	btnEndTime : {
		width : 50,
		height : 50,
		backgroundColor : 'green',
		borderRadius : 25,
		justifyContent : 'center',
		alignItems : 'center'
	},
	iconBtnEndTime : {
		fontSize : 35
	},
	headerText : {
		flex : 1,
		alignItems : 'center'
	},
	txtTitle : {
		fontSize : 30,
	},
	txtEndTime : {
		marginTop : -10,
	},
})