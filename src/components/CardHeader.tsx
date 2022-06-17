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
	TextInputChangeEventData,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import TimePicker from '@react-native-community/datetimepicker'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/reducers'
import { Card, remove as removeCard, setTitle, setEndTime } from 'src/reducers/cardsSlice'
import { remove as removeTask, reset} from 'src/reducers/tasksSlice'
import colors from 'src/styles/colors'

interface Props {
	card : Card
}

const CardHeader : React.FC<Props> = (props) => {

	const dispatch = useDispatch()
	
	const card = props.card
	const mode = useSelector((state : RootState) => state.mode.value)
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
				value : {
					hour : date.getHours(),
					minute : date.getMinutes(),
				}
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

	function resetTasks() {
		taskIds.forEach(id => {
			dispatch(reset({
				id : id
			}))
		})
	}

	return (
		<View style={styles.container}>
			{isTimePickerOpen &&
				<TimePicker onChange={handleTimePickerChange} value={new Date(new Date().setHours(card.endTime.hour, card.endTime.minute))} mode='time'/>
			}
			{mode === 'edit' ? 
				<Pressable onPress={() => setIsTimePickerOpen(true)} style={styles.btnEndTime}>
					<Icon style={styles.iconBtnEndTime} name='schedule'/>
				</Pressable>
			:
				<Pressable onPress={resetTasks} style={styles.btnEndTime}>
					<Icon style={styles.iconBtnEndTime} name='refresh'/>
				</Pressable>
			}
			<View style={styles.headerText}>
				<TextInput editable={mode === 'edit'} onChange={handleTxtTitleChange} style={styles.txtTitle}>
					{card.title}
				</TextInput>
				<Text style={styles.txtEndTime}>
					Ends at: {stringfy(card.endTime)}
				</Text>
			</View>
			{mode === 'edit' ?
				<Pressable onPress={onBtnRemovePress} style={styles.btnEndTime}>
					<Icon style={styles.iconBtnEndTime} name='close'/>
				</Pressable>
			:
				<View style={{width : 50}}/>
			}
		</View>
	)
}

export default CardHeader

const styles = StyleSheet.create({
	container : {
		flexDirection : 'row',
		alignItems : 'center',
		padding : 10,
		backgroundColor : colors.primary
	},
	btnEndTime : {
		width : 50,
		height : 50,
		backgroundColor : colors.accent,
		borderRadius : 25,
		justifyContent : 'center',
		alignItems : 'center'
	},
	iconBtnEndTime : {
		fontSize : 25
	},
	headerText : {
		flex : 1,
		alignItems : 'center'
	},
	txtTitle : {
		fontSize : 30,
		color : 'black'
	},
	txtEndTime : {
		marginTop : -10,
	},
})

function stringfy(endTime : {hour : number, minute : number}) {
	const zeroH = endTime.hour < 10 ? '0' : ''
	const zeroM = endTime.minute < 10 ? '0' : ''
	return zeroH + endTime.hour + ':' + zeroM + endTime.minute
}