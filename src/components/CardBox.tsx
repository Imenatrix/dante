import React from 'react'
import {
	ScrollView,
	Dimensions,
	StyleSheet
} from 'react-native'

export default class CardBox extends React.Component {

	render() {
		return (
			<ScrollView
				horizontal
				disableIntervalMomentum
				contentContainerStyle={styles.contentContainerStyle}
				snapToInterval={Dimensions.get('window').width - 30}
				decelerationRate='fast'>
				{this.props.children}
			</ScrollView>
		)
	}

}

const styles = StyleSheet.create({
	contentContainerStyle : {
		paddingLeft : 10,
		paddingRight : 20
	}
})