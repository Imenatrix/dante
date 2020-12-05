import React from 'react'
import {
	View,
	Pressable,
	Text,
	StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Counter extends React.Component {

	render() {
		return (
			<View style={styles.container}>
				<Pressable style={styles.btn}>
					<Icon style={styles.iconBtn} name='remove'/>
				</Pressable>
				<Text style={styles.txtValue}>
					0
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