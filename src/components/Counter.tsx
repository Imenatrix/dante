import React from 'react'
import {
	View,
	Pressable,
	Text,
	StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

interface Props {
	value : number
}

export default class Counter extends React.Component<Props> {

	render() {

		const value = this.props.value

		return (
			<View style={styles.container}>
				<Pressable style={styles.btn}>
					<Icon style={styles.iconBtn} name='remove'/>
				</Pressable>
				<Text style={styles.txtValue}>
					{value}
				</Text>
				<Pressable style={styles.btn}>
					<Icon style={styles.iconBtn} name='add'/>
				</Pressable>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	container : {
		flexDirection : 'row'
	},
	btn : {
		width : 50,
		height : 50,
		backgroundColor : 'green',
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