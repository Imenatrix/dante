import React from 'react'
import {
	GestureResponderEvent,
	Pressable,
	StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

interface Props {
	onPress? : (event : GestureResponderEvent) => void
}

export default class NewPod extends React.Component<Props> {

	render() {

		const onPress = this.props.onPress

		return (
			<Pressable onPress={onPress} style={styles.container}>
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