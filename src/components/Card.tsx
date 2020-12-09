import React from 'react'
import {
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
	Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

interface Props {
	title : string
}

const Card : React.FC<Props> = (props) => {

	const title = props.title

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Pressable style={styles.btnEndTime}>
					<Icon style={styles.iconBtnEndTime} name='schedule'/>
				</Pressable>
				<View style={styles.headerText}>
					<TextInput style={styles.txtTitle}>
						{title}
					</TextInput>
					<Text style={styles.txtEndTime}>
						Ends at: 23:00
					</Text>
				</View>
			</View>
			<ScrollView style={styles.podDrawer}>
				{props.children}
			</ScrollView>
		</View>
	)

}

export default Card

const styles = StyleSheet.create({
	container : {
		flex : 1,
		width : Dimensions.get('window').width - 40,
		marginVertical : 10,
		marginLeft : 10,
		borderRadius : 5,
		overflow : 'hidden'
	},
	header : {
		flexDirection : 'row',
		alignItems : 'center',
		padding : 10,
		backgroundColor : 'gray'
	},
	btnEndTime : {
		width : 50,
		height : 50,
		backgroundColor : 'green',
		borderRadius : 25,
		justifyContent : 'center',
		alignItems : 'center'
	},
	iconBtnEndTime : {
		fontSize : 35
	},
	headerText : {
		flex : 1,
		marginRight : 50,
		alignItems : 'center'
	},
	txtTitle : {
		fontSize : 30,
	},
	txtEndTime : {
		marginTop : -10,
	},
	podDrawer : {
		paddingVertical : 5,
		backgroundColor : 'lightgray'
	}
})