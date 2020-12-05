import React from 'react'
import {
	StyleSheet,
	View,
	Animated
} from 'react-native'

interface Props {
	open? : boolean
}

interface State {
	backgroundOpacity : Animated.Value
	bodyFlex : Animated.Value
}

export default class SideMenu extends React.Component<Props, State> {

	constructor(props : Props) {
		super(props)
		this.state = {
			backgroundOpacity : this.props.open ? new Animated.Value(0.4) : new Animated.Value(0),
			bodyFlex : this.props.open ? new Animated.Value(3) : new Animated.Value(0)
		}
	}

	open = () => {
		Animated.timing(this.state.bodyFlex, {
			toValue : 3,
			duration : 300,
			useNativeDriver : false
		}).start()
		Animated.timing(this.state.backgroundOpacity, {
			toValue : 0.4,
			duration : 300,
			useNativeDriver : false
		}).start()
	}

	close = () => {
		Animated.timing(this.state.bodyFlex, {
			toValue : 0,
			duration : 300,
			useNativeDriver : false
		}).start()
		Animated.timing(this.state.backgroundOpacity, {
			toValue : 0,
			duration : 300,
			useNativeDriver : false
		}).start()
	}

	componentDidUpdate(prevProps : Props) {
		if (prevProps.open) {
			this.open()
		}
		else {
			this.close()
		}
	}

	render() {

		return (
			<View style={styles.container}>
				<Animated.View style={[styles.body, {flex : this.state.bodyFlex}]}>
					{this.props.children}
				</Animated.View>
				<Animated.View style={[styles.background, {opacity : this.state.backgroundOpacity}]}/>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	container : {
		position : 'absolute',
		width : '100%',
		height : '100%',
		flexDirection : 'row',
		zIndex : 1,
		elevation : 1
	},
	body : {
		backgroundColor : 'white'
	},
	background : {
		flex : 1,
		backgroundColor : 'black',
	}
})