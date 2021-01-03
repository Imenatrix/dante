import React, { useEffect, useRef } from 'react'
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
import { Task, setTitle, finish, setElapsedTime } from 'src/reducers/tasksSlice'

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
	const completion = useRef(new Animated.Value(0)).current

	function handleTxtTileChange(event : NativeSyntheticEvent<TextInputChangeEventData>) {
		dispatch(setTitle({
			id : task.id,
			value : event.nativeEvent.text
		}))
	}

	function start() {
		Animated.timing(completion, {
			useNativeDriver : false,
			toValue: 1,
			duration: 5000,
			easing : Easing.linear
		}).start(() => {
			onFinishedTask(task)
			dispatch(finish({
				id : task.id
			}))
		});
	}

	useEffect(() => {
		if (!task.running && !task.complete) {
			completion.setValue(0)
		}
	}, [task.running, task.complete])

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
	}, [])

	useEffect(() => {
		if (task.running) {
			start()
		}
	}, [task.running])

	return (
		<View style={[styles.container, mode === 'edit' ? {margin : 5, borderRadius : 5} : {flex : task.timeFlex, backgroundColor : props.color}]}>
			{mode === 'go' &&
				<>
					{(task.complete || task.running) &&
					<View style={styles.completionMeterContainer}>
						<Animated.View style={[styles.completionTimer, {flex : completion}]}/>
					</View>
					}
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