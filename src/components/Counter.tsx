import React from 'react'
import {
	View,
	Pressable,
	Text,
	StyleSheet,
	GestureResponderEvent
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

interface Props {
	value : number,
	add : (event : GestureResponderEvent) => void,
	sub : (event : GestureResponderEvent) => void
}

const Counter : React.FC<Props> = (props) => {

	const value = props.value

	return (
		<View style={styles.container}>
			<Pressable onPress={props.sub} style={styles.btn}>
				<Icon style={styles.iconBtn} name='remove'/>
			</Pressable>
			<Text style={styles.txtValue}>
				{value}
			</Text>
			<Pressable onPress={props.add} style={styles.btn}>
				<Icon style={styles.iconBtn} name='add'/>
			</Pressable>
		</View>
	)

}

export default Counter

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