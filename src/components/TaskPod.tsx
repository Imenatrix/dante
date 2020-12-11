import React from 'react'
import {
	View,
	TextInput,
	StyleSheet
} from 'react-native'
import { useDispatch } from 'react-redux'
import Counter from 'src/components/Counter'
import { remove, addToTimeFlex, Task } from 'src/reducers/tasksSlice'

interface Props {
	task : Task
}

const TaskPod : React.FC<Props> = (props) => {

	const dispatch = useDispatch()

	const task = props.task

	function add() {
		dispatch(addToTimeFlex({
			id : task.id,
			ammount : 1
		}))
	}

	function sub() {
		if (task.timeFlex > 1) {
			dispatch(addToTimeFlex({
				id : task.id,
				ammount : -1
			}))
		}
		else {
			dispatch(remove({
				id : task.id
			}))
		}
	}
 
	return (
		<View style={styles.container}>
			<TextInput style={styles.txtTitle}>{task.title}</TextInput>
			<Counter add={add} sub={sub} value={task.timeFlex}/>
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