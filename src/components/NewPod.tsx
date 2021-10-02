import React from 'react'
import {
	GestureResponderEvent,
	Pressable,
	StyleSheet
} from 'react-native'
import DropShadow from 'react-native-drop-shadow'
import Icon from 'react-native-vector-icons/MaterialIcons'

interface Props {
	onPress? : (event : GestureResponderEvent) => void
}

const NewPod : React.FC<Props> = (props) => {

	const onPress = props.onPress

	return (
		<DropShadow style={styles.shadow}>
			<Pressable onPress={onPress} style={styles.container}>
				<Icon style={styles.icon} name='add'/>
			</Pressable>
		</DropShadow>
	)

}

export default NewPod

const styles = StyleSheet.create({
	shadow : {
		shadowOpacity : 0.3,
		shadowRadius : 1,
		shadowColor : 'black'
	},
	container : {
		height : 60,
		margin : 5,
		justifyContent : 'center',
		alignItems : 'center',
		borderRadius : 5,
		backgroundColor : 'white'
	},
	icon : {
		fontSize : 50,
		color : 'lightgray'
	}
})