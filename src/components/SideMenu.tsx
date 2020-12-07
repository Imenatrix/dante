import React from 'react'
import {
	StyleSheet,
	View,
	Animated,
	Pressable,
	GestureResponderEvent
} from 'react-native'

interface Props {
	open? : boolean
	onBackgroundPress? : (event : GestureResponderEvent) => void,
}

interface State {
	backgroundOpacity : Animated.Value
	bodyFlex : Animated.Value
	zIndex : number,
	open : boolean
}

export default class SideMenu extends React.Component<Props, State> {

	constructor(props : Props) {
		super(props)
		this.state = {
			backgroundOpacity : this.props.open ? new Animated.Value(0.4) : new Animated.Value(0),
			bodyFlex : this.props.open ? new Animated.Value(3) : new Animated.Value(0),
			zIndex : this.props.open ? 1 : 0,
			open : this.props.open != undefined ? this.props.open : false
		}
	}

	open = () => {
		this.setState({
			open : true
		})
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
		}).start(() => {
			this.setState({
				open : false
			})
		})
	}

	componentDidUpdate(prevProps : Props) {
		if (prevProps.open != this.props.open){
			if (this.props.open) {
				this.open()
			}
			else {
				this.close()
			}
		}
	}

	render() {

		const bodyFlex = this.state.bodyFlex
		const backgroundOpacity = this.state.backgroundOpacity
		const zIndex = this.state.zIndex
		const onBackgroundPress = this.props.onBackgroundPress

		return (
			<View style={styles.container}>
				{this.state.open && <>
					<Animated.View style={[styles.body, {flex : bodyFlex}]}>
						{this.props.children}
					</Animated.View>
					<Animated.View style={[styles.background, {opacity : backgroundOpacity}]}>
						<Pressable onPress={onBackgroundPress} style={styles.backgroundPressable}/>
					</Animated.View>
				</>}
			</View>
		)
	}

}

const styles = StyleSheet.create({
	container : {
		position : 'absolute',
		width : '100%',
		height : '100%',
		flexDirection : 'row'
	},
	body : {
		backgroundColor : 'white'
	},
	background : {
		flex : 1,
		backgroundColor : 'black',
	},
	backgroundPressable : {
		flex : 1
	}
})