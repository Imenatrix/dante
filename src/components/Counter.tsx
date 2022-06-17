import React from 'react'
import {
	View,
	Pressable,
	Text,
	StyleSheet,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useDispatch } from 'react-redux'
import { remove, addToTimeFlex, Task } from 'src/reducers/tasksSlice'
import colors from 'src/styles/colors'

interface Props {
	task : Task
}

const Counter : React.FC<Props> = (props) => {

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
			<Pressable onPress={sub} style={styles.btn}>
				<Icon style={styles.iconBtn} name={task.timeFlex > 1 ? 'remove' : 'close'}/>
			</Pressable>
			<Text style={styles.txtValue}>
				{task.timeFlex}
			</Text>
			<Pressable onPress={add} style={styles.btn}>
				<Icon style={styles.iconBtn} name='add'/>
			</Pressable>
		</View>
	)

}

export default Counter

const styles = StyleSheet.create({
	container : {
		flexDirection : 'row'
	},
	btn : {
		width : 50,
		height : 50,
		backgroundColor : colors.accent,
		borderRadius : 25,
		justifyContent : 'center',
		alignItems : 'center'
	},
	txtValue : {
		width : 50,
		height : 50,
		textAlign : 'center',
		textAlignVertical : 'center',
		fontSize : 20
	},
	iconBtn : {
		fontSize : 25
	}
})