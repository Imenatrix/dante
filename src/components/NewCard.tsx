import React from 'react'
import {
	Pressable,
	StyleSheet,
	Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class NewCard extends React.Component {

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
		flex : 1,
		width : Dimensions.get('window').width - 40,
		marginVertical : 10,
		marginLeft : 10,
		borderRadius : 5,
		overflow : 'hidden',
		backgroundColor : 'gainsboro',
		justifyContent : 'center',
		alignItems : 'center'
	},
	icon : {
		fontSize : 100,
		color : 'white'
	}
})
