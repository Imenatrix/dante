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
	onBtnSideMenuPress? : (event : GestureResponderEvent) => void
}

export default class CardBox extends React.Component<Props> {

	render() {
		return (
			<View style={styles.container}>				
				<View style={styles.header}>
					<Pressable onPress={this.props.onBtnSideMenuPress} style={styles.btnSideMenu}>
						<Icon style={styles.iconBtnSideMenu} name='menu'/>
					</Pressable>
					<TextInput style={styles.txtTitle}>
						Week
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
					{this.props.children}
				</ScrollView>
			</View>
		)
	}

}

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