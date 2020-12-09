import React from 'react'
import {
	View,
	TextInput,
	StyleSheet
} from 'react-native'

interface Props {
	counter : Element,
	title : string
}

const TaskPod : React.FC<Props> = (props) => {

	const title = props.title

	return (
		<View style={styles.container}>
			<TextInput style={styles.txtTitle}>{title}</TextInput>
			{props.counter}
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