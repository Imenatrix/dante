import React from 'react'
import {
	Pressable,
	Text,
	StyleSheet,
	GestureResponderEvent
} from 'react-native'

interface Props {
	onPress : (event : GestureResponderEvent) => void
	title : string,
}

const CardBoxPod : React.FC<Props> = (props) => {

	const title = props.title
	const onPress = props.onPress

	return (
		<Pressable onPress={onPress} style={styles.container}>
			<Text style={styles.txtTitle}>{title}</Text>
		</Pressable>
	)

}

export default CardBoxPod

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