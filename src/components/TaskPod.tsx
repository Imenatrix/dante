import React from 'react'
import {
	View,
	TextInput,
	StyleSheet
} from 'react-native'
import Counter from 'src/components/Counter'
import { Task } from 'src/reducers/tasksSlice'

interface Props {
	task : Task
}

const TaskPod : React.FC<Props> = (props) => {

	const task = props.task

	return (
		<View style={styles.container}>
			<TextInput style={styles.txtTitle}>{task.title}</TextInput>
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