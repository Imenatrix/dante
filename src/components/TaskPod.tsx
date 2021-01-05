import React, { useEffect, useRef, useState } from 'react'
import {
	View,
	TextInput,
	StyleSheet,
	Text,
	NativeSyntheticEvent,
	TextInputChangeEventData,
	Animated,
	Easing,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Counter from 'src/components/Counter'
import { RootState } from 'src/reducers'
import { Task, setTitle, finish, setElapsedTime, pause } from 'src/reducers/tasksSlice'

interface Props {
	task : Task,
	color : string,
	onFinishedTask : (task : Task) => void
}

const TaskPod : React.FC<Props> = (props) => {

	const dispatch = useDispatch()

	const task = props.task
	const onFinishedTask = props.onFinishedTask
	const mode = useSelector((state : RootState) => state.mode.value)
	const endTime = useSelector((state : RootState) => state.cards.find(card => card.id == task.cardId))!.endTime
	const totalTimeFlex = useSelector((state : RootState) => state.tasks.filter(sister => sister.cardId == task.cardId && !sister.complete)).map(sister => sister.timeFlex * (1 - sister.elapsedTime)).reduce((a, b) => a + b, 0)
	const completion = useRef(new Animated.Value(task.elapsedTime)).current
	
	function handleTxtTileChange(event : NativeSyntheticEvent<TextInputChangeEventData>) {
		dispatch(setTitle({
			id : task.id,
			value : event.nativeEvent.text
		}))
	}
	
	function start(duration : number) {
		Animated.timing(completion, {
			useNativeDriver : false,
			toValue: 1,
			duration: duration,
			easing : Easing.linear
		}).start(({finished}) => {
			if (finished) {
				onFinishedTask(task)
				dispatch(finish({
					id : task.id
				}))
			}
			else {
				dispatch(pause({
					id : task.id
				}))
			}
		});
	}

	useEffect(() => {
		if (task.elapsedTime == 0) {
			completion.setValue(0)
		}
	}, [task.elapsedTime])
	
	useEffect(() => {
		completion.addListener(() => {
			dispatch(setElapsedTime({
				id : task.id,
				value : (completion as any)._value
			}))
		})
		return () => {
			completion.removeAllListeners()
		}
	})
	
	useEffect(() => {
		if (task.running) {
			let coiso = new Date().setHours(
				endTime.hour,
				endTime.minute,
				0,
				0
			)
			if (coiso - Date.now() <= 0) {
				const coisoDate = new Date(coiso)
				coisoDate.setDate(coisoDate.getDate() + 1)
				coiso = coisoDate.getTime()
			}
			const duration = (coiso - Date.now()) * (task.timeFlex * (1 - task.elapsedTime) / totalTimeFlex)
			start(duration)
		}
		else {
			completion.setValue(task.elapsedTime)
		}
	}, [task.running])

	return (
		<View style={[styles.container, mode === 'edit' ? {margin : 5, borderRadius : 5} : {flex : task.timeFlex, backgroundColor : props.color}]}>
			{mode === 'go' &&
				<>
					<View style={styles.completionMeterContainer}>
						<Animated.View style={[styles.completionTimer, {flex : completion}]}/>
					</View>
					<Text style={styles.txtTitle} adjustsFontSizeToFit>{task.title}</Text>
				</>
			}
			{mode === 'edit' && <>
				<TextInput onChange={handleTxtTileChange} style={styles.txtTitle}>{task.title}</TextInput>
				<Counter task={task}/>
			</>}
		</View>
	)

}

export default TaskPod

const styles = StyleSheet.create({
	container : {
		flexDirection : 'row',
		alignItems : 'center',
		justifyContent : 'space-between',
		backgroundColor : 'gray',
	},
	txtTitle : {
		fontSize : 20,
		marginLeft : 5
	},
	completionMeterContainer : {
		position : 'absolute',
		flexDirection : 'row',
		width : '100%',
		height : '100%'
	},
	completionTimer : {
		backgroundColor : 'yellow'
	}
})