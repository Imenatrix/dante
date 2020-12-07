import React from 'react'
import {
	View,
	Text,
	StyleSheet
} from 'react-native'

export default class CardBoxPod extends React.Component {

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.txtTitle}>Week</Text>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	container : {
		height : 60,
		margin : 5,
		borderRadius : 5,
		backgroundColor : 'lightgray',
		justifyContent : 'center',
		padding : 10
	},
	txtTitle : {
		fontSize : 20
	}
})