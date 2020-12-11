import React from 'react'
import {
	View,
	Pressable,
	TextInput,
	StyleSheet,
	GestureResponderEvent
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

interface Props {
	title : string
	onBtnSideMenuPress : (event : GestureResponderEvent) => void
}

const AppHeader : React.FC<Props> = (props) => {
	return (
		<View style={styles.container}>
			<Pressable onPress={props.onBtnSideMenuPress} style={styles.btnSideMenu}>
				<Icon style={styles.iconBtnSideMenu} name='menu'/>
			</Pressable>
			<TextInput style={styles.txtTitle}>
				{props.title}
			</TextInput>
			<Pressable style={styles.btnConfirm}>
				<Icon style={styles.iconBtnConfirm} name='check'/>
			</Pressable>
		</View>
	)
}

export default AppHeader

const styles = StyleSheet.create({
	container : {
		flexDirection : 'row',
		alignItems : 'center',
		backgroundColor : 'gray',
		justifyContent : 'space-between',
		padding : 5
	},
	btnSideMenu : {

	},
	iconBtnSideMenu : {
		fontSize : 40
	},
	btnConfirm : {
		backgroundColor : 'green',
		borderRadius : 99999
	},
	iconBtnConfirm : {
		fontSize : 40
	},
	txtTitle : {
		fontSize : 25
	},
})