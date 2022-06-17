import React from 'react'
import {
	Pressable,
	Text,
	StyleSheet,
	GestureResponderEvent
} from 'react-native'
import DropShadow from 'react-native-drop-shadow'

interface Props {
	onPress : (event : GestureResponderEvent) => void
	title : string,
}

const CardBoxPod : React.FC<Props> = (props) => {

	const title = props.title
	const onPress = props.onPress

	return (
		<DropShadow style={styles.shadow}>
			<Pressable onPress={onPress} style={styles.container}>
				<Text style={styles.txtTitle}>{title}</Text>
			</Pressable>
		</DropShadow>
	)

}

export default CardBoxPod

const styles = StyleSheet.create({
	shadow : {
		shadowColor : 'black',
		shadowOpacity : 0.3,
		shadowRadius : 1
	},
	container : {
		height : 60,
		margin : 5,
		borderRadius : 5,
		backgroundColor : colors.background,
		justifyContent : 'center',
		padding : 10
	},
	txtTitle : {
		fontSize : 20
	}
})