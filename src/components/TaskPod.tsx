import React from 'react'
import {
	View,
	TextInput,
	StyleSheet,
	NativeSyntheticEvent,
	TextInputChangeEventData
} from 'react-native'
import { useDispatch } from 'react-redux'
import Counter from 'src/components/Counter'
import { Task, setTitle } from 'src/reducers/tasksSlice'

interface Props {
	task : Task
}

const TaskPod : React.FC<Props> = (props) => {

	const dispatch = useDispatch()

	const task = props.task

	function handleTxtTileChange(event : NativeSyntheticEvent<TextInputChangeEventData>) {
		dispatch(setTitle({
			id : task.id,
			value : event.nativeEvent.text
		}))
	}

	return (
		<View style={styles.container}>
			<TextInput onChange={handleTxtTileChange} style={styles.txtTitle}>{task.title}</TextInput>
			<Counter task={task}/>
		</View>
	)

}

export default TaskPod

const styles = StyleSheet.create({
	container : {
		margin : 5,
		flexDirection : 'row',
		alignItems : 'center',
		justifyContent : 'space-between',
		backgroundColor : 'gray',
		padding : 5,
		borderRadius : 5
	},
	txtTitle : {
		fontSize : 20
	}
})