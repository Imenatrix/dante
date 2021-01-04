import React, { useEffect, useState } from 'react'
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
import { add, pause, start, Task } from 'src/reducers/tasksSlice'
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
	const [running, setRunning] = useState(false)
	const mode = useSelector((state : RootState) => state.mode.value)
	const tasks = useSelector((state : RootState) => state.tasks).filter(task => task.cardId == card.id)
	const taskPods = tasks.map((task, index) => (
						<TaskPod onFinishedTask={onFinishedTask} color={index % 2 == 0 ? 'lightgray' : 'white'} key={task.id} task={task}/>
					))
	const nextTask = tasks.filter(task => !task.complete)[0]
	const [lastFinishedTask, setLastFinishedTask] = useState<Task>()

	useEffect(() => {
		if (nextTask == undefined || !nextTask?.running) {
			setRunning(false)
		}
	}, [nextTask?.running])

	function onFinishedTask(task : Task) {
		setShowModal(true)
		setLastFinishedTask(task)
		setRunning(false)
	}

	function modalContinue() {
		onBtnGoPress()
		setShowModal(false)
	}
	
	function modalPause() {
		setShowModal(false)
	}

	function onBtnGoPress() {
		if (nextTask != undefined) {
			dispatch(start({
				id : nextTask.id
			}))
			setRunning(true)
		}
	}
	
	function onBtnPausePress() {
		if (nextTask != undefined) {
			dispatch(pause({
				id : nextTask.id
			}))
		}
		setRunning(false)
	}

	return (
		<View style={styles.container}>
			<CompletionWarning visible={showModal} task={lastFinishedTask} onBtnContinuePress={modalContinue} onBtnPausePress={modalPause}/>
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
				<Pressable style={styles.btnGo} onPress={running ? onBtnPausePress : onBtnGoPress}>
						<Icon style={styles.iconBtnGo} name={running ? 'pause' : 'play-arrow'}/>
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