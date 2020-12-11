import React, {
	useState
} from 'react'
import {
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
	Dimensions,
	NativeSyntheticEvent,
	TextInputChangeEventData
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'src/reducers'
import Icon from 'react-native-vector-icons/MaterialIcons'
import TaskPod from 'src/components/TaskPod'
import NewPod from 'src/components/NewPod'
import { Card as ICard, setTitle, setEndTime } from 'src/reducers/cardsSlice'
import { add } from 'src/reducers/tasksSlice'
import TimePicker from '@react-native-community/datetimepicker'

interface Props {
	card : ICard
}

const Card : React.FC<Props> = (props) => {

	const dispatch = useDispatch()

	const card = props.card
	const tasks = useSelector((state : RootState) => state.tasks).filter(task => task.cardId == card.id)

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

	return (
		<View style={styles.container}>
			{isTimePickerOpen &&
				<TimePicker onChange={handleTimePickerChange} value={new Date(card.endTime)} mode='time'/>
			}
			<View style={styles.header}>
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
			</View>
			<ScrollView style={styles.podDrawer}>
				{tasks.map((task) => (
					<TaskPod key={task.id} task={task}/>
				))}
				<NewPod onPress={() => dispatch(add({cardId : card.id}))}/>
			</ScrollView>
		</View>
	)

}

export default Card

const styles = StyleSheet.create({
	container : {
		flex : 1,
		width : Dimensions.get('window').width - 40,
		marginVertical : 10,
		marginLeft : 10,
		borderRadius : 5,
		overflow : 'hidden'
	},
	header : {
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
		marginRight : 50,
		alignItems : 'center'
	},
	txtTitle : {
		fontSize : 30,
	},
	txtEndTime : {
		marginTop : -10,
	},
	podDrawer : {
		paddingVertical : 5,
		backgroundColor : 'lightgray'
	}
})