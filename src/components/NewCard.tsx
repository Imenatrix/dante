import React from 'react'
import {
	Pressable,
	StyleSheet,
	Dimensions,
	GestureResponderEvent
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

interface Props {
	onPress : (event : GestureResponderEvent) => void
}

const NewCard : React.FC<Props> = (props) => {

	return (
		<Pressable onPress={props.onPress} style={styles.container}>
			<Icon style={styles.icon} name='add'/>
		</Pressable>
	)

}

export default NewCard

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
