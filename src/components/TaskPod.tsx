import React from 'react'
import {
	View,
	TextInput,
	StyleSheet
} from 'react-native'

interface Props {
	counter : Element
}

export default class TaskPod extends React.Component<Props> {

	render() {
		return (
			<View style={styles.container}>
				<TextInput style={styles.txtTitle}>Game</TextInput>
				{this.props.counter}
			</View>
		)
	}

}

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