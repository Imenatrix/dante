import React from 'react'
import {
	Pressable,
	StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class NewPod extends React.Component {

	render() {
		return (
			<Pressable style={styles.container}>
				<Icon style={styles.icon} name='add'/>
			</Pressable>
		)
	}

}

const styles = StyleSheet.create({
	container : {
		height : 60,
		margin : 5,
		justifyContent : 'center',
		alignItems : 'center',
		backgroundColor : 'gainsboro',
		borderRadius : 5
	},
	icon : {
		fontSize : 50,
		color : 'white'
	}
})