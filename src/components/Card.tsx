import React, { useState } from 'react'
import {
	ScrollView,
	StyleSheet,
	View,
	Dimensions,
	Pressable
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'src/reducers'
import TaskPod from 'src/components/TaskPod'
import NewPod from 'src/components/NewPod'
import { Card as ICard } from 'src/reducers/cardsSlice'
import { add } from 'src/reducers/tasksSlice'
import CardHeader from 'src/components/CardHeader'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CompletionWarning from 'src/components/CompletionWarning'

interface Props {
	card : ICard
}

const Card : React.FC<Props> = (props) => {

	const dispatch = useDispatch()

	const card = props.card
	const [showModal, setShowModal] = useState(false)
	const mode = useSelector((state : RootState) => state.mode.value)
	const tasks = useSelector((state : RootState) => state.tasks).filter(task => task.cardId == card.id)
	const taskPods = tasks.map((task, index) => (
						<TaskPod color={index % 2 == 0 ? 'lightgray' : 'white'} key={task.id} task={task}/>
					))

	const currentTask = tasks[0]
	return (
		<View style={styles.container}>
			<CompletionWarning task={currentTask} visible={showModal} onBtnPausePress={() => setShowModal(false)}/>
			<CardHeader card={card}/>
			{mode === 'edit' &&
				<ScrollView style={styles.podDrawer}>
					{taskPods}
					<NewPod onPress={() => dispatch(add({cardId : card.id}))}/>
				</ScrollView>
			}
			{mode === 'go' && <>
				<View style={styles.podDisplay}>
					{taskPods}
				</View>
				<Pressable style={styles.btnGo} onPress={() => setShowModal(true)}>
					<Icon style={styles.iconBtnGo} name='play-arrow'/>
				</Pressable>
			</> }
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
	podDrawer : {
		paddingVertical : 5,
		backgroundColor : 'lightgray'
	},
	podDisplay : {
		backgroundColor : 'lightgray',
		flex : 1
	},
	btnGo : {
		height : 60,
		backgroundColor : 'green',
		justifyContent : 'center',
		alignItems : 'center'
	},
	iconBtnGo : {
		fontSize : 50
	}
})