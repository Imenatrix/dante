import React from 'react'
import {
	ScrollView,
	Dimensions,
	StyleSheet,
	View,
	Pressable,
	TextInput,
	GestureResponderEvent
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

interface Props {
	title : string,
	onBtnSideMenuPress? : (event : GestureResponderEvent) => void
}

const CardBox : React.FC<Props> = (props) => {

	const title = props.title

	return (
		<View style={styles.container}>				
			<View style={styles.header}>
				<Pressable onPress={props.onBtnSideMenuPress} style={styles.btnSideMenu}>
					<Icon style={styles.iconBtnSideMenu} name='menu'/>
				</Pressable>
				<TextInput style={styles.txtTitle}>
					{title}
				</TextInput>
				<Pressable style={styles.btnConfirm}>
					<Icon style={styles.iconBtnConfirm} name='check'/>
				</Pressable>
			</View>
			<ScrollView
				horizontal
				disableIntervalMomentum
				contentContainerStyle={styles.contentContainerStyle}
				snapToInterval={Dimensions.get('window').width - 30}
				decelerationRate='fast'>
				{props.children}
			</ScrollView>
		</View>
	)

}

export default CardBox

const styles = StyleSheet.create({
	container : {
		flex : 1
	},
	header : {
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
	contentContainerStyle : {
		paddingLeft : 10,
		paddingRight : 20
	}
})