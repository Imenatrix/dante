import React from 'react'
import {
	View,
	Pressable,
	StyleSheet,
	Text,
	GestureResponderEvent
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from 'src/styles/colors'

interface Props {
	onBtnSideMenuPress : (event : GestureResponderEvent) => void
}

const AppHeader : React.FC<Props> = (props) => {
	return (
		<View style={styles.container}>
			<Pressable style={styles.btn} onPress={props.onBtnSideMenuPress}>
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
		backgroundColor : colors.primary,
		padding : 10,
	},
	btn : {
		width : 50,
		height : 50
	},
	icon : {
		fontSize : 50
	},
	txtTitle : {
		fontSize : 23,
		marginLeft : 10
	}
})