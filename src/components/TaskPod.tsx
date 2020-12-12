import React from 'react'
import {
	View,
	TextInput,
	StyleSheet,
	Text,
	NativeSyntheticEvent,
	TextInputChangeEventData
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Counter from 'src/components/Counter'
import { RootState } from 'src/reducers'
import { Task, setTitle } from 'src/reducers/tasksSlice'

interface Props {
	task : Task,
	color : string
}

const TaskPod : React.FC<Props> = (props) => {

	const dispatch = useDispatch()

	const task = props.task
	const mode = useSelector((state : RootState) => state.mode.value)

	function handleTxtTileChange(event : NativeSyntheticEvent<TextInputChangeEventData>) {
		dispatch(setTitle({
			id : task.id,
			value : event.nativeEvent.text
		}))
	}

	return (
		<View style={[styles.container, mode === 'edit' ? {margin : 5, borderRadius : 5} : {flex : task.timeFlex, backgroundColor :props.color}]}>
			{mode === 'go' &&
				<Text style={styles.txtTitle} adjustsFontSizeToFit>{task.title}</Text>
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
		padding : 5
	},
	txtTitle : {
		fontSize : 20
	}
})