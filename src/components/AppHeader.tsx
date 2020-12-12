import React from 'react'
import {
	View,
	Pressable,
	StyleSheet,
	Text,
	GestureResponderEvent
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

interface Props {
	onBtnSideMenuPress : (event : GestureResponderEvent) => void
}

const AppHeader : React.FC<Props> = (props) => {
	return (
		<View style={styles.container}>
			<Pressable onPress={props.onBtnSideMenuPress}>
				<Icon style={styles.icon} name='menu'/>
			</Pressable>
			<Text style={styles.txtTitle}>Welcome to Dante!</Text>
		</View>
	)
}

export default AppHeader

const styles = StyleSheet.create({
	container : {
		flexDirection : 'row',
		alignItems : 'center',
		backgroundColor : 'gray',
		padding : 10,
		height : 70
	},
	icon : {
		fontSize : 40
	},
	txtTitle : {
		fontSize : 23,
		marginLeft : 10
	}
})